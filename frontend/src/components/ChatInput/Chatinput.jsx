import './ChatInput.scss'

function ChatInput({send}) {
  return (
    <div className='ChatInput'>
      <input onKeyDown={this.props.send} type="text" placeholder='Type a message' />
    </div>
  )
}

export default ChatInput