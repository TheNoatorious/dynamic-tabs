# ✨ Dynamic tab component ✨

This on-click tab component is made with vanilla JS.
A live demo can be found on: https://codepen.io/thenoatorious/pen/gOBGwrB

## Setup

This project uses Vite!

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

```

## Reusing the component

1. Copy the HTML `tabs` and change the modifier number e.g. `tabs--4`.
2. Create a new array in the `script.js` e.g. `tabs4`.
3. Use the `createTabs` function to set the content e.g. `createTabs(".tabs--4", tabs4)`.

The `createTabs` takes two parameters which are the HTML class name and the name of the array.
