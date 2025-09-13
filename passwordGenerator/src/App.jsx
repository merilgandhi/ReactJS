import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [chacter, setchacter] = useState(false);
  const [password, setpassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += '0123456789';
    }
    if (chacter) {
      str += '!@#$%^&*()_+-={}[]|;:"<>,.?/';
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, chacter, setpassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, number, chacter, generatePassword]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl max-w-lg w-full p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Password Generator
          </h1>
          
          <div className="flex gap-3 mb-8">
            <input 
              type="text"
              value={password}
              className="flex-1 px-4 py-4 text-lg font-mono bg-gray-900/80 text-green-400 rounded-xl border border-gray-600 focus:border-cyan-400 focus:outline-none transition-all duration-300 selection:bg-cyan-400/30"
              placeholder="Generated Password" 
              readOnly 
              ref={passwordRef}
            />
            <button 
              onClick={copyPassword}
              className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Copy
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-white font-medium text-lg">Length</label>
                <span className="text-cyan-400 font-bold text-xl">{length}</span>
              </div>
              <input 
                type="range"
                min={8} 
                max={30}
                value={length}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                onChange={(e) => {setlength(e.target.value)}} 
              />
            </div>

            <div className="flex justify-center gap-8">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  checked={number}
                  id="number"
                  className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  onChange={() => setnumber((prev) => !prev)} 
                />
                <label htmlFor="number" className="text-white font-medium text-lg cursor-pointer">Numbers</label>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  checked={chacter}
                  id="chacter"
                  className="w-5 h-5 text-cyan-500 bg-gray-700 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  onChange={() => setchacter((prev) => !prev)} 
                />
                <label htmlFor="chacter" className="text-white font-medium text-lg cursor-pointer">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #42bacfff, #2f7af3ff);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #5a949fff, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </>
  )
}

export default App;
