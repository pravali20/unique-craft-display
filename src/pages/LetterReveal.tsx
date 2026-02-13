import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loveSymbols = ["❤️", "💫", "✨", "🫶", "💕", "💖", "💗", "💓", "💞", "💘", "❣️", "💟", "💝"];

const LetterReveal = () => {
  const [showLetter, setShowLetter] = useState(true);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  const handleLetterClick = () => {
    setShowLetter(false);
    setShowPhoto(true);
    setTimeout(() => setShowButton(true), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-rose-800 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating love symbols */}
      {[...Array(20)].map((_, i) => (
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

      {showLetter && (
        <div className="z-10 flex flex-col items-center gap-8 animate-fadeInUp">
          {/* Letter envelope */}
          <div
            className="relative cursor-pointer hover:scale-105 transition-transform duration-500"
            onClick={handleLetterClick}
            style={{ animation: "floatForm 3s ease-in-out infinite" }}
          >
            <div className="w-64 h-48 sm:w-80 sm:h-56 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden border-2 border-amber-200">
              {/* Envelope flap */}
              <div
                className="absolute top-0 left-0 right-0 h-1/2"
                style={{
                  background: "linear-gradient(135deg, #f5deb3, #deb887)",
                  clipPath: "polygon(0 0, 50% 60%, 100% 0)",
                }}
              />
              {/* Heart seal */}
              <div className="absolute z-10 text-5xl" style={{ top: "20%" }}>
                💌
              </div>
              {/* Envelope body text */}
              <p className="absolute bottom-6 text-amber-800 font-medium text-sm italic">
                A special letter for you...
              </p>
            </div>
          </div>

          {/* Click on me button */}
          <button
            onClick={handleLetterClick}
            className="text-xl font-bold text-pink-200 px-8 py-3 rounded-full border-2 border-pink-300/50 bg-pink-500/20 backdrop-blur-sm hover:bg-pink-500/40 transition-all"
            style={{ animation: "floatForm 2s ease-in-out infinite, pulseGlow 2s ease-in-out infinite" }}
          >
            ✨ Click on me ✨
          </button>
        </div>
      )}

      {showPhoto && (
        <div className="z-10 flex flex-col items-center gap-8 animate-fadeInUp">
          {/* Floating photo */}
          <div
            className="relative"
            style={{ animation: "floatForm 3s ease-in-out infinite" }}
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-pink-300 shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(255, 107, 157, 0.5), 0 0 120px rgba(255, 107, 157, 0.2)" }}
            >
              <img
                src="/lovable-uploads/c24cb7aa-b8a1-49ee-8355-4e74311c6265.png"
                alt="Special person"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating hearts around photo */}
            {["❤️", "💖", "💕", "💗"].map((h, i) => (
              <span
                key={i}
                className="absolute text-2xl"
                style={{
                  top: `${20 + i * 20}%`,
                  left: i % 2 === 0 ? "-30px" : "calc(100% + 10px)",
                  animation: `floatForm ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Cute text */}
          <p
            className="text-2xl sm:text-3xl font-bold text-center px-6 max-w-lg"
            style={{
              color: "#000",
              background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,200,220,0.9))",
              padding: "20px 30px",
              borderRadius: "20px",
              boxShadow: "0 0 40px rgba(255, 107, 157, 0.3)",
            }}
          >
            Why are you this handsome while being this hardworking 😭
          </p>

          {/* Button appears after 5 seconds */}
          {showButton && (
            <button
              onClick={() => navigate("/love-letter")}
              className="text-lg font-bold text-white px-8 py-4 rounded-full transition-all hover:scale-110 active:scale-95 animate-fadeInUp"
              style={{
                background: "linear-gradient(135deg, #ff6b9d, #c44569)",
                boxShadow: "0 0 40px rgba(255, 107, 157, 0.5)",
                animation: "floatForm 2s ease-in-out infinite, fadeInUp 0.8s ease-out",
              }}
            >
              ✨ Something special is there, click on me ✨
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LetterReveal;
