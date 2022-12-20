const subscriber = require('./subscriber.route');


module.exports = (app) => {
    app.use("/", subscriber)
    
};