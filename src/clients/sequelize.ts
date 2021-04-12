import { Sequelize } from 'sequelize'

import config from '../config'

const sequelize = new Sequelize(config.databaseURI, { logging: false })

export default sequelize
