function play(element){
    document.getElementById(element.parentNode.id).classList.add('hidden');
    document.getElementById(element.parentNode.nextElementSibling.id).classList.remove('hidden');

    continueGame();
}


function changeKeyColor(newColor)
{
    document.getElementById(newColor).classList.add('bg-orange-400');
}

const alphabhet = "qwertyuiopasdfghjklzxcvbnm/";

function continueGame(){
    document.getElementById(document.getElementById('display').innerText.toLowerCase()).classList.remove('bg-orange-400');
    const n = alphabhet[Math.floor(Math.random()*25)];
    document.getElementById('display').innerText = n ;
    changeKeyColor(n);
} 

document.addEventListener('keyup',function check(event){
    if(event.key === document.getElementById('display').innerText.toLowerCase())
    {
        let n = parseInt(document.getElementById('score').innerText);
        n++;
        document.getElementById('score').innerText = n;
        continueGame();
    }
    else
    {
        let m = parseInt(document.getElementById('life').innerText);
        m--;
        document.getElementById('life').innerText = m;
        // document.getElementById(document.getElementById(event.key).innerText.toLowerCase()).classList.add('bg-red-700');
    }

});