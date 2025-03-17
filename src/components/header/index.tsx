import GrokIcon from '@/assets/logo/grok'
import { CogIcon, TextSearchIcon, UserIcon } from 'lucide-react'
import { Button } from '../ui/button'
import TooltipButton from '../tooltip-button'
import DrawerButton from '../drawer-button'
import DropdownMenuButton from '../dropdown-menu-button'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='flex h-16 items-center justify-between px-3'>
      <div>
        <a href='/'>
          <GrokIcon
            width={88}
            height={33}
            className='fill-black opacity-80 hover:opacity-100 dark:fill-white [&>#furigana]:opacity-60 [&>#mark]:block [&>path]:hidden sm:[&>path]:block'
          />
        </a>
      </div>

      <div className='flex gap-1'>
        <div>
          <DrawerButton
            button={
              <TooltipButton icon={<TextSearchIcon className='size-5' />}>
                History
              </TooltipButton>
            }
          />
        </div>
        <div className='inline-flex items-center gap-1'>
          <DropdownMenuButton
            className='hidden sm:block'
            button={
              <TooltipButton icon={<CogIcon className='size-5' />}>
                Settings
              </TooltipButton>
            }
          />
          <Link to={'sign-up'}>
            <Button
              className='cursor-pointer rounded-full px-3 py-2 font-medium hover:opacity-85'
              size={'sm'}
            >
              <span>
                <UserIcon className='size-4' />
              </span>{' '}
              Sign up
            </Button>
          </Link>

          <Link to={'sign-in'}>
            <Button
              className='hidden cursor-pointer rounded-full px-3 py-2 font-medium hover:opacity-85 sm:flex'
              size={'sm'}
              variant={'outline'}
            >
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
