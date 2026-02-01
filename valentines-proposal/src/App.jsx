import { useState } from 'react'
import './App.css'

function App() {
  const [noClickCount, setNoClickCount] = useState(0)
  const [showHearts, setShowHearts] = useState(false)
  const [showBrokenHeart, setShowBrokenHeart] = useState(false)
  const [showKissImage, setShowKissImage] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleYesClick = () => {
    setShowHearts(true)
    setShowKissImage(true)
    setTimeout(() => setShowKissImage(false), 1000)
    setAnswered(true)
  }

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1)
    setShowBrokenHeart(true)
    setTimeout(() => setShowBrokenHeart(false), 1000)
  }

  const noButtonSize = Math.max(20 - noClickCount * 3, 5)
  const yesButtonSize = 20 + noClickCount * 5

  return (
    <>
      <div>
        {/* <video src="bmval.mp4" width="600" height="300" controls autoPlay /> */}
        <img src="bmval.gif" width="600" height="300" alt="Valentine" />
      </div>
      
      <h1>hello maan 😼</h1>

      <p>u have to say yes.</p>
      
      {!answered && (
        <div className="card" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button 
            onClick={handleYesClick}
            style={{ 
              fontSize: `${yesButtonSize}px`,
              padding: `${yesButtonSize * 0.5}px ${yesButtonSize * 1}px`,
              transition: 'all 0.3s ease'
            }}
          >
            Yes :)
          </button>
          <button 
            onClick={handleNoClick}
            style={{ 
              fontSize: `${noButtonSize}px`,
              padding: `${noButtonSize * 0.5}px ${noButtonSize * 1}px`,
              transition: 'all 0.3s ease'
            }}
          >
            No :(
          </button>
        </div>
      )}

      {answered && (
        <div style={{ fontSize: '48px', marginTop: '20px' }}>
          LET'S GOOOOO W'S IN THE CHATTTTT 👅 👅 👅
        </div>
      )}

      {showBrokenHeart && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '150px',
          animation: 'fadeInOut 1s ease-in-out',
          pointerEvents: 'none',
          zIndex: 1000
        }}>
          💔
        </div>
      )}

      {showKissImage && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '150px',
          animation: 'fadeInOut 1s ease-in-out',
          pointerEvents: 'none',
          zIndex: 1000
        }}>
          <img src='IMG_0297.jpeg' height={378} width={504}></img>
        </div>
      )}

      {showHearts && (
        <div className="hearts-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="falling-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes fall {
          0% {
            top: -10%;
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0.5;
          }
        }

        .hearts-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 999;
        }

        .falling-heart {
          position: absolute;
          top: -10%;
          font-size: 30px;
          animation: fall linear infinite;
        }
      `}</style>
    </>
  )
}

export default App