import Vue from "vue"
import VueRouter from "vue-router"
import Init from "@/components/init"
import User from "@/components/users/user"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Init
        },
        {
            path: '/user:id',
            component: User
        },
    ]
})