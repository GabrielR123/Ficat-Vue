const Router = require('koa-router')
const BodyParser = require('koa-body')
const unless = require('koa-unless')

const { MessageCodes } = require('../shared/messageCodes')
const { pageableEntity, query, routeValidate } = require('./util/middlewares')
const frontend = require('./routes/frontend')
const HttpCodes = require('./httpCodes')

// Route validation object
// const fields = require('./routeFieldsValidation')

// Entities routes
const userRoutes = require('./routes/users')
const kaRoutes = require('./routes/knowledgeAreas')
const courseRoutes = require('./routes/courses')
const acdUnitiesRoutes = require('./routes/academicUnities')
const catalogRoutes = require('./routes/catalogCards')
const miscRoutes = require('./routes/miscellaneous')

// Auth* routes
const { auth, authz } = require('./routes/auth')

const router = new Router()
const api = new Router({ prefix: '/api' })

const bodyParser = BodyParser()

/**
 * api middlewares
 */

// Authentication
api.post('/auth', bodyParser, routeValidate('auth'), auth)

/**
 * Use middleware de autorização (authz) em todas as
 * rotas, exceto autenticação (funcionários), e GET /knowledgeAreas,
 * GET /academicUnities e criação de registro
 * de ficha catalográfica (usuários finais)
 */

authz.unless = unless

router.use('/admin', authz)

api.use(
  authz.unless({
    custom: ctx =>
      ctx.path === '/api/auth' ||
      (ctx.path.includes('knowledgeAreas') && ctx.method === 'GET') ||
      (ctx.path.includes('academicUnities') && ctx.method === 'GET') ||
      (ctx.path === '/api/catalogCards' && ctx.method === 'POST') ||
      (/\/api\/catalogCards\/get/.test(ctx.path) && ctx.method === 'GET') ||
      (ctx.path === '/api/catalogCards/reportResult' && ctx.method === 'GET') ||
      (ctx.path === '/api/courses' && ctx.method === 'GET') ||
      // (ctx.path === '/api/courses' && ctx.method === 'POST') ||
      (ctx.path === '/api/send' && ctx.method === 'POST') ||
      (ctx.path === '/api/captcha' && ctx.method === 'GET')
  })
)

router.redirect('/admin/', '/admin/cursos/')

/**
 * Catalog cards
 */

// create
api.post(
  '/catalogCards/',
  bodyParser,
  routeValidate('catalogCard'),
  catalogRoutes.create
)

// get result
api.get('/catalogCards/get/:id', catalogRoutes.getPdfResult)

api.get('/catalogCards/', catalogRoutes.list)

// get oldest card year
api.get('/catalogCards/oldest', catalogRoutes.getFirstCatalogCardYear)

// get catalog queries
api.post(
  '/catalogCards/q/',
  bodyParser,
  query(['searchType']),
  catalogRoutes.catalogQueries
)

api.get('/catalogCards/reportResult', catalogRoutes.getReportPdf)

/**
 * Users
 */

// create
api.post(
  '/users/',
  bodyParser,
  routeValidate('users', 'create'),
  userRoutes.create
)

// list
api.get('/users/', userRoutes.list)

// find by id
api.get('/users/:id', userRoutes.findById)

// toggle active
api.put(
  '/users/:id',
  bodyParser,
  routeValidate('users', 'update'),
  userRoutes.update
)

/**
 * KnowledgeAreas
 */

// create
api.post(
  '/knowledgeAreas/',
  bodyParser,
  routeValidate('knowledgeAreas', 'create'),
  kaRoutes.create
)

// list
api.get(
  '/knowledgeAreas/',
  query(['page', 'size', 'description', 'code', 'categoryCode']),
  pageableEntity,
  kaRoutes.list
)

// find by id
api.get('/knowledgeAreas/:id', kaRoutes.findById)

// find by cdd category

// api.get('/knowledgeAreas/cat', query(['categoryCode']), kaRoutes.findByCategory)

// update
api.put(
  '/knowledgeAreas/:id',
  bodyParser,
  routeValidate('knowledgeAreas', 'update'),
  kaRoutes.update
)

// delete
api.del('/knowledgeAreas/:id', kaRoutes.del)

/**
 * Courses
 */

// create
api.post(
  '/courses/',
  bodyParser,
  routeValidate('courses', 'create'),
  courseRoutes.create
)

// list
api.get('/courses/', query(['unityAcronym', 'type']), courseRoutes.list)

// find by id
api.get('/courses/:id', courseRoutes.findById)

// update
api.patch(
  '/courses/:id',
  bodyParser,
  // routeValidate('courses', 'update'),
  courseRoutes.update
)

// delete
api.del('/courses/:id', courseRoutes.del)

/**
 * AcademicUnities
 */

// create
api.post(
  '/academicUnities/',
  bodyParser,
  routeValidate('academicUnities', 'create'),
  acdUnitiesRoutes.create
)

// list
api.get('/academicUnities/', query(['term']), acdUnitiesRoutes.list)

// find by id
api.get('/academicUnities/:id', acdUnitiesRoutes.findById)

// update
api.put(
  '/academicUnities/:id',
  bodyParser,
  routeValidate('academicUnities', 'update'),
  acdUnitiesRoutes.update
)

// delete
api.del('/academicUnities/:id', acdUnitiesRoutes.del)

api.post(
  '/send',
  BodyParser({ multipart: true }),
  routeValidate('email'),
  miscRoutes.send
)

api.get('/captcha', miscRoutes.captchaValidate)

// api not found
api.use('/*', ctx => {
  ctx.status = HttpCodes.NOT_FOUND
  ctx.body = MessageCodes.error.errNotFound
})

router.use(api.routes())

// frontend rendering
router.get('*', frontend.render)

module.exports = router
