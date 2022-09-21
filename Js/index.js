let text;
if (window.top != window.self)  {
  text = "This is not the topmost window! Am I in a frame?";
} else { 
  text = "This is the topmost window!";
} 
document.getElementById("demo").innerHTML = text;
// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);