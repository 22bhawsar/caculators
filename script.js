var display = document.getElementById("inputbox");

var btns = document.querySelectorAll("button");
var buttonArrays = Array.from(btns);

// input ke liye ek variable define kiya 
var String = "";

// for each loop lagayaa arrays value ko alg alg variable  me badalta h

// btn argument pass kiya hai

buttonArrays.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    if (event.target.innerHTML == "B") {
      String = String.substring(0, String.length - 1);
      display.value = String;
    } else if (event.target.innerHTML == "clear all") {
      String = "";
      display.value = String;
    } else if (event.target.innerHTML == "=") {
      String = eval(String);
      display.value = String;
    } else {
      String += event.target.innerHTML;
      display.value = String;
    }
  });
});
