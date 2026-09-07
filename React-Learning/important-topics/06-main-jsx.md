# main.jsx

## Purpose
`main.jsx` connects React to the HTML page and renders the `<App />` component into the root element.

## Example
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## Flow
`index.html → root div → main.jsx → App.jsx → React UI`

## Interview Question
**Q: What does `createRoot()` do?**

**Answer:** It creates a React root connected to the DOM element and lets React render the application into it.
