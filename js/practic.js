'use stirct';
// let asia=document.getElementById('form');
// let ArrOfObject=[];
// function Todo(todo,date){
//   this.todo=todo;
//   this.date=date;
//   ArrOfObject.push(this);
// }
// console.log(ArrOfObject);
// Todo.prototype.render=function(){
//   let zaid=document.getElementById('list');
//   for(let i=0;i<ArrOfObject.length;i++){
//     let liEl=document.createElement('li');
//     zaid.appendChild(liEl);
//     liEl.textContent=`${this.todo},${this.date}`;

//   }
// };

// asia.addEventListener('submit',handleSubmitting);

// function handleSubmitting(event){
//   event.preventDefault();
//   let newtodo = event.target.todo.value;
//   console.log(newtodo);
//   let newdate= event.target.date.value;
//   let n= new Todo (newtodo,newdate);
//   n.render();
//   console.log(n.render);
// }

// console.log(ArrOfObject);


let ourForm =document.getElementById('form');
let ourParentTable=document.getElementById('todolist-table');
let headerContentArr=['item Name','Quantity','Category','price'];
let arrOfTodoList=[];
function TodoFunction(name,category,quantity){

  this.name=name;
  this.category=category;
  this.quantity=quantity;
  arrOfTodoList.push(this);
}
console.log(arrOfTodoList);

TodoFunction.prototype.renderItem=function(){

  let todoListRow=document.createElement('tr');

  let itemNameTd=document.createElement('td');
  itemNameTd.textContent=this.name;

  let itemcategoryTd=document.createElement('td');
  itemcategoryTd.textContent=this.category;

  let itemQuantityTd=document.createElement('td');
  itemQuantityTd.textContent=this.quantity;

  let itemPriceTd=document.createElement('td');
  itemPriceTd.textContent='';

  todoListRow.appendChild(itemNameTd);
  todoListRow.appendChild(itemcategoryTd);
  todoListRow.appendChild(itemQuantityTd);
  todoListRow.appendChild(itemPriceTd);

  ourParentTable.appendChild(todoListRow);

};
let newItem;
function handleFormSubmission(event){
  event.preventDefault();
  let itemName=event.target.itemName.value;
  let itemcategory=event.target.itemcategory.value;
  let itemQuantity=event.target.itemQuantity.value;

  newItem = new TodoFunction(itemName,itemcategory,itemQuantity);
  newItem.renderItem();
  localStorage.setItem('TodoListItems', JSON.stringify(arrOfTodoList));

}

function renderHeader(){
  checkLS();
  let headerRow=document.createElement('tr');
  for (let index=0;index<headerContentArr.length;index++){
    let th=document.createElement('th');
    th.textContent= headerContentArr[index];
    headerRow.appendChild(th);

  }
  ourParentTable.appendChild(headerRow);
}
function renderTodoListItems(){

  for(let j=0 ; j<arrOfTodoList.length;j++){

    let todoListRow=document.createElement('tr');

    let itemNameTd=document.createElement('td');
    itemNameTd.textContent=arrOfTodoList[j].name;

    let itemcategoryTd=document.createElement('td');
    itemcategoryTd.textContent=arrOfTodoList[j].category;

    let itemQuantityTd=document.createElement('td');
    itemQuantityTd.textContent=arrOfTodoList[j].quantity;

    let itemPriceTd=document.createElement('td');
    itemPriceTd.textContent='';

    todoListRow.appendChild(itemNameTd);
    todoListRow.appendChild(itemcategoryTd);
    todoListRow.appendChild(itemQuantityTd);
    todoListRow.appendChild(itemPriceTd);

    ourParentTable.appendChild(todoListRow);

  }
}
function checkLS(){
  let abd =JSON.parse(localStorage.getItem('TodoListItems' || '[]'));
  if ( abd !== null ){
    arrOfTodoList=abd;
    console.log(abd);
    renderTodoListItems();
  }
}
ourForm.addEventListener('submit',handleFormSubmission);
renderHeader();
// checkLS();
////////////////////////////////////////////////////////////////////////////////

