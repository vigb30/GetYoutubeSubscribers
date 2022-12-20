const subscriber = require('../controllers/subscriberController')
const subscriberRoute = require('express').Router()
const {celebrate, Joi} = require('celebrate')

subscriberRoute.get('/subscribers', subscriber.getAllSubscribers)

subscriberRoute.get('/subscribers/names', subscriber.getAllSubscriberNames)

subscriberRoute.get('/subscribers/:id', celebrate({
    params: Joi.object().keys({
        id: Joi.string().required()
    })
}), subscriber.getSubscriberById)

module.exports = subscriberRoute