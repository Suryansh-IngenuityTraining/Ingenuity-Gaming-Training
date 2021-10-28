var y = Math.floor(Math.random()*100 + 1); //number generated
document.getElementById('display').innerHTML = "You are ready to play";
var guess = 1;
document.getElementById("resetnum").onclick = function(){
    location.reload();
    x = 0;
    var y = Math.floor(Math.random()*100  + 1);
}

var obj = [];
window.onkeypress = function(e){
    if(e.keyCode === 13){
        fun();
    }
}
document.getElementById("submitguess").onclick = fun;

function fun(){
    var x = document.getElementById("guessField").value;
    
    document.getElementById("guessField").value = '';
    if(Number.isInteger(Number(x))==true){
        if(x>0 && x<100){
            obj.push(x);
            document.getElementById('previous').innerHTML = obj;
            
            if(x==y){
                document.getElementById('display').innerHTML = ("\n Congratualtions!!! You gussed it right in "+guess+" guesses");
            }
            else if(x>y){
                guess++;
                document.getElementById('display').innerHTML = ("\n OOPS!! Try a small number");
                
                
            }
            else{
                guess++;
                document.getElementById('display').innerHTML = ("\nOOPS!! Try a greater number");
                
            }
        }
        else{
            document.getElementById('display').innerHTML = ("\n Enter the number in given range only. Try Again");
        }
    }else{
        document.getElementById('display').innerHTML = ("\n OOPS!! I think you have enetered something else. Try Again");
    }
    document.getElementById('guessField').focus();
    document.getElementById('guessField').value = '';
}
document.getElementById("suryanshHint").onclick = function(){
    if(y>10&&y<90){
        var hint1 = y - Math.floor(Math.random()*10 + 1);
        var hint2 = y + Math.floor(Math.random()*10 + 1);
        alert(`Hint: ${hint1} - ${hint2}`);
    }
    else{
        var hint1 = y - Math.floor(Math.random()*10/2 + 1);
        var hint2 = y + Math.floor(Math.random()*10/2 + 1);
        alert(`Hint: ${hint1} - ${hint2}`);
    }
}