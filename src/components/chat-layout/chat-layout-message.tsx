import { useState } from 'react'
import ChatTextarea from '../chat-textarea'
import ChatMessageHistory from './chat-message-history'
import { useParams } from 'react-router'

export interface Message {
  role: string
  content: string
}

const ChatLayoutMessage = () => {
  const [chatMessage, setChatMessage] = useState<string>('')
  const [isSubmit, setIsSubmit] = useState(false)
  const params = useParams()

  const [messages, setMessages] = useState<Message[]>([])

  return (
    <div>
      <ChatMessageHistory
        message={chatMessage}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        setMessages={setMessages}
        messages={messages}
      />
      <ChatTextarea
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        setMessages={setMessages}
        messages={messages}
        className='fixed bottom-5 left-1/2 -translate-x-1/2'
      />
    </div>
  )
}

export default ChatLayoutMessage
