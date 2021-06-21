let ourForm=document.getElementById('form');
let arrOfHeader=['---favorite---','hours---','select---', 'date---'];
let ourTable=document.getElementById('table');


let arrOfSports=[];
function Sports(favorite,hours,select,date){

  this.favorite=favorite;
  this.hours=hours;
  this.select=select;
  this.date=date;
  arrOfSports.push(this);

}
Sports.prototype.render=function(){
  let firstRow=document.createElement('tr');

  let favorite=document.createElement('td');
  favorite.textContent=this.favorite;
  let hours=document.createElement('td');
  hours.textContent=this.hours;
  let select=document.createElement('td');
  select.textContent=this.select;
  let date=document.createElement('td');
  date.textContent=this.date;

  firstRow.appendChild(favorite);
  firstRow.appendChild(hours);
  firstRow.appendChild(select);
  firstRow.appendChild(date);

  ourTable.appendChild(firstRow);

};

function handleSubmission(event){
  event.preventDefault();

  let favorite=event.target.favorite.value;
  let hours=event.target.hours.value;
  let select=event.target.select.value;
  let date=event.target.date.value;


  let newSports = new Sports (favorite,hours,select,date);
  newSports.render();

  localStorage.setItem('sportsList',JSON.stringify(arrOfSports));

}

function renderHeader(){
  let headerRow=document.createElement('tr');
  for(let i=0;i<arrOfHeader.length;i++){

    let th=document.createElement('th');
    th.textContent=arrOfHeader[i];

    headerRow.appendChild(th);

  }
  ourTable.appendChild(headerRow);
}

function renderList(){
  for(let j=0;j<arrOfSports.length;j++){
    let firstRow=document.createElement('tr');

    let favorite=document.createElement('td');
    favorite.textContent=arrOfSports[j].favorite;
    let hours=document.createElement('td');
    hours.textContent=arrOfSports[j].hours;
    let select=document.createElement('td');
    select.textContent=arrOfSports[j].select;
    let date=document.createElement('td');
    date.textContent=arrOfSports[j].date;

    firstRow.appendChild(favorite);
    firstRow.appendChild(hours);
    firstRow.appendChild(select);
    firstRow.appendChild(date);

    ourTable.appendChild(firstRow);


  }
}

function checkLS(){

  if(localStorage.getItem('sportsList')){
    arrOfSports=JSON.parse(localStorage.getItem('sportsList'));

    renderList();

  }
}


ourForm.addEventListener('submit', handleSubmission);

renderHeader();
checkLS();
