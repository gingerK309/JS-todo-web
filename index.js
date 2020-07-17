//  const calc={
//     plus: function (a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
//     div: function(a,b){
//     return a/b;
//     },
//     pow: function(a,b){
//         return Math.pow(a,b);
//     }
// }

const title = document.querySelector("#title");
const CLICKED_CLASS ="clicked";

function handleClick(){
   title.classList.toggle(CLICKED_CLASS);
}



function init(){
 title.addEventListener("click",handleClick); 
}
init();
