import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './Router'
import { NotificationProvider } from './context/notification.context'
import { Suspense } from 'react'
import loadingGif from './assets/loading.gif'

function App() {
  

  return (
  <NotificationProvider>
    <BrowserRouter>
      <Suspense fallback={loadingGif}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  </NotificationProvider>
  )
}

export default App
