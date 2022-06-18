//Step 1: store which button was clicked into local storage.
//Step 2: parse button that was clicked from local storage and put onto the page in <p>.
//Step 3: make genre stay on the screen after refresh.

function putDropDownValueIntoLocalStorage() {
    var selectText=document.getElementById("my-text").value;
    localStorage.setItem("DropDownValue", selectText);
    getTextValueFromLocalStorageAndPutOntoPage();
    return true;
}

function getTextValueFromLocalStorageAndPutOntoPage(){
    document.getElementById("genre").innerHTML=localStorage.getItem("DropDownValue");
    
}

