# Introduction
 react-hotkey-hook is a lightweight and flexible React library for adding keyboard shortcuts and hotkey functionality to your application. It allows developers to define and manage hotkeys seamlessly with React hooks.

 # Features

-  Lightweight and performant.
- Supports key combinations (e.g., Ctrl+S, Alt+Shift+P).
- Works seamlessly with React functional components.
- Customizable event handling and keybinding options.

# Installation
# Using npm
npm install react-hotkey-hook

# Using Yarn
yarn add react-hotkey-hook

# The keys argument is case-insensitive
It doesn't matter if we listen for CTRL+S, Ctrl+s, ctrl+S or any other possible way of writing the keys in different cases. They all will listen to the user pressing the ctrl and the s key. This also means that upper case letters are treated as lower case letters. If we want to listen to the user pressing the upper case letter S, we'd have to listen to shift+s.

# Multiple hotkeys
We can also listen to multiple keystrokes and/or hotkeys and trigger the same callback. Combinations are separated by a comma sign

[View the live example on CodeSandbox] (https://codesandbox.io/p/sandbox/dazzling-wilbur-pjtxzy?file=%2Fsrc%2FApp.js%3A16%2C1)

# Modifiers & Special keys
Of course, we also want to leverage more complex keystrokes. useHotkeys supports the following modifiers:
- shift
- alt
- ctrl
- meta
- mod (which listens for ctrl on Windows/Linux and cmd on macOS)

# Hotkey for Ctrl+P (Windows/Linux) or Cmd+P (macOS)

[View the live example on CodeSandbox] https://codesandbox.io/p/sandbox/tender-dust-q993jm?file=%2Fsrc%2FApp.js
