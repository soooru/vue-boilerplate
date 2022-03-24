import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

//라우터 진입 전
// router.beforeEach((routeTo, routeFrom, next) => {
// })

//라우터 진입 후
// router.afterEach(() => {
// })

//중첩된 라우터 오류 방지
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => {
    if (err.name !== "NavigationDuplicated") throw err
  })
}
export default router
