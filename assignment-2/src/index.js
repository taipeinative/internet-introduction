import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * @type {ReactDOM.Root} The root of the displayed DOM.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the page.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
