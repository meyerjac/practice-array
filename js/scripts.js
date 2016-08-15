

$(document).ready(function() {
  $("form").submit(function(event) {


    var fruit = $("#fruit").val();
    var actor = $("#actor").val();
    var animal = $("#animal").val();
    var drink = $("#drink").val();

var response = [fruit, actor, animal, drink]

console.log(response)

event.preventDefault();



  });
});
