import Vue from "vue"
import Router from "vue-router"
import Init from "@/components/init"
import User from "@/components/users/user"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Init
        },
        {
            path: '/user',
            component: User
        },
    ]
})