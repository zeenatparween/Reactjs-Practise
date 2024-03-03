import React from 'react'
import { useState } from 'react'
import "../index.css"
const BgChanger = () => {
    let [Color, setColor] = useState("olive")

    // const Background = (e) => {
    //     document.backgroundColor = setColor(e.target.value)
    // }

    return (
        <div className="w-full h-screen duration-200 "
            style={{ backgroundColor: Color }}
        >
            <div className='fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className="flex flex-wrap jusrify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">

                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "red" }}
                        onClick={() => setColor("red")}
                    >Red</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "green" }}
                    >Green</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "blue" }}
                    >Blue</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "olive" }}
                    >Olive</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "gray" }}
                    >Gray</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "yellow" }}
                    >Yellow</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "pink" }}
                    >Pink</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "purple" }}
                    >Purple</button>
                    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                        style={{ backgroundColor: "lavender" }}
                    >Lavender</button>
                    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                        style={{ backgroundColor: "white" }}
                    >White</button>
                    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
                        style={{ backgroundColor: "black" }}
                    >Black</button>
                </div>



            </div>
        </div>
    )
}

export default BgChanger
