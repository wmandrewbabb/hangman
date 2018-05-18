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
    var storedLetters = [ ];       // Stored Letters
    var guessesLeft;               // Guesses Left
    var counter;                   // Count Stored Letters

    // smack playerGuessesLeft
    var showGuessesLeft = document.getElementById("playerGuessesLeft");      


    // create all the buttons, in an unordered list
    var buttons = function () {
        myButtons = document.getElementById("buttons");
        letters = document.createElement("ul");
        letters.id = "alphabet";
        myButtons.appendChild(letters);
        
        for (var x = 0; x < alphabet.length; x++) {    
            var letterBtn = document.createElement("li");
            letterBtn.id = "letter";
            letterBtn.innerHTML = alphabet[x];
            letterBtn.onclick = clickInput;    
            letters.appendChild(letterBtn);
        }
    }
    
    

    // Create the chosen letters unordered list

    cycleWord = function () {
        var wordHolder = document.getElementById("hold");
        var correct = document.createElement("ul");
        correct.setAttribute("id", "theWord");
        wordHolder.appendChild(correct);
        
        for (var x = 0; x < word.length; x++) {
            var guess = document.createElement("li");
            guess.setAttribute("class", "guess");
            guess.innerHTML = "_";
            
            storedLetters.push(guess);
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
