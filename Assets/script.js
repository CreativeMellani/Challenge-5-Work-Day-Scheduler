// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner// THEN the current day is displayed at the top of the calendar
// referenced for help: https://stackoverflow.com/questions/25734743/how-to-return-the-current-timestamp-with-moment-js and https://www.youtube.com/watch?v=o0lMOtYYB_E
//Get value
let clock = document.getElementById("clock");

//Set Time
 setInterval(function() {
     let date = new Date();
     clock.innerHTML = date.toLocaleTimeString(); //Method

 }, 1000);

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future




// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// reference this video for help save user input src: https://www.youtube.com/watch?v=w9GNyw8AvlM 
document.getElementById("myButton").onClick = function(){
 const myinput = document.getElementById("myText").value; 
 console.log("Todo",myinput);
}


// WHEN I refresh the page
// THEN the saved events persist
