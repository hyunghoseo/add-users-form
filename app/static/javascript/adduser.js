var _count = 1;

function add_user() {
  var aClone = document.getElementById("line" + _count).cloneNode(true);
  
  _count++;
  aClone.id = ("line" + _count);
  inputs = aClone.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  document.getElementById("placeholder").appendChild(aClone);
}

function remove_button(button) {
  button.style.display = "none";
  $('form').serializeArray();
}

function get_val(lineNum, elmID) {
  var divID = "line" + lineNum;
  var elm = {};
  var elms = document.getElementById(divID).getElementsByTagName("*");
  for (var i = 0; i < elms.length; i++) {
    if (elms[i].id === elmID) {
      elm = elms[i];
      break;
    }
  }
  return elm.value;
}

function create_table() {
  var numLines = document.getElementById("placeholder").getElementsByTagName("div").length;
  
  var fnameArr = [];
  var lnameArr = [];
  var emailArr = [];
  
  for (var i = 1; i <= numLines; i++) {
    fnameArr.push(get_val(i, "firstname"));
    lnameArr.push(get_val(i, "lastname"));
    emailArr.push(get_val(i, "email"));
  }
  var myTable = "<table><thead style='background: #184662;color: #fff;font-size: 18px;'><tr><td style='width:150px;'>First name</td><td style='width:150px;'>Last name</td><td style='width:150px;'>Email</td></tr></thead>";
  for (var i = 0; i < numLines; i++) {
    myTable += "<tr>"
    myTable += "<td>" + fnameArr[i] + "</td>";
    myTable += "<td>" + lnameArr[i] + "</td>";
    myTable += "<td>" + emailArr[i] + "</td>";   
    myTable += "</tr>"
  }
  
  document.write(myTable);
  
  
}