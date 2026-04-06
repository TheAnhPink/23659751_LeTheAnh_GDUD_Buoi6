import React from 'react'
import {useRecoilState} from 'recoil'
import counterAtom from '../couterAtom'
function ComponentB() {
    var[value,setValue]= useRecoilState(counterAtom)

    console.log(setValue)
    var reset=useRecoilState(counterAtom)
    console.log(reset)

    function handleInc(){
        setValue(value+1)
    }
    function handleDec(){
      setValue(value -1)
    }

  return (
    <div>
      <button onClick={handleInc}>Cong</button>
      <button onClick={handleDec}>Tru</button>
      <button onClick={()=>setValue(0)}>Reset</button>
    </div>
  )
}

export default ComponentB
