import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import routes generated by Voie
import routes from 'voie-pages'
// progress bar
import NProgress from 'nprogress'

export default (app: App) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(() => { NProgress.start() })
  router.afterEach(() => { NProgress.done() })

  app.use(router)
}
