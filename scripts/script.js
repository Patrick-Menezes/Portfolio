
var word=["<span>","N","e","s","t","e ","p","o","r","t","i","f","ó","l","i","o, "
,"v","o","c","ê ","p","o","d","e ","c","o","n","f","e","r","i","r ",
"a","l","g","u","n","s ","d","o","s ","m","e","u","s ","p","r","o","j","e","t","o","s ",
"m","a","i","s ","r","e","c","e","n","t","e","s ","e ","i","n","t","e","r","e","s","s","a","n","t","e","s. ","<br>","S","e ","v","o","c","ê ","g","o","s","t","a","r ","d","o ","m","e","u ","t","r","a","b","a","l","h","o ",
"e ","q","u","i","s","e","r ","e","n","t","r","a","r ","e","m ","c","o","n","t","a","t","o ","c","o","m","i","g","o, ",
"b","a","s","t","a ","m","e ","e","n","v","i","a","r ","u","m","a ","m","e","n","s","a","g","e",
"m ","n","a","s ","m","i","n","h","a","s ","r","e","d","e","s ","s","o","c","i","a","i","s.","</span>",
"<h4>Obrigado pela visita!</h4>"
]

function writ(){

var i = -1;

if(i=-1 ){
    document.getElementById("write").innerHTML="";
setInterval(function () {
 i+=1;
if(i>word.length-1){
      return;  
  
}

 console.log(word[i]);
 
 document.getElementById("write").innerHTML+=word[i];



}, 80);





}
  



}

setTimeout(function(){
    writ();
}, 6000);
