import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const loveSymbols = ["❤️", "💫", "✨", "🫶", "💕", "💖", "💗", "💓", "💞", "💘", "❣️", "💟", "💝"];

const LoveLetter = () => {
  const [showMoveButton, setShowMoveButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowMoveButton(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const handleMoveToNext = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate("/valentine-final");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-red-900 to-rose-800 flex flex-col items-center justify-center relative overflow-hidden py-10 px-4">
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

      {/* Love Letter */}
      <div
        className="z-10 max-w-2xl w-full rounded-3xl p-8 sm:p-12 animate-fadeInUp relative"
        style={{
          background: "linear-gradient(135deg, #fff9f0, #ffe4e1, #fff0f5)",
          boxShadow: "0 0 60px rgba(255, 107, 157, 0.3), 0 20px 60px rgba(0,0,0,0.2)",
          border: "2px solid rgba(255, 182, 193, 0.5)",
        }}
      >
        {/* Decorative corners */}
        <span className="absolute top-3 left-4 text-2xl">💌</span>
        <span className="absolute top-3 right-4 text-2xl">💕</span>
        <span className="absolute bottom-3 left-4 text-2xl">💗</span>
        <span className="absolute bottom-3 right-4 text-2xl">💖</span>

        <h2
          className="text-3xl font-bold text-center mb-8"
          style={{
            color: "#000",
            fontFamily: "'Georgia', serif",
          }}
        >
          💝 My Dearest Letter 💝
        </h2>

        <div
          className="text-lg leading-relaxed space-y-4"
          style={{
            color: "#000",
            fontFamily: "'Georgia', serif",
          }}
        >
          <p>Hi Bava,</p>
          <p>
            U loved me even in ups and downs, I never forget ur care, love on me, u are very special to me, I don't know why am I loving u this much but one thing is clear........
          </p>
          <p className="font-bold text-xl text-center my-4">
            I am ur wife and u are my husband .....
          </p>
          <p>
            There are lots of miscommunications between us. But nothing can make us separate, vadileyanu le undi neeku na chetilo.......But please consider my request to be loved by u.........I was starving for ur love and please understand my love tooo.
          </p>
          <p>
            Apart from that...I bet One day, you'll achieve everything you're working for. The world will clap for your success. But I'll be the one who remembers the nights, the pressure, the stress, and the tears you never showed.
          </p>
          <p>
            Even u should need a shoulder to lean on and speak out what ur heart feels. I think u need me..right!
          </p>
          <p className="font-bold text-xl mt-6">
            I believe in you — not just your results, but the man you are becoming.
          </p>
          <p className="text-2xl text-center font-bold mt-6">
            I love u and I miss u so much ❤️
          </p>
        </div>
      </div>

      {/* Move to next button */}
      {showMoveButton && (
        <button
          onClick={handleMoveToNext}
          className="z-10 mt-8 text-lg font-bold text-white px-8 py-4 rounded-full transition-all hover:scale-110 active:scale-95 animate-fadeInUp"
          style={{
            background: "linear-gradient(135deg, #ff6b9d, #c44569)",
            boxShadow: "0 0 40px rgba(255, 107, 157, 0.5)",
          }}
        >
          Move to Next ➡️
        </button>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeInUp">
          <div
            className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-10 max-w-md text-center shadow-2xl"
            style={{
              animation: "floatForm 2s ease-in-out infinite",
              boxShadow: "0 0 80px rgba(255, 107, 157, 0.5)",
            }}
          >
            <p className="text-2xl font-bold" style={{ color: "#000", fontFamily: "'Georgia', serif" }}>
              Chalu inka chadiivindi... padha oka question ki answer chepali 😊💕
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {["💖", "💗", "💓", "💞", "💘"].map((h, i) => (
                <span key={i} className="text-2xl" style={{ animation: `floatForm ${1.5 + i * 0.3}s ease-in-out infinite` }}>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
