
//not workink
// const iframe = document.querySelector('.how-its-made-iframe');
// const picture = document.querySelector('.hitm-picture');

// iframe.addEventListener('click', () => {
//   picture.style.display = 'none';
// });


//working
const picture = document.querySelector('.hitm-picture');
var myConfObj = {
  iframeMouseOver : false
}
window.addEventListener('blur',function(){
  if(myConfObj.iframeMouseOver){
      picture.style.display = 'none';
      
  }
});

document.querySelector('.how-its-made-iframe').addEventListener('mouseover',function(){
   myConfObj.iframeMouseOver = true;
});
document.querySelector('.how-its-made-iframe').addEventListener('mouseout',function(){
    myConfObj.iframeMouseOver = false;
});