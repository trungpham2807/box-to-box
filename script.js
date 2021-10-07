


// Add a signin form. Hide it when the signin button is clicked. Show a signout button when signed in. Hide the signout button when clicked & show the sign in form.

//1. Change text in the first box 3 seconds after the page loads.
function changeFirstBox(){
  document.getElementById("change-text").innerHTML = "Hello my name is trung"
}
setTimeout(changeFirstBox, 3000);
//2. Increment the count in the next box every second.
let countBox = 0;
function changeTwoBox(){
  countBox = countBox + 1;
  document.getElementById("change-count").innerHTML = countBox;
}
setInterval(changeTwoBox, 1000)

//3. Change the color & text inside the next box every 3 seconds.
const colorName = ["Aqua", "Red", "Blue", "Black", "Coral","Yellow", "Pink"]
function changeThirdBox(){
  const random = Math.floor(Math.random()*colorName.length);
  document.getElementById("change-color").style.backgroundColor = colorName[random];
  document.getElementById("change-color").innerHTML = colorName[random];
}


setInterval(changeThirdBox, 3000)
//4.Increment the count in the next box when when clicked.
let countClick = 0;
  
document.getElementById("change-click").addEventListener("click", function(){
  countClick += 1;
  document.getElementById("change-click").innerHTML = countClick;
}
)


//5.Increment the count in the next box when when hovered.
let countHover = 0;
  
document.getElementById("change-hover").addEventListener("mouseover", function(){
  countHover += 1;
  document.getElementById("change-hover").innerHTML = countHover;
}
)

//6.Switch between loves my and not loves me when the next box is clicked.
let loveMe = 0;
document.getElementById("change-he-loves-me").addEventListener("click",function(){
  loveMe += 1;
  if(loveMe%2 ===0){
    document.getElementById("change-he-loves-me").innerHTML = "He loves me";
  }else{
    document.getElementById("change-he-loves-me").innerHTML = "He loves me not";

  }
})
//7. Show the time inside the next box when clicked.
document.getElementById("change-to-current-date").addEventListener("click",function(){
  document.getElementById("change-to-current-date").innerHTML = new Date();
})
//8. Show the width & height of the next box when the window is resized.
function changeResize(){
  const width = window.innerWidth;
  document.getElementById("change-to-current-width").innerHTML = "Width" + width;
  const height = window.innerHeight;
  document.getElementById("change-to-current-height").innerHTML = "Height" + height;
}
window.onresize = changeResize;

//9.Add a new li element that's numbered correctly when its clicked in the next box.
let listLength = 1;

document.getElementById("add-list-item").addEventListener("click", () => {
  listLength++;
  var para = document.createElement("li");
  var node = document.createTextNode(
    "New li " + listLength
  );
  para.appendChild(node);

  var element = document.getElementById("add-list-item");
  element.appendChild(para);
});
//10. Show the current URL of the webpage when the next box is clicked.
document.getElementById("change-to-url").addEventListener("click",function(){
  var url = window.location.href;
  window.location.href = 'https://github.com/';
  document.getElementById("change-to-url").innerHTML = url;
})
//10. Add some typewriteing when the next box is clicked.

//11.
document.getElementById('signin-button').addEventListener('click',function() {
  document.getElementById('signin-form').style.display = "none";
  document.getElementById('signout-form').style.display = "block";
})

document.getElementById('signout-button').addEventListener('click',function() {
  document.getElementById('signin-form').style.display = "block";
  document.getElementById('signout-form').style.display = "none";
})

//Magic - 8 ball
const yes = ["Yes!", "Sure!", "Of course!"];
const no = ["No way!", "Never!", "Not a chance!"];
let magicCount = 0;
function getRandomItem(arr){
  let random = Math.floor(Math.random()*3);
  magicCount ++;
  if(magicCount %2 === 0){
    document.getElementById("magic-8-ball").innerHTML = yes[random];
    document.getElementById("magic-8-ball").style.backgroundColor = "red";
  }else{
    document.getElementById("magic-8-ball").innerHTML = no[random];
    document.getElementById("magic-8-ball").style.backgroundColor = "yellow";
  }
}
document.getElementById("magic-8-ball").addEventListener("click", getRandomItem);
// setTimeout(getRandomItem, 4000);