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
            "ankylosaurus"
        ];
    
    var word;                      // Selected word
    var guess;                     // Guess
    var storedLetters = [ ];       // Stored Letters
    var guessesLeft;               // Guesses Left
    var counter;                   // Count Stored Letters

    // smack playerGuessesLeft
    var showGuessesLeft = document.getElementById("playerGuessesLeft");      


    // create all the buttons, in an unordered list
    var buttons = function () {
        myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");
    
        for (var x = 0; x < alphabet.length; x++) {
            letters.id = "alphabet";
            list = document.createElement("li");
            list.id = "letter";
            list.innerHTML = alphabet[x];
            clickInput();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }
    
    

    // Create the chosen letters unordered list

    cycleWord = function () {
        wordHolder = document.getElementById("hold");
        correct = document.createElement("ul");
    
        for (var x = 0; x < word.length; x++) {
            
            correct.setAttribute("id", "theWord");
            
            guess = document.createElement("li");
            
            guess.setAttribute("class", "guess");
            
            guess.innerHTML = "_";
            
    
            storedLetters.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
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
                    showGuessesLeft.innerHTML = "You Win!";
                }
            }

            console.log("this is counter variable: " + counter);
        }
    }


    // OnClick Function
    clickInput = function () {
        list.onclick = function () {
            var chosenLetter = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            
            for (var x = 0; x < word.length; x++) {
                if (word[x] === chosenLetter) {
                    storedLetters[x].innerHTML = chosenLetter;
                    counter += 1;
                } 
            }
            
            var i = (word.indexOf(chosenLetter));
            
            if (i === -1) {
                guessesLeft -= 1;
                textUpdate();
            } 
            else {
                textUpdate();
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
        guessesLeft = 6;
        counter = 0;
        cycleWord();
        textUpdate();

    }

    play();
    

    // Reset the game

    document.getElementById("resetButton").onclick = function() {
        
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        play();

    }
}