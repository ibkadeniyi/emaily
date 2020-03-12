//keys.js figure out credentials to reutrn
if (process.env.NODE_ENV === 'production') {
    //we are in production return the production set of keys
    module.exports = require('./prod.js')
} else {
    //we are in development return development set of keys
    module.exports = require('./dev.js');
}