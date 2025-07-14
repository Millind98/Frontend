import { FaUserCircle } from "react-icons/fa";
import './Message.css';

export default function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div
      className={`message-row`}
      style={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-end",
        marginBottom: "10px",
        width: "100%"
      }}
    >
      {/* Avatar */}
      <div className="avatar" style={{
        marginLeft: isUser ? "10px" : "0",
        marginRight: isUser ? "0" : "10px",
      }}>
        {isUser ? (
          <FaUserCircle size={32} color="#647C90" />
        ) : (
          <img
            src="/Dark_Berries-removebg-preview.png"
            alt="Brothers Can"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "#fff",
              objectFit: "cover",
              border: "2px solid #f0f0f0"
            }}
          />
        )}
      </div>
      {/* Bubble */}
      <div className={`message ${isUser ? "user" : "ai"}`}>
        {msg.content}
      </div>
    </div>
  );
}
