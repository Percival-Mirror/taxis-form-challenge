import React from 'react'
import { NavLink } from 'react-router-dom'

export const SideBar = () => {

    return (
        <aside className=' h-fit md:h-full bg-blue-700 w-full  md:w-96 py-5' >
            <div className=' flex flex-col items-center justify-between h-full gap-6'>

                <div className='flex items-center gap-3'>
                    <div className=' w-12 h-12 rounded-full bg-gray-400'>
                        <img
                            src='data:image/png;base64,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'
                            className=' object-cover object-center w-full h-full rounded-full'></img>
                    </div>

                    <div>
                        <p className=' text-white font-black'>Andrés Espejo</p>
                        <p className=' text-white'>@andresespejo28</p>
                    </div>
                </div>

                <div className=' flex flex-col items-center gap-10'>
                    <NavLink to='/'>
                        <div className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                            <p className=' text-white'>Inicio</p>
                        </div>
                    </NavLink>
                    <NavLink>
                        <div className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>

                            <p className=' text-white'>Productos</p>
                        </div>
                    </NavLink>
                    <NavLink to='/taxis'>
                        <div className=' flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6">
                                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>

                            <p className=' text-white'>Choféres</p>
                        </div>
                    </NavLink>
                </div>


                <button className=' flex gap-3 bg-white py-5 px-3 rounded-3xl text-blue-800'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                    Cerrar Sesión
                </button>
            </div>

        </aside>
    )
}
