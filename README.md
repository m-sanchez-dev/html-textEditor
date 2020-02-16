# html-textEditor

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/725e85bb8d344632880e79ee1ec7ea02)](https://www.codacy.com/manual/swallyx/html-textEditor?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=sWallyx/html-textEditor&amp;utm_campaign=Badge_Grade)

It will be pretty simple and won’t have many features, but it will be of your making, even if you barely know how to code.

## What I’ll need

* __HTML__ — This is the language that is used to structure web pages. Your browser interprets HTML and renders a page based on its instructions. Our text editor will be a web page that will work in your browser. 

* __JavaScript__ — This language that allows you to dynamically manipulate things on your webpage, and even build whole web-based apps. Ever heard of Slaсk? Written entirely on JavaScript. Ever seen a web page with snow falling over the text? That snow, too, is JavaScript.

* __Localstorage__ — Your browser has a special block of memory that can be used to store data. It is restricted to a page (meaning, each page has its own isolated storage) and doesn’t sync across different devices or browsers. I’ll use this area to store our text. 

* __Content Editable__ — Some blocks in HTML can have this property, which will allow users to edit what’s inside that block. The changes will only be visible to the user (by default), but there will be changes nevertheless. Later, you can implement synchronization, so that other users see the edits as well. 

## How this is going to work

1. I’ll have a web page that contains an area, or a block. Because I want to keep it simple, I’ll start with no design at all, just bare structure. I’ll refine the visuals in the next version.
2. That block will be content-editable, meaning you can type into it.
3. In the background, there will be JavaScript, looking at what’s going on inside the page. I will tell JavaScript to pay attention to whenever I press a key. When I press a key, JavaScript will save to localstorage whatever is in the editable block.
4. As a final touch, I’ll add some lines of code that tell JavaScript to look for anything in Localstorage once the page loads. This will ensure that our text is recalled when I reload the page. 

The result will be a very simple-looking, yet a functional text editor with auto-save. You can quit and reload your browser, even restart your computer, and your text will stay there. 

After that I will continue adding some features, and trying to make a better text editor.

## Features

* Autosave: Everytime you press a key the file will be saved on memory, so if you close and open the tab again. The text will be still there.
* Dark mode support: It has native dark mode support. If your device has the darkmode ON, the appearance of the application will change.
* Auto close: This caracters ('(', '{', '[') are closed automatically.

## ToDo

* [x] Auto save
* [x] Dark mode support
* [x] Enable auto character close
* [x] Code documentation
* [ ] Fix tab interaction
* [ ] Support for diferent files

Think if diferent format support is viable or no. 

## License

[MIT - License](LICENSE)
