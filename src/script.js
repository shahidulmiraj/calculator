let ans = "";
let showResult = document.getElementById('result');

function display() {
  showResult.textContent = ans;
}

function del() {
  ans = ans.slice(0, -1);
  display();
}
function calc() {
  try {
    let temp = eval(ans);
    if(temp == "Infinity") {
      alert("Please input correctly")
    }
    else {
      ans = temp;
      display()
    }
  }catch(err){
    alert(err)
  }
  finally {
    display()
  }
}

let resetButton = document.getElementById('reset');
let deletebutton = document.getElementById('delete');
let equalButton = document.getElementById('equal');

resetButton.addEventListener('click', function () {
  ans = "";
  display()
});
deletebutton.addEventListener('click', function () {
  del()
});
equalButton.addEventListener('click', function() {
  calc()
})

// let numberButtons = [
//   'number00', 'number0', 'number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9', 'point','modulus', 'division', 'multiplication', 'subtraction', 'summation'
// ];

// numberButtons.forEach(function (buttonId) {
//   let button = document.getElementById(buttonId);
//   button.addEventListener('click', function () {
//     ans += button.textContent;
//     display();
//   });
// });


// number button
let number00Button = document.getElementById('number00');
let number0Button = document.getElementById('number0');
let number1Button = document.getElementById('number1');
let number2Button = document.getElementById('number2');
let number3Button = document.getElementById('number3');
let number4Button = document.getElementById('number4');
let number5Button = document.getElementById('number5');
let number6Button = document.getElementById('number6');
let number7Button = document.getElementById('number7');
let number8Button = document.getElementById('number8');
let number9Button = document.getElementById('number9');
let pointButton = document.getElementById('point');

// operator button
let modulusButton = document.getElementById('modulus');
let divisionButton = document.getElementById('division');
let multiplicationButton = document.getElementById('multiplication');
let subtractionButton = document.getElementById('subtraction');
let summationButton = document.getElementById('summation');


number00Button.addEventListener('click', function () {
  ans += number00Button.textContent;
  display();
});

number0Button.addEventListener('click', function () {
  ans += number0Button.textContent;
  display();
});
number1Button.addEventListener('click', function () {
  ans += number1Button.textContent;
  display();
});
number2Button.addEventListener('click', function () {
  ans += number2Button.textContent;
  display();
});
number3Button.addEventListener('click', function () {
  ans += number3Button.textContent;
  display();
});
number4Button.addEventListener('click', function () {
  ans += number4Button.textContent;
  display();
});
number5Button.addEventListener('click', function () {
  ans += number5Button.textContent;
  display();
});
number6Button.addEventListener('click', function () {
  ans += number6Button.textContent;
  display();
});
number7Button.addEventListener('click', function () {
  ans += number7Button.textContent;
  display();
});
number8Button.addEventListener('click', function () {
  ans += number8Button.textContent;
  display();
});
number9Button.addEventListener('click', function () {
  ans += number9Button.textContent;
  display();
});
pointButton.addEventListener('click', function () {
  ans += pointButton.textContent;
  display();
});
modulusButton.addEventListener('click', function () {
  ans += modulusButton.textContent;
  display();
});
divisionButton.addEventListener('click', function () {
  ans += divisionButton.textContent;
  display();
});
multiplicationButton.addEventListener('click', function () {
  ans += multiplicationButton.textContent;
  display();
});
subtractionButton.addEventListener('click', function () {
  ans += subtractionButton.textContent;
  display();
});
summationButton.addEventListener('click', function () {
  ans += summationButton.textContent;
  display();
});
