import React from 'react'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white text-[40px]'>
            Chat App
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
