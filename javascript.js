window.onload = function () {

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    var wordBank = [
            "tyrannosaurus",
            "velociraptor",
            "diplodocus",
            "pteranodon",
            "triceratops",
            "stegosaurus",
            "deinonychus",
            "baryonyx",
            "spinosaurus",
            "ankylosaurus",
            "eoraptor",
            "maiasaur",
            "protoceratops",
            "iguanodon",
            "carnotaurus",
            "archaeopteryx",
            "troodon",
            "oviraptor",
            "coelophysis",
            "allosaurus",
            "brachiosaurus"
        ];
    
    var word;                      // Selected word
    var guess;                     // Guess
    var storedLetters = [ ];       // Stored Letters
    var guessesLeft;               // Guesses Left
    var counter;                   // Count Stored Letters
    var answer;                    // For the proper display of the hidden word     
    var wordHolder;                // For the proper display of the hidden word

    // smack playerGuessesLeft
    var showGuessesLeft = document.getElementById("playerGuessesLeft");      


    // create all the buttons, in an unordered list
    var buttons = function () {
        myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");
    
        for (var x = 0; x < alphabet.length; x++) {
            letters.id = "alphabet";
            buttonList = document.createElement("li");
            buttonList.id = "letter";
            buttonList.innerHTML = alphabet[x];
            buttonList.onclick = function () {

                var chosenLetter = (this.innerHTML);
                this.setAttribute("class", "active");
                this.onclick = null;
                
                for (var x = 0; x < word.length; x++) {
                    if (word[x] === chosenLetter) {
                        storedLetters[x].innerHTML = chosenLetter;
                        counter += 1;
                    } 
                }
                                
                if (word.indexOf(chosenLetter) === -1) {
                    guessesLeft -= 1;
                } 
                    
                textUpdate();
                

            }
            myButtons.appendChild(letters);
            letters.appendChild(buttonList);
        }
    }
    
    

    // Create the chosen letters unordered list

    cycleWord = function () {
        wordHolder = document.getElementById("hold");
        answer = document.createElement("ul");
    
        for (var x = 0; x < word.length; x++) {
            
            answer.setAttribute("id", "theWord");
            
            guess = document.createElement("li");
            
            guess.setAttribute("class", "guess");
            
            guess.innerHTML = "_";
            
            storedLetters.push(guess);
            wordHolder.appendChild(answer);
            answer.appendChild(guess);

        }
    }
    
    // Show Remaining Guesses

    textUpdate = function () {
        showGuessesLeft.innerHTML = "You have " + guessesLeft + " guesses left.";
        
        if (guessesLeft < 1) {
                showGuessesLeft.innerHTML = "Game Over!";
        }

        for (var x = 0; x < storedLetters.length; x++) {
            if (counter === storedLetters.length) {
                if (guessesLeft < 1){
                    showGuessesLeft.innerHTML = "Better Luck Next Time!";
                }
                else {
                    showGuessesLeft.innerHTML = "Nice going!";
                    modal.style.display = "block";
                }
            }
        }
    }
    
    // Play

    play = function () {

    // Determine our dinosaur  

        word = wordBank[Math.floor(Math.random() * wordBank.length)];
        
        console.log(word);
        buttons(); //oh god work
    
        storedLetters = [ ];
        guessesLeft = 7;
        counter = 0;
        cycleWord();
        textUpdate();

    }

    play();
    

    // Reset the game

    document.getElementById("resetButton").onclick = function() {
        
        answer.parentNode.removeChild(answer);
        letters.parentNode.removeChild(letters);
        play();

    }

    //this is where our modal lives - this was way more simple than I expected it was going to be

    var modal = document.getElementById('myModal');

    var span = document.getElementsByClassName("modalClose")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

