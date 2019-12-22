// Script file, with all the JS code that will make the editor work

// If there's anything in the storage
if (localStorage.getItem("text_in_editor") !== null) {
  // ...then show it
  returnSavedData();
}

// listen to key presses
document.addEventListener("keydown", function(e) {
  // once a key is pressed, save whatever's in our box to localstorage
  saveTextArea();
});


/* Functions to save or gatter the textarea info */
function saveTextArea() {
  localStorage.setItem(
    "text_in_editor",
    document.getElementById("editor").innerHTML
  );
}

function returnSavedData() {
  document.getElementById("editor").innerHTML = localStorage.getItem(
    "text_in_editor"
  );
}
