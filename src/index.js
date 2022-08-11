import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(<App/>);