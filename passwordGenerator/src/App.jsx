import { use, useCallback, useEffect, useRef, useState } from 'react'



function App() {
const [length , setLength] = useState(8);
const [numberAllowed , setNumber] = useState(false);
const [charAllowed, setChar] = useState(false);
const [password , setPassword] = useState("");
const passwordRef = useRef(null)
const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str+="1234567890";
   if(charAllowed)  str+="~!@#$%^&*(){}[]?/"
   console.log("length",length)
   for(let i = 0 ; i < length ; i++){
    let char = Math.floor(Math.random()*str.length+1);
    pass +=str.charAt(char);

   } 
   setPassword(pass);
} , [length, numberAllowed, charAllowed , setPassword])

const copyPasswordToClipBoard = useCallback(()=>{
  navigator.clipboard.writeText(password)
  passwordRef.current?.select()
}, [password])

useEffect(()=>{
  passwordGenerator();
},[length , numberAllowed, charAllowed , passwordGenerator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-400 '>
      <h1 className='text-white text-center mb-3 my-3'>PassWord Generator</h1>
      <div className='flex  rounded-xl overflow-hidden pb-8'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 rounded-xl'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-800 px-3 py-0.5 shrink-0 text-white'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 pb-3'>
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 pb-3'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{setNumber((prev)=>!prev)

          }}
          />
          <label > Number</label>
        </div>
        <div className='flex items-center gap-x-1 pb-3'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{setChar((prev)=> !prev)}}
          />
          <label htmlFor="charInput">Character</label>
        </div> 
      </div>
    </div>
   </>
  )
}

export default App
