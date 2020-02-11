var average = 0;
function getAverage (a,b){
  average = (a+b) / 2;
  console.log (average);
  return average;
}
var myResult = myAverage(7,11); // global variable
function LogResult(){
  console.log("the average is" + myResult +"inside the function");
}
LogResult();

