const menu_pick_type =
    ['unpicked', 'picked', 'unpickable', '', 'unpicked', 'picked', 'unpicked', 'picked', 'unpicked', 'picked'];

import {cancelMenuClick, setClickType} from "./bar-left";
export default {
    name: "MenuItem",
    props: [
        'item',
        'index',
        'select'
    ],
    data: function () {
        return {
            pickStyle: menu_pick_type[this.item.pickType],
        }
    },
    computed: {
        isCheckedShown: function () {
            return this.select === true && (this.item.pickType===6 || this.item.pickType===7);
        },
    },
    methods: {
        cancelMenuClick: cancelMenuClick,
        setClickType: setClickType,
        HandleMouseOver: function (in_or_out) {
            let pickType = this.item.pickType;
            if (pickType < 2 || pickType > 3) {
                // this.setItemPickType(pickType + in_or_out);
                pickType += in_or_out;
                this.item.pickType = pickType;
                this.pickStyle = menu_pick_type[pickType];
            }
            // console.log("this.item.pickType = " + this.item.pickType);
            // console.log((in_or_out === 1 ? "移入" : "移出") + "的组件名为:" + this.item.name);
        },
        chooseOption: function () {
            let pickType = this.item.pickType;//点击的子菜单
            switch (pickType) {
                case 0:     //未选中
                    break;
                case 1:     //已选中
                    this.item.pickType = 0;
                    break;
                case 2:     //无法点击类型
                    return ;
                // case 3:     //预留
                case 4:    //未勾选+未选中  //未选中状态点击后，执行 选中 方法
                // break;
                case 5:    //未勾选+已选中  //取消选中
                    this.item.pickType = 6;
                    //more
                    break;
                case 6:    //已勾选+未选中
                // break;
                case 7:    //已勾选+已选中
                    this.item.pickType = 4;
                    //more
                    break;
                case 8:     //目录未选中
                    //Open the folder.
                    // break;
                    return ;
                case 9:     //目录已选中
                    //Open the folder.
                    // break;
                    return ;
                default:
                    ;
            }
            this.setClickType(9);    //已有子菜单被点击
            // this.cancelMenuClick(); //取消菜单的点击状态
            this.cancelMenuClick(); //简单目录点击后的视觉效果等同于取消
            console.log("刚才点击的是:" + this.item.name);
        },
    }
}