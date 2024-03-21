import Vue from "vue"
import VueRouter from "vue-router"
import Init from "@/components/Init.vue"
import Menu from "@/components/template/Menu.vue";
const User = () => import(/* webpackChunkName: "group-user" */'./components/user/User.vue')
const UserList = () => import(/* webpackChunkName: "group-user" */'./components/user/UserList.vue')
const UserEdit = () => import(/* webpackChunkName: "group-user" */'./components/user/UserEdit.vue')
const UserDetail = () => import(/* webpackChunkName: "group-user" */'./components/user/UserDetail.vue')

Vue.use(VueRouter)

const router= new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            //component: Init
            components: {
                default: Init,
                menu: Menu
            }
        },
        {
            path: '/user',
            //component: User,
            components: {
                default: User,
                menu: Menu
            },
            props: true,
            children: [
                {path: '', component: UserList, beforeEnter: (to, from, next) => {next()}},
                {path: ':id', component: UserDetail, props: true},
                {path: ':id/edit', component: UserEdit, props: true, name: 'userEdit'},
            ]
        },
        {
            path: '/redirect',
            redirect: '/user'
        },
        {
            path: '*',
            redirect: '/'
        },
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {selector: to.hash}
        }
    },
})

router.beforeEach((to, from, next) => {
    next()
});

export default router;