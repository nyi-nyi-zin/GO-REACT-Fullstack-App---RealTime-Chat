import ChatHistory from './components/ChatHistory/ChatHistory'
import Header from './components/Header/Header'
import ChatInput from './components/ChatInput/ChatInput'
import './index.css'
import {connect,sendMsg} from './api'
import { useEffect, useState } from 'react'

function App() {
 
  
  useEffect(()=>{
    connect((msg) =>{
      console.log('New Message');
       setChatHistory(prev => [...prev, msg])
      console.log(chatHistory)
    })
  },[])

 

  return (
    <>
      <Header/>
      <ChatHistory chatHistory={chatHistory}/>
      <ChatInput send={send}/>
    </>
  )
}

export default App
