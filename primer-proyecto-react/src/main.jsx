import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
//import { PrimerComponente } from './primerComponente.jsx'
//import { ContadorApp } from './ContadorApp.jsx'
//import { ListadoApp } from './ListadoApp.jsx'

import '../styles/styles.css';
import { BotonApp } from './BotonApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<PrimerComponente nombre='Juan' apellido='Perez'/>
    <ContadorApp value={0}/>
    <ListadoApp />*/}
    <BotonApp />
  </StrictMode>
)
