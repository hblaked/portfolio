import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './global.css'
import Home from './pages/home.tsx'
import Projects from './pages/projects.tsx'
import Privacy from './pages/privacy.tsx'
import Contact from './pages/contact.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/contact',
    element: <Contact />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>,
)
