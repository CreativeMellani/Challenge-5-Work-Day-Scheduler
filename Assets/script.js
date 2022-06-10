// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner// THEN the current day is displayed at the top of the calendar
// referenced for help: https://stackoverflow.com/questions/25734743/how-to-return-the-current-timestamp-with-moment-js and https://www.youtube.com/watch?v=o0lMOtYYB_E

// var jun = function moment("2022-06-05T12:00:00Z");
// console.log (currentTime)

//Get value
let clock = document.getElementById("clock");

//Set Time
 setInterval(function() {
     let date = new Date();
     clock.innerHTML = date.toLocaleTimeString(); //Method

 }, 1000);




// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future


// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
