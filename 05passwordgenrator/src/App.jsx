import { useState , useCallback , useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, SetNA] = useState(false);
  const [characterAllowed, SetCA] = useState(false);

  const [password, setPassword]= useState("");
  //refhook
  const passwordRef = useRef(null);
  const passwordgenerator = useCallback(()=>{
    let pass ="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&*()";
    for(let i= 1; i<= length ; i++){
      let char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char);

    }
    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])

  const copypassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{passwordgenerator()},[length,numberAllowed,characterAllowed,passwordgenerator]);
  return (
    <>
      <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
          <div className = 'flex shadow rounded-lg overfloe-hidden mb-4'>
            <input
              type ="text"
              value={password}
              className='outline-none- w-full py-1 px-3'
              placeholder ="password"
              readOnly
              ref={passwordRef}
              />
              <button className ='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              onClick={copypassword}>
                copy
              </button>
          </div>
          <div className ='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range"
                min={6}
                max={100}
                value ={length}
                className='cursor-pointer'
                onChange = {(e)=>{setLength(e.target.value)}}
                 />
                 <label>Length : {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange ={()=>{SetNA((prev)=>!prev)}} />
              <label htmlFor='numberInput'> Characters</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange ={()=>{SetCA((prev)=>!prev)}} />
              <label htmlFor='characterInput'> Characters</label>
            </div>


          </div>
      </div>
    </>
  ) 
}

export default App
