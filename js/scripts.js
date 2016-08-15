

$(document).ready(function() {
  $("form").submit(function(event) {


    var fruit = $("#fruit").val();
    var actor = $("#actor").val();
    var animal = $("#animal").val();
    var drink = $("#drink").val();

var response = [fruit, actor, animal, drink];

var response1 = (response[1]);
var response2 = (response[0]);
var response3 = (response[2]);
var final = [response1, response2, response3];
final.forEach(function (data) {
  $("ul").append("<li>" + data + "</li>");
})
// $("button#submit").submit(function() {
//   $("ul").append("<li>response1 + response2+ response3</li>");
// });
console.log(final);

event.preventDefault();



  });
});
