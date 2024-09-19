import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../store/UserContext'
import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function MainLayout() {

  const client = new QueryClient()

  const { value } = useLocalStorage("mms-user");
  
  const [user, setUser] = useState(value ? value : { email: "", password: "", state: false })

  return (<QueryClientProvider client={client}>
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  </QueryClientProvider>
  )
}

export default MainLayout