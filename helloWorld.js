const rn = require('random-number')
const options = {
  min: 1000,
  integer: true
}
const ist = rn(options)
exports.helloWorld = (event, context) => {
  console.log('hello serverless world')
  return {
    status: 200,
    response_headers: {
      'Content-Type': 'application/json'
    },
    data: {
      key: 'value' + ist
    }
  }
}
