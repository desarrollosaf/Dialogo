"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize('dialogo', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     define: {
//         freezeTableName: true // evita que Sequelize pluralice
//     }
// })
const sequelize = new sequelize_1.Sequelize('adminleg_dialogo', 'adminleg_dialogo', 'Querty12_12*', {
    host: '72.167.46.27',
    dialect: 'mysql',
    define: {
        freezeTableName: true // evita que Sequelize pluralice
    }
});
exports.default = sequelize;
