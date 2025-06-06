import './ChatHistory.scss'
import Message from '../Message/Message'

function ChatHistory() {
const [chatHistory,setChatHistory] = useState([])

  return (
    <div className='ChatHistory'>
        <h2>Chat History</h2>
        {chatHistory.map(message=>(
            message
        ))}
    </div>
  )
}

export default ChatHistory