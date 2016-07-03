// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
//variables for player 1 and player 2
var player = 1;  //Player 1 is 'ehx', then player 2 is 'ohh'

$(".col-md-4").on("click", function(event) {

  //jquery test
  //alert("add symbol here");

  //following is a if/else condition to determine a square has been selected
    //if statement determines square has element 'X' OR 'O'
    //hasClass method = Determine whether any of the matched elements are assigned the given class; In this case 'X' OR 'O'.
    //else statement determines if square is free
        //following is an event that bounces back/forth between two players 'X' or 'O' || player 1 or player 2
            //addClass method = Adds the specified class(es) to each element in the set of matched elements. In this case is player 1 is 'X', then the other is 'O'.
  var squareSelected = $(this);
    if (squareSelected.hasClass("ehx") || squareSelected.hasClass("ohh")) {
        alert("This square has already been selected. Please select another.");
    } else {
        if (player === 1) {
            squareSelected.addClass("ehx");
              if(checkPlayerWon("ehx")) {   //it is true if player 'x' has won
                alert("Congrats!" + player + " has won.");
              } else {   //if false, then it is player 2's turn
                player = 2;
              }
        } else {
            squareSelected.addClass("ohh");
              if(checkPlayerWon("ohh")) {  //it is true if player 'o' has won
                alert("Congrats!" + player + " has won.");
              } else {   //if false, then it is player 1's turn
                player = 1;
              }

            player = 1;
        }
  }
});
//Following condition and if/else statement will determine squares with symbol 'x' or 'o' has won by one of 3 ways. Return true if player wins
function checkPlayerWon(symbol) {
    //1: winners in horizontal rows.
    if ($(".sqr1").hasClass(symbol) && $(".sqr2").hasClass(symbol) && $(".sqr3").hasClass(symbol)) {
      return true;
    } else if ($(".sqr4").hasClass(symbol) && $(".sqr5").hasClass(symbol) && $(".sqr6").hasClass(symbol)) {
      return true;
    } else if ($(".sqr7").hasClass(symbol) && $(".sqr8").hasClass(symbol) && $(".sqr9").hasClass(symbol)) {
      return true;
    //winners in columns
    } else if ($(".sqr1").hasClass(symbol) && $(".sqr4").hasClass(symbol) && $(".sqr7").hasClass(symbol)) {
      return true;
    } else if ($(".sqr2").hasClass(symbol) && $(".sqr5").hasClass(symbol) && $(".sqr8").hasClass(symbol)) {
      return true;
    } else if ($(".sqr3").hasClass(symbol) && $(".sqr6").hasClass(symbol) && $(".sqr9").hasClass(symbol)) {
      return true;
      //winners in diagonal
    } else if ($(".sqr1").hasClass(symbol) && $(".sqr5").hasClass(symbol) && $(".sqr9").hasClass(symbol)) {
      return true;
    } else if ($(".sqr3").hasClass(symbol) && $(".sqr5").hasClass(symbol) && $(".sqr7").hasClass(symbol)) {
      return true;
    } else {
      return false;
    }
}
});
