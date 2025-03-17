import GoogleIcon from '@/assets/logo/google'
import GrokIcon from '@/assets/logo/grok'
import XIcon from '@/assets/logo/x'
import { Button } from '@/components/ui/button'
import { AppleIcon } from 'lucide-react'
import { Link, Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <main className='h-screen w-screen'>
      <div className='relative flex h-screen w-screen flex-col overflow-x-hidden sm:overflow-hidden'>
        <div className='h-full sm:flex sm:grow sm:items-start sm:justify-center lg:px-0'>
          <div className='flex h-full w-full flex-col items-center justify-between overflow-y-auto bg-[#F8F7F5] align-middle sm:px-4 dark:bg-[hsla(217,4%,12%,1)]'>
            <div className='my-8'></div>
            <div className='flex flex-col items-center justify-center align-middle'>
              <Link to={'/'}>
                <GrokIcon
                  className='mt-3 mb-6 text-black dark:text-white'
                  width={160}
                  height={80}
                />
              </Link>
              <div className='flex flex-col items-center justify-center gap-3'>
                <Button
                  variant={'outline'}
                  className='h-12 w-[300px] gap-2 p-3'
                >
                  <XIcon className='size-4' /> Continute with X
                </Button>
                <Button
                  variant={'outline'}
                  className='h-12 w-[300px] gap-2 p-3'
                >
                  <GoogleIcon className='size-4' /> Continute with Google
                </Button>
                <Button
                  variant={'outline'}
                  className='h-12 w-[300px] gap-2 p-3'
                >
                  <AppleIcon className='size-4' /> Continute with Apple
                </Button>
                {/* <hr className='w-full pt-3 dark:opacity-10'></hr> */}
                <div className='mt-5 w-full border'></div>
              </div>
              <div className='pb-10'>
                <Outlet />
              </div>
              <footer className='my-8 mt-20 justify-center px-4 text-center text-sm text-[#757C86]'>
                <span>By continuing, you agree to xAI's </span>
                <a
                  className='font-bold hover:underline'
                  target='_blank'
                  href='https://x.ai/legal/terms-of-service'
                >
                  Terms of Service
                </a>
                <span> and </span>
                <a
                  className='font-bold hover:underline'
                  target='_blank'
                  href='https://x.ai/privacy-policy'
                >
                  Privacy Policy
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
