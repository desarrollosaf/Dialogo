import { Sequelize } from "sequelize"

// const sequelize = new Sequelize('dialogo', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     define: {
//         freezeTableName: true // evita que Sequelize pluralice
//     }
// })
const sequelize = new Sequelize('adminleg_dialogo', 'adminleg_dialogo', 'Querty12_12*', {
    host: '72.167.46.27',
    dialect: 'mysql',
    define: {
        freezeTableName: true // evita que Sequelize pluralice
    }
})
export default sequelize 