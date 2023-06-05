const buttonWhite = document.getElementById('btnWhiteMode');
const buttonDark = document.getElementById('btnDarkmode');
const output = document.getElementById('output');


let white = localStorage.getItem('mode');
if(white){
  document.getElementById('background').classList = 'back-w';
}else if(white == false){
  document.getElementById('background').classList = 'back-b';
};


buttonWhite.onclick = function (){
  output.innerText = '';
  //output.innerText = 'gets?';
  document.getElementById('background').classList = 'back-w';
  //white = true;
  localStorage.setItem('mode', white);
}
buttonDark.onclick = function (){
  output.innerText = '';
  //output.innerText = 'gets?';
  document.getElementById('background').classList = 'back-b';
  //white = false;
  //localStorage.setItem('mode', white);
  localStorage.removeItem('mode');
}
