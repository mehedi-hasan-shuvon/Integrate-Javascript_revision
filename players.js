const players = document.getElementsByClassName('player');

for (const player of players) {

    console.log(player);

    player.style.border = "1px solid red";
    player.style.borerRadius = '5px';
    player.style.margin = '10px';
    player.style.padding = '10px';



}


function addPlayer(){
    const playersContainer=document.getElementById('players');
    // const player=
}