import { Input } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const UseRefInput = () => {

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

  return (
    <div>
        <form action="">
            <Input type='text' placeholder='Nombre' ref={inputRef} /> 
            <Input type='password' placeholder='Contraseña' />

        </form>
    </div>
  )
}

export default UseRefInput