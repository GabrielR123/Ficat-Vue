import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cb7dbbb8 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4a9212e9 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _f8bec000 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _82f811c8 = () => interopDefault(import('../pages/statistics.vue' /* webpackChunkName: "pages/statistics" */))
const _ad6bea36 = () => interopDefault(import('../pages/talk.vue' /* webpackChunkName: "pages/talk" */))
const _2cfabfd2 = () => interopDefault(import('../pages/tutorial.vue' /* webpackChunkName: "pages/tutorial" */))
const _0a6c3944 = () => interopDefault(import('../pages/admin/areas_do_conhecimento.vue' /* webpackChunkName: "pages/admin/areas_do_conhecimento" */))
const _39e33c60 = () => interopDefault(import('../pages/admin/cursos.vue' /* webpackChunkName: "pages/admin/cursos" */))
const _51a04fca = () => interopDefault(import('../pages/admin/unidades_academicas.vue' /* webpackChunkName: "pages/admin/unidades_academicas" */))
const _81f83384 = () => interopDefault(import('../pages/admin/usuarios.vue' /* webpackChunkName: "pages/admin/usuarios" */))
const _8c0e062e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _cb7dbbb8,
    name: "about"
  }, {
    path: "/admin",
    component: _4a9212e9,
    name: "admin"
  }, {
    path: "/login",
    component: _f8bec000,
    name: "login"
  }, {
    path: "/statistics",
    component: _82f811c8,
    name: "statistics"
  }, {
    path: "/talk",
    component: _ad6bea36,
    name: "talk"
  }, {
    path: "/tutorial",
    component: _2cfabfd2,
    name: "tutorial"
  }, {
    path: "/admin/areas_do_conhecimento",
    component: _0a6c3944,
    name: "admin-areas_do_conhecimento"
  }, {
    path: "/admin/cursos",
    component: _39e33c60,
    name: "admin-cursos"
  }, {
    path: "/admin/unidades_academicas",
    component: _51a04fca,
    name: "admin-unidades_academicas"
  }, {
    path: "/admin/usuarios",
    component: _81f83384,
    name: "admin-usuarios"
  }, {
    path: "/",
    component: _8c0e062e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
