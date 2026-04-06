import React from 'react'
import {useRecoilState, useResetRecoilValue} from 'recoil'
function ComponentB() {
    var[value,setValue]= useRecoilState(counterAtom)

    console.log(setValue)
    var reset=useRecoilState(counterAtom)
    console.log(reset)

    function handleInc(){
        
    }

  return (
    <div>
      
    </div>
  )
}

export default ComponentB
