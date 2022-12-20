const subscriberModel = require('../models/subscribers')
const {isEmpty, result} = require('lodash')
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

module.exports = {

    getAllSubscribers: async(req, res) => {
           const data = await subscriberModel.find({})
            if (!isEmpty(data)) {
                return res.status(200).json({
                    status: true,
                    message: "Subscribers fetched successfully",
                    result: data,
                })
            }
        
    },

    getAllSubscriberNames: async(req, res) => {
        const data = await subscriberModel.find({}, {_id: 0, name: 1, subscribedChannel: 1})
        if (!isEmpty(data)) {
            return res.status(200).json({
                status: true,
                message: "Subscribers fetched successfully",
                result: data
            })
        }
    },

    getSubscriberById: async(req, res) => {
        try {
            let findOBj ={
             _id:req.params.id,
            }
             const data = await subscriberModel.findOne(findOBj) 
             if (!isEmpty(data._id)) {
                 res.status(200).json({
                     status: true,
                     message: "Subscriber found",
                     result: data
                 })
             } 
         } catch (error) {
             res.status(400).json({
                 status: false,
                 message: error.message
             });
         }
     },
    
 
}