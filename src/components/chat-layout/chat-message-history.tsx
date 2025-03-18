import instance from '@/configs/instance'
import { useEffect } from 'react'
import { useParams } from 'react-router'

interface ChatHistoryRes {
  statusCode: number
  message: string
  chat_id: string
  messages: Message[]
}

interface Message {
  role: string
  content: string
}

type ChatMessageHistoryProps = {
  message?: string
  isSubmit: boolean
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  messages: Message[]
}
const ChatMessageHistory = ({
  message,
  isSubmit,
  setIsSubmit,
  messages,
  setMessages,
}: ChatMessageHistoryProps) => {
  const { chat_id } = useParams()

  useEffect(() => {
    async function _() {
      const res = await instance.get<ChatHistoryRes>(`/api/chat/${chat_id}`)
      setMessages(res.data.messages)
    }
    _()
  }, [chat_id, setMessages])

  useEffect(() => {
    async function _() {
      if (isSubmit && message) {
        setMessages([...messages, { content: message, role: 'user' }])
        setIsSubmit(!isSubmit)
      }
    }
    _()
  }, [isSubmit, message, messages, setIsSubmit, setMessages])

  return (
    <div className='z-30 flex min-h-screen justify-center'>
      <div className='flex w-[800px] flex-col pb-48'>
        {/* Vùng hiển thị tin nhắn */}
        <div className='flex-1 overflow-y-auto p-4'>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 hover:ring hover:ring-gray-300 ${
                  msg.role === 'user'
                    ? 'bg-white text-black'
                    : msg.role === 'assistant'
                      ? 'text-black'
                      : 'bg-yellow-100 text-sm text-gray-700 italic'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input (tùy chọn) */}
        {/* <div className='border-t p-4'>
          <input
            type='text'
            placeholder='Nhập tin nhắn...'
            className='w-full rounded-lg border p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none'
          />
        </div> */}
      </div>
    </div>
  )
}

export default ChatMessageHistory
