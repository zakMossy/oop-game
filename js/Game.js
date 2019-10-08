/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }                                                                              //intializes missed,phrases, and active phrase properties
   createPhrases() {
     return [
       "Arsenal",
       "Tottenham",
       "Chelsea",
       "Manchester City",
       "Liverpool"
     ];
   }                                                                              //chooses from an array of phrases to be used in the game
   getRandomPhrase() {
     let number = Math.floor(Math.random() * Math.floor(this.phrases.length));
     return this.phrases[number];
   }                                                                               //selects a random phrase
   startGame() {
     $("#overlay").fadeOut("slow");                                               //starts the game by fading away the starting screen
     this.activePhrase = this.getRandomPhrase();
     phrase = new Phrase(this.activePhrase);
     phrase.addPhraseToDisplay();                                                 //selects random phrase and displays it using the phrase file
   }
   checkForWin() {
     if (!$("li").hasClass("hide")) {
       return true;
     } else {
       return false;
     }
   }                                                                                //checks for if you have won the game or not
   removeLife() {
     this.missed += 1;                                                            //adds 1 to the missed property everytime the removeLife function is used
     for (let i = 0; i < this.missed; i++) {
       $(".tries img")
         .eq(i)
         .addClass("redLife")
         .delay(400)
         .queue(function(next) {
           $(this).attr("src", "images/lostHeart.png");
           next();                                                                  //changes the blue heart to the grey heart and adds new class to it
         });
     }
     if (this.missed === 5) {
       this.gameOver("lost");
     }
   }                                                                              //if you lose 5 hearts you lose
   gameOver(gameWon) {
     $("#overlay").fadeIn("slow");                                              // fades to overlay screen
     if (gameWon === "lost") {
       $("#overlay h1").text("You lose");
       $("#overlay")
         .addClass("lose")
         .removeClass("start");                                                 // if you lost the game it desplays the 'You lose' text and gets rid of the starting text
     } else if (gameWon === "won") {
       $("#overlay h1").text("You win");
       $("#overlay")
         .addClass("win")
         .removeClass("start");
     }                                                                          // if you won the game it displays the 'You win' text and gets rid of the starting text
   }
   handleInteraction(content) {
    let button = $(`#qwerty button:contains('${content}')`);                    //selects the button
    button.prop("disabled", true);
    if (!phrase.checkLetter(content)) {
      button.addClass("wrong");
      this.removeLife();
    } else {
      button.addClass("chosen");
      phrase.showMatchedLetter(content);

      if (this.checkForWin()) {
        this.gameOver("won");
      }
    }
  }                                                                             //checks if button clicked is wrong or write and adds corresponding classes 
  }
