/* .js files add interaction to your website */


var factList = [
  "Honduras has one of the highest femicide rate in latin america. Source: Naciones Unidas",
  "In 2020, more than 278 lives were lost in the country and, as of November 2021, more than 240 were murdered. Source: United Nations",
  "A woman is killed every 23 hours on average. Source: National Autonomous University of Honduras’ Violence Observatory",
  "60 percent of perpetrators were domestic partners. Source: National Autonomous University of Honduras’ Violence Observatory"
]

var fact = document.getElementById("fact");
var myButton = document.getElementById("factButton");
var count = 0;

myButton.addEventListener("click", displayFact);



function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


