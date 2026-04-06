import React from 'react'
import { useRecoilValue } from 'recoil'
import counterAtom from '../couterAtom'

function ComponentA() {
    const valueRecoil=useRecoilValue(counterAtom)

  return (
    <div>
      <h1>{valueRecoil}</h1>
    </div>
  )
}

export default ComponentA
