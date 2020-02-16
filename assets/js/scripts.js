// Script file, with all the JS code that will make the editor work

/**
 * Adds one character to the next position of the cursor.
 * @param {string} character - Character to add
 */
function insertTextAtCursor(character) {
  var sel, range;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(character));
    }
  } else if (document.selection && document.selection.createRange) {
    document.selection.createRange().text = character;
  }
}

/**
 * Checks if the character is one of the followings: {},(),[];
 * In case it is, adds the close character of the one introduced
 * @param {string} character - Text character
 */
function chekForSpecialCharacter(character) {
  var endKeys = ["(", "[", "{"];
  var close_character = "";

  if (endKeys.includes(character)) {
    switch (character) {
      case "(":
        close_character = ")";
        break;
      case "{":
        close_character = "}";
        break;
      case "[":
        close_character = "]";
        break;
    }
    insertTextAtCursor(close_character);
  }
}

/**
 * Functions to save or gatter the textarea info.
 * Saves the data on localStorage.
 */
function saveTextArea() {
  localStorage.setItem(
    "text_in_editor",
    document.getElementById("editor").innerHTML
  );
}

/**
 * Gets the data from localStorage. And adds it to
 * the text area.
 */
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
document.addEventListener("keydown", function (e) {
  // checks for special character for autocomplete
  chekForSpecialCharacter(e.key);

  // once a key is pressed, save whatever's in our box to localstorage
  saveTextArea();
});
