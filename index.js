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
const BASE_COLOR = "darkblue";
const OTHER_COLOR = "gold";
 function handleClick(){
     const currentColor = title.style.color;
     if(currentColor===BASE_COLOR){
         title.style.color= OTHER_COLOR;
     }
     else{
         title.style.color=BASE_COLOR;
     }
} 

function init(){
 title.addEventListener("mouseenter",handleClick); 
}
init();
