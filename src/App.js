import { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatArea from './components/ChatArea';
import ChatInput from './components/ChatInput';
import Logo from './components/Logo';
import InfoBox from './components/InfoBox';
import Banner from './components/Banner';

const API_URL = "http://127.0.0.1:8000/ask";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, newMessage]);
    setText('');
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text.trim() })
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer ?? "Sorry, I didn't get that."
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error connecting to backend." }
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <Banner />
      <Logo />
      <div className="page">
        <div className="chat-box">
          <ChatHeader />
          <ChatArea messages={messages} loading={loading} />
          <ChatInput text={text} setText={setText} handleSubmit={handleSubmit} loading={loading} />
        </div>
        <div className="info-grid">
          <InfoBox title="Average Shift efficiency today: 70%">
            <img
              src="/Fake_Graph.webp"
              alt="snapshot"
              style={{ width: '100%', height: '100%', borderRadius: '6px' }}
            />
          </InfoBox>
          <InfoBox title="Product turnover:">Expected in 5 hours 15 minutes</InfoBox>
          <InfoBox title="Can size change:">Expected on the 14th July</InfoBox>
          <InfoBox title="Notes:">Filler is running slow today</InfoBox>
        </div>
      </div>
    </div>
  );
}

export default App;
