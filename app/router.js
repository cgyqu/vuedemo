import Index from "./views/Index.vue"
import Test from "./views/Test.vue"

export default {
    routes: [
        {
            path: "/index",
            component: Index
        },
        {
            path: "/test",
            component: Test
        }
    ]
}