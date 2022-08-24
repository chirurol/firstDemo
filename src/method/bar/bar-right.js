import Vue from "vue";
import BarTime from '../../component/bar/bar-right/bar-time.vue';
import BarButton from '../../component/bar/bar-right/bar-button.vue';
Vue.component('bar-time', BarTime);
Vue.component('bar-button', BarButton);
export default {
    name: "BarRight",
    components: {
        BarTime,
        BarButton
    },
    computed: {
        BarButtons: () => initBarButtons()
    },
    methods: {
        showNotice: function () {
            this.$store.commit('switchNotice');
            console.log('Show Notice');
        }
    }
};

class BB {
    constructor(name, icon, target = '', isShown = true) {
        [this.name, this.icon, this.target, this.isShown] = [name, '../../../media/' + icon + '.png', target, isShown];
    }
}
const initBarButtons = () => {
    let barButtons = [];
    barButtons.push(new BB('Siri', 'siri'));
    barButtons.push(new BB('Siri2', 'siri'));
    return barButtons;
}