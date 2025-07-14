import Message from './Message';
import './ChatArea.css';

export default function ChatArea({ messages, loading }) {
  return (
    <div className="chat-area">
      {messages.map((msg, i) => (
        <Message msg={msg} key={i} />
      ))}
      {loading && (
        <Message msg={{ role: "assistant", content: "Thinking..." }} />
      )}
    </div>
  );
}
