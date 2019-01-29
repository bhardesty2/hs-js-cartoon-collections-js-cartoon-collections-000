var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves){
  var newDwarves = [];
  for (var i = 0; i < dwarves.length; i++){
  if(i === dwarves.length){
    newDwarves += (i+1 + ". " + dwarves[i]);
  }else {
    newDwarves += (i+1 + ". " + dwarves[i] + " ");
  }
}
return newDwarves;
}

function summonCaptainPlanet(planeteerCalls){
  var planteerCalls = ['APPLE!', 'BANANA!', 'ORANGE!']
  return planteerCalls
}

function longPlaneteerCalls(words){
  for (var i = 1; i < words.length; i++) {
    if(words.length>4){
    return true
  }
}
return false
}

function findTheCheese (foods) {
  for (var i = 1; i <foods.length; i++){
if (foods[i]=== "cheddar"
|| foods[i] === "tomato soup"
|| foods[i] === "crackers"
){
return foods[i]
}
}
return "no cheese!"
}
