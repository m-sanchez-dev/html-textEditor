// If there's anything in the storage
if (localStorage.getItem("text_in_editor") !== null) {
  // ...then show it
  document.getElementById("editor").innerHTML = localStorage.getItem(
    "text_in_editor"
  );
}

// listen to key presses
document.addEventListener("keydown", function(e) {
  // once a key is pressed, save whatever's in our box to localstorage
  localStorage.setItem(
    "text_in_editor",
    document.getElementById("editor").innerHTML
  );
});
