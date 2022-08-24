import Vue from "vue";
import BarItem from '../../component/bar/bar-left/bar-item.vue';
Vue.component('bar-item', BarItem);

export default {
    name: "BarLeft",
    data: () => ({
        barItems: barItems
    }),
    components: {
        BarItem
    }
};

class BI {
    constructor(name) {
        [this.name, this.isPicked = false, this.index = BI.sum++] = [name];
    }
    choose (type, that) {
        //type: 1:click.     0:mouseover_after_click.
        if (type === 1 || (type === 0 && getClickType() === 9)) {
            that.$store.commit('setIndex', this.index);
            setClickType(9);
            if (this.isPicked) {   //  already clicked.
                if (type === 1) {       //click now.
                    cancelMenuClick(that);
                }
                return;
            }
            {
                const temp = this.isPicked;
                for (let i=0; i < barItems.length; i++) {
                    setBarItemIsPicked(i, false);
                }
                this.isPicked = !temp;
            }
        }
    }
}
BI.sum = 0;
const initBarItem = name => new BI(name);
const initBarItems = names => names.map((name) => initBarItem(name));

let barItems = initBarItems(['', 'Dynamic', 'File', 'Control', 'Help']);
export const getBarItemIsPicked = index => barItems[index].isPicked;
export const setBarItemIsPicked = (index, isPicked) => barItems[index].isPicked = isPicked;

let clickType = 0;  //9:one menuItem is clicked.      0:nothing is clicked.
export const getClickType = () => clickType;
export const setClickType = click_type => clickType = click_type;

export function cancelMenuClick (that = this) {
    if (getClickType() === 9) {
        setBarItemIsPicked(that.$store.state.current_bar_index, false);
        that.$store.commit('setIndex');
        setClickType(0);
    }
}