
//Step 1: store which button was clicked into local storage.
//Step 2: parse button that was clicked from local storage and put onto the page in <p>.
//Step 3: make genre stay on the screen after refresh.


function putDropDownValueIntoLocalStorage() {
    var getSelectedValue=document.getElementById("list").value;
    localStorage.setItem("DropDownValue", JSON.stringify(getSelectedValue));
    getTextValueFromLocalStorageAndPutOntoPage();
}

function getTextValueFromLocalStorageAndPutOntoPage(){
    var localStorageSavedGenre = JSON.parse(localStorage.getItem("DropDownValue")); 
    document.getElementById("genre").textContent=localStorageSavedGenre;
}

//this is not currently working, I think this needs called in Iman's api so it will load when page loads
getTextValueFromLocalStorageAndPutOntoPage(); //calling this function on page load causes text to stay on page after refresh
