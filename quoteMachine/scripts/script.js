var people = [
{


  quote:"Confidence is the most important single factor in this game, and no matter how great your natural talent, there is only one way to obtain and sustain it: work",

  author: "Jack Nicklaus"
},
{

quote: "Success is the inner satisfaction and peace of mind that come from knowing I did the best I was capable of doing for the group.",

author: "Jim Tressel"
},
{
 quote:"A woman at the Limited once asked me, 'Why do you work?' She said, 'You made a lot of money as a young man, so why are you still working?' I had never thought about it before. Forced to consider it, I told her, 'You know why? Because I think that if you stop to smell the roses, you'll get hit by a truck.'",


 author: "Les Wexner"
},
{



quote:"A lot of cats are not that social.",

author:'Jack Hanna'
},

{

quote:"Hair nappy but I'm happy pocket full of doe From the C-O representin/' // So So And I got it lock down from the east to the west Look at my eyes, ya know; I ain't playin' That's why all through the streets All hear, sayin' is,",

  author:"Bow Wow"

},
{


quote: "If you want to be a writer, don't worry so much about writing. Read as much as you can. Read as many different writers as you can. Soak up the styles.",
author: "R. L. Stine"
}];


var prop;
var random;

function randomGenerator(arrLength) {
   return Math.floor(Math.random() * arrLength);
}


$("#btn").click(function() {
  random = randomGenerator(people.length);
  $(".random-quotes").html(people[random].quote + "<p class='author'>-" + people[random].author + "</p>");
  console.log(random);


});
