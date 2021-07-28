let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Zak.jpeg') {
      myImage.setAttribute('src','images/Zak2.jpg');
    } 
      else {myImage.setAttribute('src','images/Zak.jpeg')}
}