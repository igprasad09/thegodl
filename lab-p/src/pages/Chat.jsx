import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function About() {
  // States
  const [roomNumber, setRoomNumber] = useState("");
  const [username, setUsername] = useState(""); // Added username state
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const chatEndRef = useRef(null);

  // Socket handlers
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [
        ...prev,
        { text: data.message, type: "received", username: data.username },
      ]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Room joining
  const handleJoinRoom = () => {
    if (roomNumber.trim() && username.trim()) {
      socket.emit("join_room", roomNumber);
      setIsJoined(true);
    } else {
      alert("Please enter both a room number and a username.");
    }
  };

  // Message sending
  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, type: "send", username: username };
      setMessages((prev) => [...prev, newMessage]);
      socket.emit("send_message", {
        message: input,
        room: roomNumber,
        username: username, // Include username in the emitted data
      });
      setInput("");
    }
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="grid justify-center min-h-screen">
      <h1 className="text-white text-center mt-9 text-4xl font-bold italic">
        {isJoined ? `Room Number: ${roomNumber}` : "Join a Chat Room"}
      </h1>

      {isJoined ? (
        <div className="w-[1200px] h-[500px] mx-auto mt-5 bg-slate-950 rounded-lg shadow-lg p-4">
          <div className="h-[400px] overflow-y-auto flex flex-col justify-end">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-2 ${
                  msg.type === "send" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-[70%] break-words ${
                    msg.type === "send"
                      ? "bg-sky-400 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {/* Display username for received messages */}
                  {msg.type === "received" && (
                    <div className="text-sm font-bold">{msg.username}</div>
                  )}
                  {/* Make message text selectable */}
                  <div className="allow-text-selection">{msg.text}</div>
                  {/* Add copy button */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(msg.text);
                      alert("Message copied to clipboard!");
                    }}
                    className="mt-1 text-xs text-gray-300 hover:text-white"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 p-2 rounded-md bg-gray-800 text-white"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[300px] h-[180px] mt-5 mx-auto">
          <div className="relative h-full w-full bg-slate-950 grid gap-4 justify-center items-center p-4 rounded-lg">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-center text-xl font-semibold bg-gray-900 placeholder:text-gray-400 text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Username"
              required
            />
            <input
              type="text"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full text-center text-xl font-semibold bg-gray-900 placeholder:text-gray-400 text-white border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter Room Number"
              required
            />
            <button
              onClick={handleJoinRoom}
              className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-colors ${
                !roomNumber.trim() || !username.trim()
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
              disabled={!roomNumber.trim() || !username.trim()}
            >
              Join Room
            </button>
          </div>
        </div>
      )}

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
    </div>
  );
}

export default About;
