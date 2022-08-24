import Vue from "vue";
import MenuItem from "../../component/bar/bar-left/menu-item.vue";

Vue.component('menu-item', MenuItem);
export default {
    name: "Menus",
    computed: {
        current_bar_index: function () {
            return this.$store.state.current_bar_index;
        },
        menuItems: function () {
            return initMenuItems();
        },
        items: function () {
            return this.menuItems[this.current_bar_index];
        },
        select: function () {
            const p = this.menuItems[this.current_bar_index];
            for (let i of p) {
                if (i.pickType > 5 && i.pickType < 8) {
                    return true;
                }
            }
            return false;
        },
        left: function () {
            const name = "bar_item_" + this.current_bar_index;
            const e = document.getElementById(name);
            return e.offsetLeft + 'px';
        },
    },
    components: {
        MenuItem
    },
}

class MI {
    constructor(name, keys = '', pickType = 0, logo = '') {
        [this.name, this.keys, this.pickType, this.logo] = [name, keys, pickType, logo];
    }
    //  pickType:   0:unpicked;     1:picked;       2:unpickable;   3:reserved;
    //              4:unchecked but unpicked;       5:unchecked but picked;
    //              6:checked but unpicked;         7:checked but picked;
    //              8:unpicked folder;              9:unpicked folder.
}

const initMenuItems = () => {
    let menuItems = [];
    menuItems[0] = [];
    menuItems[0].push(new MI('关于本机', '', 4, '../media/bg.jpg'));
    menuItems[0].push(new MI('系统偏好设置...'));
    menuItems[0].push(new MI('App Store...'));
    menuItems[0].push(new MI('最近使用的项目', '>', 8));
    menuItems[0].push(new MI('强制退出', '⌥⌘⎋'));
    menuItems[0].push(new MI('睡眠'));
    menuItems[0].push(new MI('重新启动'));
    menuItems[0].push(new MI('关机'));
    menuItems[0].push(new MI('锁定屏幕', '⌃⌘Q'));
    menuItems[0].push(new MI('退出登录"Elio"...', '⇪⌘Q'));
    menuItems[1] = [];
    menuItems[1].push(new MI('关于Dynamic'));
    menuItems[1].push(new MI('偏好设置', '⌘,', 6));
    menuItems[1].push(new MI('清倒废纸篓', '', 2));
    menuItems[1].push(new MI('服务', '>', 8));
    menuItems.push(menuItems[0]);
    menuItems.push(menuItems[1]);
    menuItems.push(menuItems[0]);
    return menuItems;
}