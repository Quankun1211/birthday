import { Canvas } from "@react-three/fiber"
import Cylinder3d from "./Cylinder3d"
import kitty from './assets/kitty.png'
import bg from './assets/bg.png'
import cake1 from './assets/cake1.png'
import content1 from './assets/content1.jpg'
import firework from './assets/firework.png'
import content2 from './assets/content2.png'
import idol1 from './assets/idol1.png'
import idol2 from './assets/idol2.png'
import u1 from './assets/u1.png'
import u2 from './assets/u2.png'
import u3 from './assets/u3.png'
import u4 from './assets/u4.png'
import u5 from './assets/u5.png'
import bgFlower from './assets/bgFlower.png'
import song from './audio/song.mp3'
import { useEffect, useRef, useState } from "react"

function App() {
  const [theme, setTheme] = useState('bg-color')
  const [cloud, setClould] = useState('bg-cloud')
  const [drop, setDrop] = useState('drop-light')
  const [hidden, setHidden] = useState('hidden-cf')
  const [mute, setMute] = useState('block')
  const [volume, setVolume] = useState('hidden')
  const [dance, setDance] = useState('')

  const audio = useRef()

  const handleTheme = () => {
    setClould(cloud === "bg-cloud" ? "bg-cloud-2" : "bg-cloud")
    setDrop(drop === 'drop-light' ? "drop-dark" : "drop-light")
    setTheme(theme === 'bg-color' ? 'bg-color-2' : 'bg-color')
    setHidden(theme === 'bg-color' ? 'strand' : 'hidden-cf')
  }
  const handleMute = () => {
    setMute(mute === 'block' ? 'hidden' : 'block')
    setVolume(volume === 'hidden' ? 'block' : 'hidden')
    mute === 'block' ? audio.current.play() : audio.current.pause()
    setDance(mute === 'block' ? 'dance' : '')
  }
  const [width, setWidth] = useState(40)
  const [width1, setWidth1] = useState(40)
  const noRef = useRef()
  let i = 0
  const handleSetWidth = () => {
    if(width1 < 80) {
      setWidth1(width1 + 10)
      setWidth(width - 10)
    } else if(width1 >= 80) {
      noRef.current.classList.add('hidden')
    }
  }


  return (
      <div className="h-screen bg-img bg-pink-200 flex items-center justify-center">
      <div className={`bg-gradient ${theme} w-10/12 h-5/6 rounded-xl parent`}>
        <img src={bg} className="ballon-2"/>
        <div className="group-cloud">
        
        <div className={`cloud1 ${cloud}`}></div>
        <div className={`cloud2 ${cloud}`}></div>
        <div className={`child ${cloud} opacity-95 flex flex-col`}>
          <h1 className="text-4xl font-extrabold text-gray-700">HAPPY</h1>
          <h1 className="text-4xl font-extrabold text-black ">BIRTHDAY</h1>
          <h1 className="text-4xl font-extrabold text-black ">TO YOU</h1>
          <div className="gr-btn my-6 w-8/12">
            <label className="h-full text-xl btn btn-error mx-2" style={{width: `${width1}%`}} htmlFor="my_modal_6">
              Nhận lời chúc
            </label>
            <button ref={noRef} onClick={handleSetWidth} className="h-full text-xl btn btn-error mx-2" style={{width: `${width}%`}}>Không nhận</button>
          </div>
        </div>
        </div>
        <div className={`child4 ${cloud}`}></div>
        <div className={`child2 ${cloud}`}></div>
        <div className={`child1 ${cloud}`}></div>
        <img src={bg} className="ballon-1"/>
        <div className="m-5 flex absolute">
          <label className="swap swap-rotate">
              <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />
              <svg className="fill-black swap-off w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              <svg className=" swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          </label>
          <button className="w-10 h-10 ml-5" onClick={handleMute}>
            <svg className={`w-full h-full ${mute}`} fill="#a5adbb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
            <svg className={`w-full h-full ${volume}`} fill="#a5adbb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>
          </button>
        </div>
        <ul className={`${hidden}`}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <img src={firework} className="absolute firework" alt="" />  
      <div className="main-day right-60 top-40 absolute text-red-700 drop-shadow-2xl text-5xl font-extrabold">12 : 06 : 2024</div>
      <img src={cake1} className="absolute w-60 bottom-32 cake" alt="" />
      <img src={u1} className={`absolute w-60 bottom-32 u1 ${dance}`} alt="" />
      <img src={u2} className={`absolute w-60 bottom-32 u2 ${dance}`} alt="" />
      <img src={u3} className={`absolute w-60 bottom-32 u3 ${dance}`} alt="" />
      <img src={u4} className={`absolute w-60 bottom-32 u4 ${dance}`} alt="" />
      <img src={u5} className={`absolute w-60 bottom-32 u5 ${dance}`} alt="" />
      <img src={content2} className={`absolute w-60 bottom-32 ${drop} content-2`} alt="" />
        <div className="child3 ml-8">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={kitty} alt="" />
              </div>
              <div className="flip-box-back">
                <img src={content1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <audio ref={audio} src={song}></audio>

        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal w-full " role="dialog">
          <div className="flex items-center justify-center">
            <div className="w-10/12 rounded-lg bg-slate-900 p-10 overflow-hidden relative">
              <h1 className="text-center text-3xl font-mono font-extrabold">HAPPY BIRTHDAY TO YOU</h1>
              <h1 className="text-center text-3xl font-mono font-extrabold">CÁI GÌ CŨNG CHÚC !!</h1>
              <div className="idol mb-20 flex justify-around relative">
                <img src={idol1} className="idol-cf mx-2" alt="" />
                <img src={idol2} className="idol-cf mx-2" alt="" />
                <div className="chat chat-start absolute chat-cf">
                  <div className="chat-bubble chat-bubble-primary  font-mono font-semibold text-2xl">Say hjjj</div>
                </div>
              </div>

              <img src={bgFlower} className="absolute w-full top-0 left-0" alt="" />
              <label htmlFor="my_modal_6" className="btn absolute bottom-3 left-2/4 btn-primary">Close!</label>
            </div>

          </div>
        </div>
    </div>
  )
}

export default App