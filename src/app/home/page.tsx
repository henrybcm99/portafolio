import { Avatar } from '@nextui-org/react'
import React from 'react'

const Homepage = () => {
    return (
        <div className='flex justify-center mt-14'>
            <Avatar src="me.jpg" className="w-[10rem] h-[10rem] text-large mr-5" />
            <div className='flex justify-between flex-col'>
                <h1 className='text-4xl'>
                    Hi 👋, I'm Henry Cobas Maldonado
                </h1>
                <h1 className='text-lg w-2/3'>
                    Computer Science Engineer, at the University of Information Sciences (UCI) of Cuba
                </h1>
                <a className='w-[20%] h-8 bg-blue-500 flex items-center justify-center rounded-lg' href="CV. Henry Cobas Maldonado.pdf" download={true}>Dowload CV</a>
            </div>
        </div>
    )
  }

export default Homepage