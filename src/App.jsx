import { useState, } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput.jsx'
import { ChatMessages } from './components/ChatMessages.jsx'


        

        

function App() { 
            const [chatMessages, setChatMessages] = useState([
                {message:"hello chatbot", sender:"user",id:'id1'},
                {message:"hello! how can i help you ", sender:"robot",id:'id2'},
                {message:"can you get me todays date?", sender:"user",id:'id3'},
                {message:"today is september 28", sender:"robot",id:'id4'},
            ]);

            return (
                <div className="app-container">
                    
                    <ChatMessages chatMessages={chatMessages}/>
                    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}/> 
                </div>
            );
        }  
export default App
