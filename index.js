var katzDeliLine = [];
// var otherDeli = [];
var count = katzDeliLine.length
var mainCount = 0
function takeANumber(y){
  mainCount++
  katzDeliLine.push(mainCount)
  var welcome = 'Welcome,'+mainCount+' You are number '+katzDeliLine.length+' in line.'
  return katzDeliLine, welcome
  // if (y === katzDeliLine){
  //   katzDeliLine.push(x)
  //   console.log('Welcome, '+x+'. You are number '+katzDeliLine.length+' in line.');
  //   // return console.log('Welcome, '+x+'. You are number '+count+' in line.');
  //   return katzDeliLine
  // } else {
  //   otherDeli = y
  //   otherDeli.push(x)
  //   console.log('Welcome, '+x+'. You are number '+otherDeli.length+' in line.');
  //   // return console.log('Welcome, '+x+'. You are number '+count+' in line.');
  //   return otherDeli
  // }

}

function nowServing(x){
  if (x.length === 0){
    var noone = 'There is nobody waiting to be served!'
    return noone
  } else {
    var served = 'Currently serving '+x[0]+'.'
    x.shift()
    return x, served

  }
}

function currentLine(line){
  if (line.length === 0){
    var noone = "The line is currently empty."
    return noone
  } else{
    var x = ""
    var count = 1
    for (var i=0;i<line.length;i++){
      x += count+". " + line[i] + ", ";
      //Adds 1. Name, 2. Name 3.Name
      count++
    }
    x = x.slice(0, -2);
    var info = 'The line is currently: '+x
    //the line is currently: 1. Name, 2. Name 3.Name
    return info
  }

}
