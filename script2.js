var exp = "";
function getinput(input) {
  exp += input;
  document.getElementById("output").innerText = exp;
}

function equal() {
  if (exp) {
    exp = eval(exp);
    document.getElementById("output").innerText = exp;
  }
}

function back() 
{
  exp = exp.toString();
  exp = exp.split('');
  exp.pop();
  exp = exp.join("");
  document.getElementById("output").innerText = exp;
}

function clean(){
  exp = "";
  document.getElementById("output").innerText = exp;
}