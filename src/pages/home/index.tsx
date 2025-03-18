import ChatLayout from '@/components/chat-layout'
import Header from '@/components/header'
import { Outlet } from 'react-router'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default HomePage
