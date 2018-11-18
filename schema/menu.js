const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('menu', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        // 热菜标题
        hotDishes: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'hotDishes'
        },
        // 桌号
        ramahin: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ramahin'
        },
        // 凉菜
        coolDishes: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'coolDishes'
        },
        // 主食
        stapleFood: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'stapleFood'
        },
        // 酒水
        drinks: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'drinks'
        },
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: false
    })

}