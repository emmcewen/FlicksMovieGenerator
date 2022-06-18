//Step 1: store which button was clicked into local storage.
//Step 2: parse button that was clicked from local storage and put onto the page.

function putDropDownValueIntoLocalStorage(){
    var selectText = document.getElementById("my-text").value;
    localStorage.setItem("DropDownValue", selectText);
    
    return true;
}