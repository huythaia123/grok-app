import { Textarea } from '@/components/ui/textarea'
import { Button } from '../ui/button'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Book,
  Code,
  HandHeart,
  Heart,
  Laugh,
  Newspaper,
  Paintbrush,
  PaperclipIcon,
  ScanSearchIcon,
  SignalMedium,
  Stethoscope,
  Users,
  Zap,
} from 'lucide-react'
import DropdownMenuButton from '../dropdown-menu-button'
import TooltipButton from '../tooltip-button'
import { useState } from 'react'

const ChatLayout = () => {
  const [changeBtn, setChangeBtn] = useState<'Suggetestions' | 'Persionas'>(
    'Suggetestions',
  )

  const handleChangeBtn = () => {
    if (changeBtn === 'Suggetestions') setChangeBtn('Persionas')
    else setChangeBtn('Suggetestions')
  }

  return (
    <div className='container mx-auto flex h-screen min-h-full flex-col items-center justify-center gap-6 p-2 sm:gap-9'>
      <div className='max-w-2xl lg:w-4/5'>
        <h1 className='flex w-full flex-col items-center text-center text-2xl sm:text-3xl'>
          Welcome to Grok.{' '}
          <span className='text-gray-500'>How can I help you today?</span>
        </h1>
      </div>

      {/* textarea */}
      <div className='w-full max-w-[800px] rounded-2xl border bg-white p-1 shadow-sm focus-within:ring focus-within:ring-gray-400 hover:ring hover:ring-gray-300 sm:p-2 lg:w-4xl'>
        <div>
          <Textarea className='max-h-80 w-full resize-none border-none shadow-none focus:outline-none focus-visible:ring-0' />
        </div>

        <div className='flex justify-between gap-2'>
          <Button
            variant={'outline'}
            className='relative size-9 rounded-full'
            disabled
          >
            <PaperclipIcon className='absolute top-1/2 left-1/2 size-5 -translate-1/2' />
          </Button>

          <div className='flex flex-1 justify-between'>
            <div className='flex gap-1'>
              <TooltipButton
                button={
                  <Button className='rounded-full' variant={'outline'}>
                    Deepsearch
                  </Button>
                }
              >
                Advanced search and reasoning
              </TooltipButton>
              <TooltipButton
                button={
                  <Button className='rounded-full' variant={'outline'}>
                    Thing
                  </Button>
                }
              >
                Let the model take its time
              </TooltipButton>
            </div>

            <DropdownMenuButton
              button={
                <Button
                  variant={'outline'}
                  className='rounded-full focus:border focus:border-gray-100'
                >
                  Grok 3
                  <ArrowDownIcon />
                </Button>
              }
            />
          </div>
          <Button className='relative size-9 rounded-full' variant={'outline'}>
            <ArrowUpIcon className='absolute top-1/2 left-1/2 size-5 -translate-1/2' />
          </Button>
        </div>
      </div>

      {changeBtn === 'Suggetestions' && (
        <div className='flex max-w-2xl flex-wrap justify-center gap-2 lg:w-4/5'>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <ScanSearchIcon /> Research
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Zap /> Howto
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <SignalMedium /> Analyze
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Paintbrush /> Create images
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Code />
            Code
          </Button>
        </div>
      )}

      {/* suggetestions */}

      {/* Persional */}
      {changeBtn === 'Persionas' && (
        <div className='flex max-w-2xl flex-wrap justify-center gap-2 lg:w-4/5'>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Newspaper /> Latest News
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Heart className='text-pink-400' /> Romance Me (18+)
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Laugh className='text-yellow-400' /> Unhinged Comedian (18+)
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Users className='text-orange-500' /> Loyal Friend
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Book className='text-green-500' /> Homework Helper
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <Stethoscope className='text-purple-400' /> Not a Doctor
          </Button>
          <Button variant={'outline'} className='cursor-pointer bg-transparent'>
            <HandHeart className='text-green-700' /> Not a Therapist
          </Button>
        </div>
      )}

      <Button
        onClick={handleChangeBtn}
        variant={'link'}
        className='text-gray-400 hover:text-gray-500'
      >
        Swith to {changeBtn === 'Persionas' ? 'Suggetestions' : 'Persionas'}
      </Button>
    </div>
  )
}

export default ChatLayout
