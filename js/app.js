// let parent = document.getElementById ('aguero');
// console.log(parent);
// parent.textContent="Welcome to Barchelona";

// let h3Element =document.createElement ('h3');
// let bodyTag=document.getElementById ('container');
// bodyTag.appendChild(h3Element);
// h3Element.textContent='New Player invited';

// let h1Element =document.createElement ('h1');
// let sectionTag =document.getElementById ('2021');
// sectionTag.appendChild(h1Element);
// h1Element.textContent='Is Good to see him with leoMessi';

// const aguero= {

//   playerName:'Aguero',
//   positions:['ST','LF','RF','CF'],
//   goals:'300',
//   nationality:'Argintina',
//   goodWithDefend:false ,


//   goalsPerSession:[],

//   manCity: function(){
//     console.log(`${this.playerName} is One of the greatest player in PrimerLeague and he's from  ${this.nationality}`);
//   },
//   Barca: function(){
//     console.log(`${this.playerName} is new in BarcaClub `);
//   },
//   Argintina :function(){
//     console.log(`${this.playerName} scored 55 goals for ${this.nationality}`);
//   },

//   goalsInBarcaPerSession :function(){
//     for (let i =0 ; i<=9; i++ ){
//       this.goalsPerSession.push(i*3);
//     }
//     console.log(this.goalsPerSession);
//   }

// };
// aguero.manCity();
// aguero.Barca ();
// aguero.Argintina();
// aguero.goalsInBarcaPerSession();


// const Messi= {

//   playerName:'Messi',
//   positions:['ST','LF','RF','CF','CAM','CM'],
//   goals:'700',
//   nationality:'Argintina',
//   goodWithDefend:false ,



//   goalsPerSession:[],

//   manCity: function(){
//     console.log(`${this.playerName} is One of the greatest player in LaLigaLeague and he's from  ${this.nationality}`);
//   },
//   Barca: function(){
//     console.log(`${this.playerName} Scored many goals for barca`);
//   },
//   Argintina :function(){
//     console.log(`${this.playerName} scored 80 goals for ${this.nationality}`);
//   },

//   goalsInBarcaPerSession :function(){
//     for (let i =0 ; i<=9; i++ ){
//       this.goalsPerSession.push(i*3);
//     }
//     console.log(this.goalsPerSession);
//   }


// }
// Messi.manCity();
// Messi.Barca();
// Messi.Argintina();
// Messi.goalsInBarcaPerSession();

// for (let i=0 ; i<Messi.positions.length;i++){
//   document.write('<h1>'+Messi.positions[i]+'</h2>');
// }
// function randomValue(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// let globVar = document.getElementById('messi');

// const Loe = {
//   playerName:'LeoMessi',
//   positions:['ST','LF','RF','CF','CAM','CM'],
//   age:0, // initial value of zero
//   arr: [],
//   goodWithKids:true,
//   goodWithDogs:true,
//   updatingTheAge:function(){
//     // in order to have a randomValue between two numbers
//     this.age = randomValue(20,35);
//     console.log(this.age);
//   },
//   render:function(){
//     let articleEl=document.createElement('article');
//     globVar.appendChild(articleEl);
//     articleEl.textContent='Messi Messi ';

//     let h2El =document.createElement ('h2');
//     articleEl.appendChild (h2El);
//     h2El.textContent='Is greatest player in the world ';

//     let ulEl=document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     let liEl=null;
//     for (let i =0 ; i<this.positions.length;i++){
//       liEl=document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent=this.positions[i];
//     }

//   }

// };
// Loe.render();
let arrOfObjects=[];
function Players (playerName,goals,nationality,goodWithDefend){
  this.playerName=playerName;
  this.goals=goals;
  this.nationality=nationality;
  this.goodWithDefend=goodWithDefend;
  arrOfObjects.push(this);
}

Players.prototype.manCity=function(){
  console.log(`${this.playerName} defeated them many times`);

};
Players.prototype.Barca=function(){
  console.log(`${this.playerName} Scored many goals for barca`);
};
Players.prototype.Argintina =function(){
  console.log(`${this.playerName} scored 80 goals for ${this.nationality}`);

};
let player1 =new Players ('messi',700,'argintina',false);
let player2 =new Players ('ronaldo',750,'purtogal',false);
let player3 =new Players ('neymar',300,'brazil',false);
console.log(arrOfObjects);
for (let i=0 ; i<arrOfObjects.length;i++){
  arrOfObjects[i].manCity();
}
console.log(arrOfObjects);
// player1.manCity();
// player1.Barca();
// player1.Argintina();

// player2.manCity();
// player3.manCity();

for (let i=0 ; i<arrOfObjects.length;i++){
  arrOfObjects[i].Barca();
}

for (let i=0 ; i<arrOfObjects.length;i++){
  arrOfObjects[i].Argintina();
}

