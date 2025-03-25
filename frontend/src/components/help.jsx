import React, { useState } from "react";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    try {
      const response = await fetch("http://localhost:9090/gemini", { // ✅ Correct API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data); // ✅ Debugging output

      setMessages([...messages, { text: userInput, sender: "user" }, { text: data.response, sender: "bot" }]);
      setUserInput("");
    } catch (error) {
      console.error("Fetch error:", error);
      setMessages([...messages, { text: "Error fetching response!", sender: "bot" }]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button className="chat-btn" onClick={toggleChat}>💬</button>

      {/* Chatbox */}
      {isOpen && (
        <>
          <div className="overlay" onClick={toggleChat}></div>
          <div className="chatbox">
            <div className="chat-header">
              <h3>Chat</h3>
              <button className="close-btn" onClick={toggleChat}>✖</button>
            </div>
            <div className="chat-body">
              {messages.map((msg, index) => (
                <p key={index} className={msg.sender}>{msg.text}</p>
              ))}
            </div>
            <div className="chat-footer">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </>
      )}

      {/* Styles in the same file */}
      <style>{`
        .chat-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #007bff;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
        }

        .chatbox {
          position: fixed;
          bottom: 50px;
          right: 20px;
          width: 50%;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          background: #007bff;
          color: white;
          padding: 10px;
          border-radius: 10px 10px 0 0;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
        }

        .chat-body {
          height: 300px;
          overflow-y: auto;
          padding: 10px;
        }

        .chat-body .user {
          text-align: right;
          background: #007bff;
          color: white;
          padding: 8px;
          margin: 5px 0;
          border-radius: 5px;
        }

        .chat-body .bot {
          text-align: left;
          background: #f1f1f1;
          padding: 8px;
          margin: 5px 0;
          border-radius: 5px;
        }

        .chat-footer {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ddd;
        }

        .chat-footer input {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 5px;
        }

        .chat-footer button {
          margin-left: 10px;
          padding: 8px 15px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ChatButton;
