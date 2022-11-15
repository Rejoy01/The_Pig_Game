'use strict';




var scores,roundScore,activePlayer,dice,gamePlaying;

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer =0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score--0').textContent ='0';
    document.getElementById('score--1').textContent ='0';
    document.getElementById('current--0').textContent ='0';
    document.getElementById('current--1').textContent ='0';
    document.querySelector('#name--1').textContent = "player 2";
    document.querySelector('#name--0').textContent = "player 1";
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
}
init();
// dice = Math.floor(Math.random()*6)+1
// console.log(dice);

// document.querySelector('#current--' + activePlayer).textContent = dice
// textcontent won't support html tags
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>'+dice+'</em>';

// var x = document.querySelector('#score--0').textContent;
// console.log(x)

document.querySelector('.dice').style.display = 'none'


document.querySelector('.btn--roll').addEventListener('click',()=>{
   if(gamePlaying){
   
    //1.random number

    dice = Math.floor(Math.random()*6)+1

    //2.dipslay result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src = 'dice-'+ dice +'.png'

    //3.update the round score ony if the rolled number was not 1
    if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore
         
    }else {
        //Next player
        nextPlayer();
        
    }
    }
});

document.querySelector('.btn--hold').addEventListener('click',()=>{
    if(gamePlaying){
    // add current score to global score
    scores[activePlayer] += roundScore;

    
    //update ui 

    document.querySelector('#score--'+ activePlayer).textContent = scores[activePlayer]

    
    // check if the player won the game
    if (scores[activePlayer] >=100) {
        document.querySelector('#name--'+ activePlayer).textContent = "Winner !";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--'+activePlayer).classList.add('player--winner');
        document.querySelector('.player--'+activePlayer).classList.remove('player--active');
        gamePlaying = false;

    }else{
          //next player
            nextPlayer();
    }



    }
    

});


function nextPlayer(){
    activePlayer ===0 ? activePlayer =1 : activePlayer=0;
    roundScore = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    // document.querySelector('.player--0').classList.remove('player--active');
    // document.querySelector('.player--1').classList.add('player--active');
    document.querySelector('.dice').style.display="none";

}

document.querySelector('.btn--new').addEventListener('click',init);