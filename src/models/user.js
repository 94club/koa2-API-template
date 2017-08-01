import {Sequelize, db} from '../lib/sequelize'

export const User = db.define('api_user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.BIGINT
  },
  updatedAt: {
    type: Sequelize.BIGINT
  }
},
{
  timestamps: false
})
