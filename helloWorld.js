exports.helloWorld = (event, context) => {
  console.log('hello serverless world')
  return {
    status: 200,
    response_headers: {
      'Content-Type': 'application/json'
    },
    data: {
      key: 'value'
    }
  }
}
