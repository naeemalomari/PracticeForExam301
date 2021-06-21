'use strict';

let myForm=document.getElementById('form');
let ourParentTable=document.getElementById('table');
let arrOfHeader=['BookName','NumberOfPages', 'Choose'];


let arrOfLibrary=[];
function Library(BookName,NumberOfPages,Choose){

  this.BookName=BookName;
  this.NumberOfPages=NumberOfPages;
  this.Choose=Choose;
  arrOfLibrary.push(this);

}

Library.prototype.render=function(){

  let LibraryFirstRow=document.createElement('tr');

  let itemNameTd=document.createElement('td');
  itemNameTd.textContent=this.BookName;

  let itemNumberTd=document.createElement('td');
  itemNumberTd.textContent=this.NumberOfPages;

  let chooseTd=document.createElement('td');
  chooseTd.textContent=this.Choose;

  LibraryFirstRow.appendChild(itemNameTd);
  LibraryFirstRow.appendChild(itemNumberTd);
  LibraryFirstRow.appendChild(chooseTd);

  ourParentTable.appendChild(LibraryFirstRow);

};
function libraryListItems(){

  for(let j=0 ;j<arrOfLibrary.length;j++){

    let LibraryFirstRow=document.createElement('tr');

    let itemNameTd=document.createElement('td');
    itemNameTd.textContent=arrOfLibrary[j].BookName;

    let itemNumberTd=document.createElement('td');
    itemNumberTd.textContent=arrOfLibrary[j].NumberOfPages;

    let chooseTd=document.createElement('td');
    chooseTd.textContent=arrOfLibrary[j].Choose;

    LibraryFirstRow.appendChild(itemNameTd);
    LibraryFirstRow.appendChild(itemNumberTd);
    LibraryFirstRow.appendChild(chooseTd);

    ourParentTable.appendChild(LibraryFirstRow);


  }
}

function handleFormSubmission(event){
  event.preventDefault();

  let itemName=event.target.itemName.value;
  let itemNumber=event.target.itemNumber.value;
  let choose= event.target.choose.value;

  let newItem = new Library (itemName, itemNumber, choose);
  newItem.render();
  localStorage.setItem('libraryList',JSON.stringify(arrOfLibrary));
}
function renderHeader(){

  let headerRow=document.createElement('tr');

  for(let i=0 ; i < arrOfHeader.length;i++){

    let th= document.createElement('th');
    th.textContent=arrOfHeader[i];
    headerRow.appendChild(th);
  }
  ourParentTable.appendChild(headerRow);
}

function checkLS(){

  if(localStorage.getItem('libraryList'))
  {
    arrOfLibrary=JSON.parse( localStorage.getItem('libraryList'));
    libraryListItems();
  }
}

myForm.addEventListener('submit', handleFormSubmission);
renderHeader();
checkLS();
