var katzDeli = [];

function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  // var i = 0;
  // for (i = 0; i < katzDeli.length; i++) {
  //   katzDeli.push("Welcome,"+ katzDeli[i] +". You are number"+ i+1 +"in line.")
  // }
  // console.log(katzDeli)
return "Welcome, "+ newPerson +". You are number "+ katzDeli.length +" in line.";
}

function nowServing(katzDeli,newPerson){
 katzDeli.push(newPerson)
 if (katzDeli[newPerson]){
   return "Now Serving "+ newPerson 
   katzDeli.shift(newPerson)
 }
 else {
   return "There is nobody waiting to be served!"
 }
return console.log(katzDeli)
}












