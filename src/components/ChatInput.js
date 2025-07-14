import { FaPaperPlane } from "react-icons/fa";
import "./ChatInput.css";

export default function ChatInput({ text, setText, handleSubmit, loading }) {
  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        disabled={loading}
        placeholder="Type your message..."
        onChange={e => setText(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter" && !e.shiftKey && !loading) handleSubmit(e);
        }}
      />
      <button
        type="submit"
        disabled={loading || !text.trim()}
        title="Send"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <FaPaperPlane size={22} color={loading ? "#ccc" : "#1176d3"} />
      </button>
    </form>
  );
}
