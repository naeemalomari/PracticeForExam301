'use strict';
let ourForm=document.getElementById('form');
let parentTable=document.getElementById('table');
let arrOfHeader=['brandName','numberUse','favorite'];
let arrOfMakeUps=[];
function Makeup(brandName,numberUse,favorite){
  this.brandName=brandName;
  this.numberUse=numberUse;
  this.favorite=favorite;
  arrOfMakeUps.push(this);
}
Makeup.prototype.renderWriting=function(){
  let makeUp=document.createElement('tr');
  let brandName=document.createElement('td');
  brandName.textContent=this.brandName;
  let numberUse=document.createElement('td');
  numberUse.textContent=this.numberUse;
  let favorite=document.createElement('td');
  favorite.textContent=this.favorite;
  makeUp.appendChild(brandName);
  makeUp.appendChild(numberUse);
  makeUp.appendChild(favorite);
  parentTable.appendChild(makeUp);

};
function makeupList(){
  for(let j=0;j<arrOfMakeUps.length;j++){
    let makeUp=document.createElement('tr');
    let brandName=document.createElement('td');
    brandName.textContent=arrOfMakeUps[j].brandName;
    let numberUse=document.createElement('td');
    numberUse.textContent=arrOfMakeUps[j].numberUse;
    let favorite=document.createElement('td');
    favorite.textContent=arrOfMakeUps[j].favorite;
    makeUp.appendChild(brandName);
    makeUp.appendChild(numberUse);
    makeUp.appendChild(favorite);
    parentTable.appendChild(makeUp);
  }
}
function handleSubmission(event){
  event.preventDefault();
  let brandName=event.target.brandName.value;
  let numberUse=event.target.numberUse.value;
  let favorite=event.target.favorite.value;
  let newMakeup = new Makeup (brandName,numberUse,favorite);
  newMakeup.renderWriting();
  localStorage.setItem('makeUpList',JSON.stringify(arrOfMakeUps));
}
function renderHeader(){
  let headerRow=document.createElement('tr');
  for (let i=0 ; i<arrOfHeader.length;i++){
    let th=document.createElement('th');
    th.textContent= arrOfHeader[i];
    headerRow.appendChild(th);

    parentTable.appendChild(headerRow);
  }
}
function checkLS(){
  if(localStorage.getItem('makeUpList')){
    arrOfMakeUps=JSON.parse(localStorage.getItem('makeUpList'));
  }
  makeupList();
}
ourForm.addEventListener('submit',handleSubmission);
renderHeader();
checkLS();
