const db = require('../config/db')
const Sequelize = db.sequelize;
const Menu = Sequelize.import('../schema/menu');
Menu.sync({force: false});

class ArticleModel {
    /**
     * 创建菜单
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data) {
        return await Menu.create({
            title: data.title,
            author: data.author,
            content: data.content,
            category: data.category
        })
    }

    /**
     * 更新菜单数据
     * @param id  用户ID
     * @param status  事项的状态
     * @returns {Promise.<boolean>}
     */
    static async updateArticle(id, data) {
        await Menu.update({
            title: data.title,
            author: data.author,
            content: data.content,
            category: data.category
        }, {
            where: {
                id
            },
            fields: ['title', 'author', 'content', 'category']
        })
        return true
    }

    /**
     * 获取菜单列表
     * @returns {Promise<*>}
     */
    static async getArticleList() {
        return await Menu.findAndCountAll()
    }

    /**
     * 获取菜单详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id) {
        return await Menu.findOne({
            where: {
                id,
            },
        })
    }

    /**
     * 删除菜单
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async deleteArticle(id) {
        await Menu.destroy({
            where: {
                id,
            }
        })
        return true
    }

}

module.exports = ArticleModel
