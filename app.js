function newItem() {
  selectElement = document.querySelector('#select1');
  if (selectElement.options[selectElement.selectedIndex.value = "food"]) {
    var li = document.createElement("li");
    var inputValue = document.getElementById("addItem").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("food").appendChild(li);
    document.getElementById("addItem").value = "";
  } else if (document.getElementById("categories").selectedIndex = 2) {
        var li = document.createElement("li");
        var inputValue = document.getElementById("addItem").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("misc").appendChild(li);
        document.getElementById("addItem").value = "";
      }
  }
// if (document.getElementById("food").selected = true) {
//   function newItem() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("addItem").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     document.getElementById("food").appendChild(li);
//     document.getElementById("addItem").value = "";
//   }
// } else if (document.getElementById("misc").selected = true){
//   function newItem() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("addItem").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     document.getElementById("misc").appendChild(li);
//     document.getElementById("addItem").value = "";
//   }
// }
    


// function newFood() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("addItem").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   document.getElementById("food").appendChild(li);
//   document.getElementById("addItem").value = "";
// }