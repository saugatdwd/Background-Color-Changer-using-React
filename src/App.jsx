import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap text-center px-3 py-3 bottom-12 justify-center inset-x-0 ">
        <div className="flex flex-wrap bg-white rounded-2xl p-2 gap-3 justify-center">
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"olive"}} onClick={()=>{setColor("olive")}}>Olive</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"purple"}} onClick={()=>{setColor("purple")}}>Purple</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"khaki"}} onClick={()=>{setColor("khaki")}}>Khaki</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"indigo"}} onClick={()=>{setColor("indigo")}}>Indigo</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-white " style={{backgroundColor:"lightseagreen"}} onClick={()=>{setColor("lightseagreen")}}>Light Sea Green</button>
          <button className="outline-none px-4 py-2 rounded-2xl text-black " style={{backgroundColor:"ivory"}} onClick={()=>{setColor("ivory")}}>Ivory</button>
          </div>
        </div>

    </>
  )
}

export default App
