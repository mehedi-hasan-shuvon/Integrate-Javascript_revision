function setPlayerStyle(player) {
    player.style.border = "1px solid red";
    player.style.borerRadius = '5px';
    player.style.margin = '10px';
    player.style.padding = '10px';

}

const players = document.getElementsByClassName('player');

for (const player of players) {

    setPlayerStyle(player);


}


function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML =
        ` <h4 class="player-name">New Player</h4>
    <p>Iusto reiciendis, porro consequuntur beatae autem ullam labore maxime eum nesciunt quisquam error dolorum
        saepe asperiores culpa magni, distinctio tempore ipsum maiores fugit officiis consectetur tempora minima
        suscipit sit. Ab.</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);

    console.log("dsd");
}

document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';

    } else {
        event.target.parentNode.style.backgroundColor = 'blue';
    }
})