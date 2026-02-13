import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loveSymbols = ["❤️", "💫", "✨", "🫶", "💕", "💖", "💗", "💓", "💞", "💘", "❣️", "💟", "💝"];

const ValentineFinal = () => {
  const [accepted, setAccepted] = useState(false);
  const [pandaArrived, setPandaArrived] = useState(false);
  const navigate = useNavigate();

  // Panda walks in after mount
  useState(() => {
    setTimeout(() => setPandaArrived(true), 100);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-rose-800 flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating love symbols */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute text-2xl pointer-events-none select-none"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-50px`,
            animation: `floatUp ${5 + Math.random() * 8}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${16 + Math.random() * 28}px`,
            opacity: 0.7,
          }}
        >
          {loveSymbols[i % loveSymbols.length]}
        </span>
      ))}

      {!accepted ? (
        <div className="z-10 flex flex-col items-center gap-8">
          {/* Panda walking in */}
          <div
            className="text-8xl sm:text-9xl transition-all duration-[2000ms] ease-out"
            style={{
              transform: pandaArrived ? "translateX(0)" : "translateX(-300px)",
              opacity: pandaArrived ? 1 : 0,
            }}
          >
            🐼
          </div>

          {pandaArrived && (
            <div className="animate-fadeInUp flex flex-col items-center gap-6">
              <p
                className="text-2xl font-bold text-center px-6 py-4 rounded-2xl"
                style={{
                  color: "#000",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "20px",
                  boxShadow: "0 0 40px rgba(255, 107, 157, 0.3)",
                }}
              >
                🐼 Panda asks you something special...
              </p>

              <button
                onClick={() => setAccepted(true)}
                className="text-xl font-bold text-white px-10 py-5 rounded-full transition-all hover:scale-110 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #ff6b9d, #e74c8b, #c44569)",
                  boxShadow: "0 0 50px rgba(255, 107, 157, 0.6)",
                  animation: "floatForm 2s ease-in-out infinite, pulseGlow 2s ease-in-out infinite",
                }}
              >
                💕 Will u be my Valentine? 💕
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="z-10 flex flex-col items-center gap-8 animate-fadeInUp max-w-2xl">
          {/* Valentine celebration */}
          <div className="flex gap-3 text-5xl mb-4">
            {["🎉", "❤️", "💕", "🎊", "💖"].map((e, i) => (
              <span key={i} style={{ animation: `floatForm ${1.5 + i * 0.3}s ease-in-out infinite` }}>
                {e}
              </span>
            ))}
          </div>

          <div
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, #fff0f5, #ffe4e1, #fff9f0)",
              boxShadow: "0 0 80px rgba(255, 107, 157, 0.4), 0 20px 60px rgba(0,0,0,0.2)",
              border: "2px solid rgba(255, 182, 193, 0.5)",
            }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#000", fontFamily: "'Georgia', serif" }}>
              💝 Happy Valentine's Day My Love ❤️
            </h1>

            <div className="text-lg leading-relaxed space-y-4" style={{ color: "#000", fontFamily: "'Georgia', serif" }}>
              <p className="font-bold text-xl">
                You are already my valentine my bangaram 💕
              </p>
              <p>
                Be happy and hold ur smile everytime... please don't forget me and my love for u 🥹
              </p>
              <p>
                ....stay healthy and na meeda kopam, chiraku tagginchukooo.....
              </p>
              <p>
                chinnapillani kadha, Baga chusko nannu... nenu kuda ninnu baga chusukunta......
              </p>
              <p className="text-2xl font-bold mt-6">
                Happy Valentine's Day my love ❤️
              </p>
            </div>
          </div>

          <div className="flex gap-3 text-4xl">
            {["💞", "💗", "💓", "💖", "💕"].map((e, i) => (
              <span key={i} style={{ animation: `floatForm ${1.5 + i * 0.3}s ease-in-out infinite` }}>
                {e}
              </span>
            ))}
          </div>

          <button
            onClick={() => navigate("/love")}
            className="text-lg font-bold text-white px-8 py-4 rounded-full transition-all hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ff6b9d, #c44569)",
              boxShadow: "0 0 40px rgba(255, 107, 157, 0.5)",
            }}
          >
            🏠 Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default ValentineFinal;
