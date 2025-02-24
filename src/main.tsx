import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import Memorization from './Memorization.tsx'
import ParentComponents from './ParentComponents.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Memorization/> */}
    <ParentComponents/>
  </StrictMode>,
)
