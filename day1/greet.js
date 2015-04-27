// module.exports = function(helloMsg, goodbyeMsg) {
//   return {
//             sayHello : function() {
//               return helloMsg;
//             },

//             sayGoodbye : function() {
//               return goodbyeMsg;
//             }

//          };
// }

exports.sayHello = function (message) {
  return "Hello There: " + message;
}

exports.sayGoodbye = function (message) {
  return "Goodbye: " + message;
}
