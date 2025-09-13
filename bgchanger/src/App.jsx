import { useState } from 'react'

function App() {

  const[color,setcolor] = useState("lightblue")

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
            onClick={()=>setcolor("Red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'red'}}
            >Red</button>
            <button 
            onClick={()=>setcolor("LightGreen")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
            style={{backgroundColor:'Lightgreen'}}
            >Green</button>
            <button 
            onClick={()=>setcolor("Blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'blue'}}
            >Blue</button>
            <button 
            onClick={()=>setcolor("Yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
            style={{backgroundColor:'yellow'}}
            >Yellow</button>
            <button 
            onClick={()=>setcolor("Purple")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'purple'}}
            >Purple</button>
            <button 
            onClick={()=>setcolor("Orange")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'orange'}}
            >Orange</button>
            <button 
            onClick={()=>setcolor("#FFC680")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
            style={{backgroundColor:'#FFC680'}}
            >Buff</button>
            <button 
            onClick={()=>setcolor("#7F1734")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'#7F1734'}}
            >Claret</button>
            <button 
            onClick={()=>setcolor("Navy")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'Navy'}}
            >Navy</button>
            <button 
            onClick={()=>setcolor("Cyan")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer'
            style={{backgroundColor:'Cyan'}}
            >Cyan</button>
          </div>
        </div>
      </div>
  )
}

export default App
