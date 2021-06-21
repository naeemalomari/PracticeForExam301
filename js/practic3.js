'use strict';

let ourForm=document.getElementById('form');
let ourParentTable=document.getElementById('table');
let arrOfHeader=['playerName','clubName' , 'position'];

let arrOfPlayers=[];
function Players( playerName, clubName, position ){


  this.playerName=playerName;
  this.clubName=clubName;
  this.position=position;
  arrOfPlayers.push(this);

}

Players.prototype.render=function(){

  let playersRow=document.createElement('tr');

  let playerName=document.createElement('td');
  playerName.textContent=this.playerName;

  let clubName=document.createElement('td');
  clubName.textContent=this.clubName;

  let position=document.createElement('td');
  position.textContent=this.position;

  playersRow.appendChild(playerName);
  playersRow.appendChild(clubName);
  playersRow.appendChild(position);

  ourParentTable.appendChild(playersRow);

};

function playersItems(){

  for (let j=0; j<arrOfPlayers.length;j++){

    let playersRow=document.createElement('tr');

    let playerName=document.createElement('td');
    playerName.textContent=arrOfPlayers[j].playerName;

    let clubName=document.createElement('td');
    clubName.textContent=arrOfPlayers[j].clubName;

    let position=document.createElement('td');
    position.textContent=arrOfPlayers[j].position;

    playersRow.appendChild(playerName);
    playersRow.appendChild(clubName);
    playersRow.appendChild(position);

    ourParentTable.appendChild(playersRow);


}




}





function renderHeader(){

  let headerRow=document.createElement('tr');
  let th;
  for (let i=0 ; i<arrOfHeader.length; i++){

    th=document.createElement('th');
    th.textContent=arrOfHeader[i];
    headerRow.appendChild(th);
  }
  ourParentTable.appendChild(headerRow);
}

function handleSubmission(event){
  event.preventDefault();

  let playerName=event.target.playerName.value;

  let clubName=event.target.clubName.value;

  let position=event.target.position.value;

  let newPlayers = new Players (playerName,clubName,position);

  newPlayers.render();

  localStorage.setItem('PlayerSubmitted',JSON.stringify(arrOfPlayers));
}

function checkLS(){

  if( localStorage.getItem('PlayerSubmitted') ){

    arrOfPlayers=JSON.parse( localStorage.getItem('PlayerSubmitted'));
  }
  playersItems();

}



ourForm.addEventListener('submit',handleSubmission);

renderHeader();
checkLS();

