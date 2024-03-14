import Vue from "vue"
import VueRouter from "vue-router"
import Init from "@/components/Init.vue"
import User from "@/components/user/User.vue"
import UserList from "@/components/user/UserList.vue";
import UserEdit from "@/components/user/UserEdit.vue"
import UserDetail from "@/components/user/UserDetail.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Init
        },
        {
            path: '/user',
            component: User,
            props: true,
            children: [
                {path: '', component: UserList},
                {path: ':id', component: UserDetail, props: true},
                {path: ':id/edit', component: UserEdit, props: true},
            ]
        },
    ]
})