import HomePage from "@/pages/Home/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import SuccessPage from "@/pages/SuccessPage.vue";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/success",
        name: "Success",
        component: SuccessPage
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage
    }
]