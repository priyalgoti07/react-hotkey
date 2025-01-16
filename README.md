# Introduction
 react-hotkey-hook is a lightweight and flexible React library for adding keyboard shortcuts and hotkey functionality to your application. It allows developers to define and manage hotkeys seamlessly with React hooks.

 ### Features

-  Lightweight and performant.
- Supports key combinations (e.g., Ctrl+S, Alt+Shift+P).
- Works seamlessly with React functional components.
- Customizable event handling and keybinding options.

### Installation
- Using npm
npm install react-hotkey-hook

- Using Yarn
yarn add react-hotkey-hook

### The keys argument is case-insensitive
It doesn't matter if we listen for CTRL+S, Ctrl+s, ctrl+S or any other possible way of writing the keys in different cases. They all will listen to the user pressing the ctrl and the s key. This also means that upper case letters are treated as lower case letters. If we want to listen to the user pressing the upper case letter S, we'd have to listen to shift+s.

### Multiple hotkeys
We can also listen to multiple keystrokes and/or hotkeys and trigger the same callback. Combinations are separated by a comma sign

[View the live example on CodeSandbox] (https://codesandbox.io/p/sandbox/dazzling-wilbur-pjtxzy?file=%2Fsrc%2FApp.js%3A16%2C1)

### Modifiers & Special keys
Of course, we also want to leverage more complex keystrokes. useHotkeys supports the following modifiers:
- shift
- alt
- ctrl
- meta
- mod (which listens for ctrl on Windows/Linux and cmd on macOS)

### Hotkey for Ctrl+P (Windows/Linux) or Cmd+P (macOS)

[View the live example on CodeSandbox] https://codesandbox.io/p/sandbox/tender-dust-q993jm?file=%2Fsrc%2FApp.js

### There are also special keys like arrows, return, space bar, etc. that have their own name that can be used:
- backspace 
- tab
- clear
- enter or return 
- esc or escape
- space 
- up, down, left, right
- pageup or delete
- f1, f2...f9

### Global hotkeys and scoped components
- Hotkeys are attached globally, so there is no default scoping mechanism for them to only trigger if the component is focused. To emphasize the issue, check out these two components : https://codesandbox.io/p/sandbox/tender-worker-czdhhz?file=%2Fsrc%2FApp.js%3A15%2C18

- Everytime we press down the c key, both component trigger the callback. But how can we separate those two components and their assigned hotkeys? The answer is Refs. useHotkeys returns a React ref callback function that we can attach to any component that takes a ref. This way we can tell the hook which element should receive the users focus before it triggers its callback.
- https://codesandbox.io/p/sandbox/crazy-bartik-kmq4hm?file=%2Fsrc%2FApp.js%3A44%2C1
 
## Key Points:
- Elements like <button>, <a> (with href), and form controls (<input>, <textarea>, etc.) are focusable by default.
- Non-focusable elements can be made focusable using the tabindex attribute.
- Making non-focusable elements focusable is useful for accessibility (e.g., enabling keyboard navigation). 

## Scoping with non-focusable components
Receiving focus on a button to enable a hotkey in a real world application is not very useful. Instead, we generally would like to set the focus to a modal or let the user click on an area which then receives the focus and enables its attached hotkeys

### Examples of Non-Focusable Tags:
- <div> 
- <span>
- <p>
- <ul> / <li>
- <h1> to <h6>
- <section>
- <article>
- **<table> (except interactive elements inside it, like <input>, <button> in a cell)
 
### Nesting scoped hotkeys: 
- https://codesandbox.io/p/sandbox/restless-cache-7hjys2?file=%2Fsrc%2FApp.js%3A3%2C49
