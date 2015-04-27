module.exports = function(helloMsg, goodByeMsg) {
  return {
            sayHello : function() {
              return helloMsg;
            }
            sayGoodBye : function() {
              return goodByeMsg
            }
         };
}
