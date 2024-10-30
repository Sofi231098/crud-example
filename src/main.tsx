import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SideBar } from './shared/layouts/LayoutsSideBar/LayoutsSideBar'
//import { Button } from "@/shared/components/ui/button"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SideBar>
      <h1>SideBar</h1>
    </SideBar>
  </StrictMode>,
)
