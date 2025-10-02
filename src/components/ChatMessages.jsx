import { useEffect , useRef } from 'react'
import { ChatMessage } from './ChatMessage.jsx'
import './ChatMessages.css'


export function ChatMessages({chatMessages}) {
            const chatMessagsRef = useRef(null);
            useEffect(()=>{
                const containerElem = chatMessagsRef.current;
                if(containerElem) {
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            }, [chatMessages]);
            return (
                <div className="chat-messages-container"
                ref={chatMessagsRef}>
                    {chatMessages.map((chatMessage) => (
                        <ChatMessage 
                            message={chatMessage.message} 
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                        />
                    ))}
                </div>
            );
        }