// //A.1
// let a1 = [1, 2, 3];
// let a2 = [3, 4, 5];
// for (let i = 0; i < a1.length; i++) {
//   for (let j = 0; j < a2.length; j++) {
//     if (a1[i] === a2[j]) {
//       a1.splice(i, 1);
//       a2.splice(j, 1);
//     }
//   }
// }
// console.log(a1.concat(a2));

// //A.2
// ranking([
//   {
//     name: "Arsenal",
//     points: 99,
//     GD: 45,
//   },
//   {
//     name: "Chelsea",
//     points: 75,
//     GD: 39,
//   },
//   {
//     name: "Manchester United",
//     points: 60,
//     GD: 29,
//   },
//   {
//     name: "Liverpool",
//     points: 88,
//     GD: 43,
//   },
// ]);
// function ranking(arr) {
//   arr.sort((a, b) => {
//     return a.GD - b.GD;
//   });
//   arr.sort((a, b) => {
//     return b.points - a.points;
//   });
//   for (let i=0; i<arr.length; i++) {
//     arr[i].position = i+1;
//   }
//   console.log(arr);
// }

//B
import "./game.js";
import "./quiz.js";

async function getdata(){
  const respone = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
  const data = await respone.json();
  const res = data.results;
  let game = document.getElementById('game');
  let awn=[];

  for(let i=0;i<res.length;i++){
      game.innerHTML+=`<game-screen id="game${i}" question="${res[i].question}" answer="" point="30"></game-screen>`;
      let tmp = res[i].incorrect_answers;
      tmp.push(res[i].correct_answer);
      awn.push(tmp);  
  }
  for(let i=0;i<res.length;i++){
      document.getElementById(`game${i}`).answer = awn[i];
      document.getElementById(`game${i}`).read();
  }

}
getdata()