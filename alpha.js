const displayText = document.getElementById('display').innerText.toLowerCase();

function changeKeyColor(newColor)
{
    document.getElementById(newColor).classList.add('bg-orange-400');
}

changeKeyColor(displayText);

const alphabhet = "qwertyuiopasdfghjklzxcvbnm/";

document.addEventListener('keyup',function check(event){
    if(event.key === document.getElementById('display').innerText.toLowerCase())
    continueGame();
    else
    {
        console.log('no');
        document.getElementById(document.getElementById(event.key).innerText.toLowerCase()).classList.add('bg-red-700');
    }

});

function continueGame(){
    document.getElementById(document.getElementById('display').innerText.toLowerCase()).classList.remove('bg-orange-400');
    const n = alphabhet[Math.floor(Math.random()*25)];
    document.getElementById('display').innerText = n ;
    changeKeyColor(n);
} 
