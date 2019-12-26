// Script file, with all the JS code that will make the editor work

function chekForSpecialCharacter(character) {
  var endKeys = ["(", "[", "{"];
  var text = "";

  if (endKeys.includes(character)) {
    switch (character) {
      case "(":
        text = ")";
        break;
      case "{":
        text = "}";
        break;
      case "[":
        text = "]";
        break;
    }
    insertTextAtCursor(text);
  }
}

function insertTextAtCursor(text) {
  var sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(text));
    }
  } else if (document.selection && document.selection.createRange) {
    document.selection.createRange().text = text;
  }
}

/* Functions to save or gatter the textarea info */
function saveTextArea() {
  localStorage.setItem(
    "text_in_editor",
    document.getElementById("editor").innerHTML
  );
}

function returnSavedData() {
  // print saved data into textDiv
  document.getElementById("editor").innerHTML = localStorage.getItem(
    "text_in_editor"
  );
}

// focus on the editor
document.getElementById("editor").focus();

// If there's anything in the storage
if (localStorage.getItem("text_in_editor") !== null) {
  // ...then show it
  returnSavedData();
}

// listen to key presses
document.addEventListener("keydown", function(e) {
  // checks for special character for autocomplete
  chekForSpecialCharacter(e.key);

  // once a key is pressed, save whatever's in our box to localstorage
  saveTextArea();
});
