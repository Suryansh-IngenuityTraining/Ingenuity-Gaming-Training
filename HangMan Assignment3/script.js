var animal = [
    "apes",
    "bat",
    "bear",
    "beaver",
    "buffalo",
    "camel",
    "cat",
    "cheeta",
    "deer",
    "dog",
    "dolphin",
    "donkey",
    "elephant",
    "giraffe",
    "goat",
    "hyenas",
    "jaguar",
    "monkey",
    "pig",
    "rabbit",
    "tiger",
    "whale",
    "zebra",
    "lion"
    ]
    
    let answer = '';
    let maxWrong = 7;
    let mistakes = 0;
    let guessed = [];
    let wordStatus = null;
    
    function randomWord() {
        answer = animal[Math.floor(Math.random() * animal.length)];
    }
    function alphabet() {
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
            `
            <button
              class="btn btn-lg btn-primary m-2"
              id='` + letter + `'
              onClick="givenGuess('` + letter + `')"
            >
              ` + letter + `
            </button>
          `).join('');
      
        document.getElementById('inputPanel').innerHTML = buttonsHTML; 
    }
    
    function givenGuess(letterPicked){
        guessed.indexOf(letterPicked) === -1 ? guessed.push(letterPicked) : null;
        document.getElementById(letterPicked).setAttribute('disabled', true);
    
    
        if(answer.indexOf(letterPicked)>= 0){
            guessedWord();
            ifWon();
        }
        else if(answer.indexOf(letterPicked) === -1){
            mistakes++;
            updateMistakes();
            ifLost();
            updatePic();
        }
    }
    function updatePic() {
        document.getElementById('hangmanPic').src = 'images/' + mistakes + '.jpg';
    }
    function ifWon(){
        if(wordStatus===answer){
            document.getElementById('inputPanel').innerHTML = 'Conratulations!! You Won!!';
        }
    }
    function ifLost(){
        if(mistakes===maxWrong){
            document.getElementById('wordShown').innerHTML = 'The answer was: '+ answer;
            document.getElementById('inputPanel').innerHTML = 'You Lost!!';
        }
    }
    document.getElementById('maxWrong').innerHTML = maxWrong;
    
    function guessedWord(){
        wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        document.getElementById('wordShown').innerHTML = wordStatus;
    }
    function updateMistakes(){
        document.getElementById('mistakes').innerHTML = mistakes;
    }
    function reset(){
        mistakes = 0;
        guessed = [];
        document.getElementById('hangmanPic').src = 'images/0.jpg';
        randomWord();
        guessedWord();
        updateMistakes();
        alphabet(); 
     }
    
    randomWord();
    alphabet();
    guessedWord();