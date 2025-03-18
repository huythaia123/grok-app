import Header from '@/components/header'
import { Outlet } from 'react-router'

const HomePage = () => {
  return (
    <div>
      <div className='fixed top-0 right-0 left-0'>
        <Header />
      </div>
      <Outlet />
    </div>
  )
}

export default HomePage
