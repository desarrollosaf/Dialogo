import { Sequelize } from "sequelize"

// const sequelize = new Sequelize('dialogo', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     define: {
//         freezeTableName: true // evita que Sequelize pluralice
//     }
// })
const sequelize = new Sequelize('adminplem_dialogo', 'usr_dialogo', '6VJNiRsTZAj96HgZnc4G', {
    host: '192.168.36.53',
    dialect: 'mysql',
    define: {
        freezeTableName: true // evita que Sequelize pluralice
    }
})
export default sequelize 