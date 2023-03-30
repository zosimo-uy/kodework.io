var animationLength = 0;
var animationOne = 'What Kode Work Offers?';
var animationSpeed = 75;

function animationWrite(){
  if (animationLength < Text.length){
    document.getElementById(`animationOne`).innerHTML += Text.charAt(animationLength);
    animationLength++;
    setTimeout(animationWrite, animationSpeed);
  }
}

console.log(animationWrite)