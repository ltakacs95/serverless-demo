exports.helloWorld = (event, context) => {
  console.log('hello serverless world')
  return {
    status: 202,
    data: {
      key: 'value'
    }
  }
}
