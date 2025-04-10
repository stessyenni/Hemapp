import { createRoot } from 'react-dom/client'
// @ts-ignore
import App from './app.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);