/*
*   Your task is to create a calculator. You can create
*   your calculator using any of the DOM manipulation
*   techniques we learned throughout the semester. Use
*   javascript's eval function to perform the calculation.
*   If an error occurs, show ERROR on the calculator
*   'screen'.
*
*   Example of using eval: var result = eval('10+4*2');
*
*   Requirements:
*     - Buttons for every digit 0-9
*     - Buttons for +, -, /, *
*     - Button to backspace or clear <-
*     - Button to execute calculation =
*     - Calculator 'screen' should update as buttons
*       are pressed including numbers, operations, etc
*     - Result should show on calculator 'screen'
*     - Upon submitting and showing result, calculator
*       should reset on next button click, starting new
*       calculation
*     - If an error occurs, for example inputting ---6,
*       calculator 'screen' should output 'ERROR'
*     - Calculator 'screen' should fit at least 10
*       characters
*     - At least 12 CSS styles
*
*   Submit your JS file, HTML file, and optional CSS/jquery
*   file. Refer to images in Sakai for guidance.
*/
$(document).ready(function(){


function back_space(add_to_screen, calc_screen) {
  //first split the screen numbers/operators into an array
  var calc_array = calc_screen.text().split("");
  //delete the last number/operator from the array
  calc_array.pop();
  //reset the calc_screen
  calc_screen.text("");
  //loop through the array and add back the remaining numbers/operators to the calc_screen
  for (var i=0; i<calc_array.length; i++) {
    calc_screen.append(calc_array[i]);
  }
}

function run_calculation(add_to_screen, calc_screen) {
  //try to run the calculation and display the equation
  try {
  var answer = eval(calc_screen.text());
  calc_screen.append(add_to_screen+answer);
  } catch (error) {
    calc_screen.text("ERROR");
  }
}

//main function to call the other functions
function calc(event) {
  //get the number/operator from the clicked button
  var add_to_screen = event.target.innerText;

  //get the calc screen object
  var calc_screen = $('#calc_screen');

  //if user hits 'c', delete the last number/operator
  if (add_to_screen=='c') {
    back_space(add_to_screen, calc_screen);
  }
    //reset the screen for a new calculation or after an error
    else if (/[=]/.test(calc_screen.text()) || (calc_screen.text()=="ERROR")) {
      calc_screen.text("");
    }
    //if the user hits the '=' button, run the calculation or display an error
    else if (add_to_screen == '=') {
      run_calculation(add_to_screen, calc_screen);
    }
    //if the user hits a number or operator, add to the calc_screen
    else {
      calc_screen.append(add_to_screen);
    }
}
//event handler that calls the calc function
$('button').on("click", calc);

});
