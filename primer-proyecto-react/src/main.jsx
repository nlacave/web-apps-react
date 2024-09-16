import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './primerComponente.jsx'
import { ContadorApp } from './ContadorApp.jsx'
import '../styles/styles.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente nombre='Nicolas' apellido="Lacave" />
    <ContadorApp />
  </StrictMode>,
)
