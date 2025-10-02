import { useState} from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}) {
            const [inputText, setInputText] = useState('');

            function saveInputText(event) {
                setInputText(event.target.value);
            }

            function sendMessage() {
                const newChatMessages =[
                    ...chatMessages,
                    { message: inputText, sender: "user", id: crypto.randomUUID() }
                ];

                if (inputText.trim() === '') return;
                setChatMessages(newChatMessages);
                // get response from chatbot
                const response = Chatbot.getResponse(inputText);
                setChatMessages([
                    ...newChatMessages,
                    { message: response, sender: "robot", id: crypto.randomUUID() }
                ]);
                setInputText('');
            }

            return (
                <div className="chat-input-container">
                    <input 
                        placeholder="Send a message to ChatBot" 
                        size="30"
                        value={inputText}
                        onChange={saveInputText}
                        className="input-field"
                    />
                    <button onClick={sendMessage} className="send-button">Send</button>
                </div>
            );
        }