import Vue from "vue"
import Vuex from 'vuex'

import cart from "@/store/module/cart";
import parameters from "@/store/module/parameters";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart,
        parameters,
    }
})
