import { ArrowDownIcon, ArrowUpIcon, PaperclipIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import TooltipButton from '../tooltip-button'
import DropdownMenuButton from '../dropdown-menu-button'
import { useParams } from 'react-router'
import instance from '@/configs/instance'
import { Message } from '../chat-layout/chat-layout-message'
import { useEffect } from 'react'

type ChatTextareaProps = {
  className?: string
  chatMessage: string
  setChatMessage: React.Dispatch<React.SetStateAction<string>>
  isSubmit: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  messages: Message[]
}
const ChatTextarea = ({
  className,
  chatMessage,
  setChatMessage,
  isSubmit,
  setIsSubmit,
  setMessages,
  messages,
}: ChatTextareaProps) => {
  const params = useParams()
  const chat_id = params.chat_id

  const handleSubmitChat = async () => {
    // call api post chat
    if (!isSubmit) {
      const response = await instance.post('/api/chat', {
        chat_id,
        message: chatMessage,
      })

      setMessages([
        ...messages,
        {
          role: response.data?.role,
          content: response.data?.content,
        },
      ])

      setIsSubmit(!isSubmit)
      setChatMessage('')
    }
  }

  return (
    <div
      className={`w-full max-w-[800px] rounded-2xl border bg-white p-1 shadow-sm focus-within:ring focus-within:ring-gray-400 hover:ring hover:ring-gray-300 sm:p-2 lg:w-4xl ${className}`}
    >
      <div>
        <Textarea
          onChange={(e) => setChatMessage(e.target.value)}
          className='max-h-80 w-full resize-none border-none shadow-none focus:outline-none focus-visible:ring-0'
          value={chatMessage}
        />
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
        <Button
          onClick={handleSubmitChat}
          className='relative size-9 rounded-full'
          variant={'outline'}
          disabled={!chatMessage}
        >
          <ArrowUpIcon className='absolute top-1/2 left-1/2 size-5 -translate-1/2' />
        </Button>
      </div>
    </div>
  )
}

export default ChatTextarea
