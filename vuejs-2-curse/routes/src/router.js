import Vue from "vue"
import VueRouter from "vue-router"
import Init from "@/components/Init.vue"
import User from "@/components/user/User.vue"
import UserList from "@/components/user/UserList.vue";
import UserEdit from "@/components/user/UserEdit.vue"
import UserDetail from "@/components/user/UserDetail.vue"
import Menu from "@/components/template/Menu.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            //component: Init
            components:{
                default: Init,
                menu: Menu
            }
        },
        {
            path: '/user',
            //component: User,
            components:{
              default: User,
              menu: Menu
            },
            props: true,
            children: [
                {path: '', component: UserList},
                {path: ':id', component: UserDetail, props: true},
                {path: ':id/edit', component: UserEdit, props: true, name: 'userEdit'},
            ]
        },
    ]
})