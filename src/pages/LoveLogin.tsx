import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loveSymbols = ["❤️", "💫", "✨", "🫶", "💕", "💖", "💗", "💓", "💞", "💘", "❣️", "💟", "💝"];

const LoveLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.toLowerCase() !== "satish") {
      setError("Wrong name! Only someone special can enter 💕");
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    if (password !== "Pravalika@1997") {
      setError("Wrong password! Try again my love 💗");
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    navigate("/letter-reveal");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-rose-800 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating love symbols */}
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-50px`,
            animation: `floatUp ${6 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 6}s`,
            fontSize: `${16 + Math.random() * 24}px`,
            opacity: 0.7,
          }}
        >
          {loveSymbols[i % loveSymbols.length]}
        </span>
      ))}

      {/* Title */}
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 z-10"
        style={{
          background: "linear-gradient(135deg, #ff6b9d, #ffd93d, #ff6b9d)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 3s ease infinite",
        }}
      >
        💕 Love Application for Love 💕
      </h1>

      {/* Floating login form */}
      <div
        className={`z-10 bg-white/10 backdrop-blur-xl border border-pink-300/30 rounded-3xl p-8 sm:p-10 w-[90%] max-w-md shadow-2xl ${shake ? "animate-shake" : ""}`}
        style={{
          animation: shake ? undefined : "floatForm 3s ease-in-out infinite",
          boxShadow: "0 0 60px rgba(255, 107, 157, 0.3), 0 0 120px rgba(255, 107, 157, 0.1)",
        }}
      >
        <h2 className="text-2xl font-bold text-pink-100 text-center mb-6">Enter with Love 💖</h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-pink-200 text-sm mb-2 font-medium">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); }}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-pink-300/30 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-pink-200 text-sm mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="Enter password..."
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-pink-300/30 text-white placeholder-pink-300/50 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/30 transition-all"
            />
          </div>

          {error && (
            <p className="text-red-300 text-sm text-center animate-pulse">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ff6b9d, #c44569, #ff6b9d)",
              backgroundSize: "200% 200%",
              animation: "gradientShift 3s ease infinite",
              boxShadow: "0 0 30px rgba(255, 107, 157, 0.5)",
            }}
          >
            Go to Experience Love 💕
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveLogin;
