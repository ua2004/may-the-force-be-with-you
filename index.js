var may = function(theForce) {
   if(theForce == "the Force")
   {
      return {beWith: beWith};
   }
   else
   {
      return {beWith: function() {
         return "Use the Force, Luke!";
      }};
   }
};

var beWith = function(whom) {
   return "May the Force be with " + whom + "!";
}

module.exports = may;
