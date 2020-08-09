/*
function ordernumber(value) {
  var selected = document.querySelector('#ordernumber');
  var label = document.querySelector('label[for=ordnumber]');
  if (value === "orderproblem") {
    selected.style.display = "";
    label.style.display = "";
    selected.required = true;
  }
  else {
    selected.style.display = "none";
    label.style.display = "none";
    selected.required = false;
  }
}

window.onload = function () {
  var selections = [...document.querySelectorAll("input[name=selection]")];
  for (var i = 0; i < selections.length; i++) {
    selections[i].oninput = function (event) {
      ordernumber(event.target.value);
    };
  }
}
*/

window.onload = function () {
  function ordernumber(value) {
    var selected = document.querySelector('#ordernumber');
    var label = document.querySelector('label[for=ordnumber]');
    if (value === "orderproblem") {
      selected.style.display = "";
      label.style.display = "";
      selected.required = true;
    }
    else {
      selected.style.display = "none";
      label.style.display = "none";
      selected.required = false;
    }
  }
  var selections = [...document.querySelectorAll("input[name=selection]")];
  for (var i = 0; i < selections.length; i++) {
    selections[i].oninput = function (event) {
      ordernumber(event.target.value);
    };
  }
};
