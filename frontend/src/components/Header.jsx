import React from 'react'
import Theme from './Theme'
function Header({title, showType, setShowType }) {
    return (

        <header className="flex justify-between items-center gap-x-4 p-4">
             <h1 className="text-3xl my-8">{title}</h1>
            <div className='flex items-center gap-x-4'>
            <button
                className="bg-sky-800 text-white hover:bg-sky-600 px-4 py-1 rounded-lg"
                onClick={() => setShowType('card')}
            >
                Card
            </button>
            <button
                className="bg-sky-800 text-white hover:bg-sky-600 px-4 py-1 rounded-lg"
                onClick={() => setShowType('table')}
            >
                Table
            </button>
            
            </div>
            <Theme className="flex items-center gap-x-4"/>
        </header>
    )
}

export default Header