import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from "./views/Test.vue"

new Vue({
    el: '#app',
    router: VueRouter,
    template: '<Test/>', 
    components: {
        Test
    }
});