import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import App from "./App";

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Initial render
root.render(<App/>);