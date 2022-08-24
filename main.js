import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./app.vue";
import {cancelMenuClick} from "./src/method/bar/bar-left";
import {cancelNoticeShown} from "./src/component/notice/notice.vue"
Vue.use(Vuex);
Vue.use(VueRouter);

const Routers = [
    {
        path: '/index',
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        component: (resolve) => require(['./views/about.vue'], resolve)
    }
];
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

var store = new Vuex.Store ({
    state: {
        current_bar_index: -1,
        last_bar_index: -1,
        notice_is_opened: false,
        windows: [],//new Set(),
    },
    mutations: {
        setIndex (state, newVal = -1) {
            state.last_bar_index = state.current_bar_index;
            state.current_bar_index = newVal;
        },
        switchNotice (state, newVal) {
            [state.notice_is_opened = !state.notice_is_opened] = [newVal];
        },
        openWindow (state, newWindow) {
            state.windows.push(newWindow);
        },
        closeWindow (state, deleteWindow) {
            state.windows.splice(deleteWindow);
        },
    }
});

app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    methods: {
        randomClick: function () {
            cancelMenuClick(this);
            cancelNoticeShown(this, false);
        }
    }
});