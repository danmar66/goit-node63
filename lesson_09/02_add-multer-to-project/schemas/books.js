const Joi = require('joi')

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
})

const bookUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

module.exports = { bookSchema, bookUpdateFavoriteSchema }
