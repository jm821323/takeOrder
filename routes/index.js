const Router = require('koa-router')
const UserController = require('../controllers/user')
const ArticleController = require('../controllers/menu')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 用户接口
 */
// 用户注册
router.post('/user', UserController.create);
// 用户登录
router.post('/user/login', UserController.login);
// 获取用户信息
router.get('/user', UserController.getUserInfo);
// 获取用户列表
router.get('/user/list', UserController.getUserList);
// 删除用户
router.delete('/user/:id', UserController.delete);

/**
 * 菜单接口
 */
// 创建菜单
router.post('/Menu', ArticleController.create);
// 获取菜单
router.get('/Menu', ArticleController.getArticleList);
// 获取菜单
router.get('/Menu/:id', ArticleController.detail);
// 删除菜单
router.delete('/Menu/:id', ArticleController.delete);
// 更改菜单
router.put('/Menu/:id', ArticleController.update);

module.exports = router
