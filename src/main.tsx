import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Button } from '@/components/ui/button'
import { SquareAsteriskIcon } from 'lucide-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootPage from './pages/Root'
import SpeedCardsPage from './pages/speed-cards/SpeedCardsPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>
  },
  {
    path: "speed-cards",
    element: <SpeedCardsPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='min-h-screen w-full grid grid-rows-[40px_1fr] gap-2 overflow-hidden'>
      <div className="container flex flex-row justify-between items-center">
        <Button variant="ghost">
          <SquareAsteriskIcon className='w-6 h-6 mr-3'/>
          <h1 className='text-lg font-bold'>Speeeeeed</h1>
        </Button>
      </div>

      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
