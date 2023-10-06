import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HoverProvider from './context/hoverContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render( <HoverProvider><App /></HoverProvider>,)
