//domain/.netlify/functions/hello
const items = [
  {id:1,name:'john'},
  {id:1,name:'suzan'},
]

exports.handler = async function (event,context) {
  return {
    statusCode: 200,
    body: 'payment intent',
  }
}