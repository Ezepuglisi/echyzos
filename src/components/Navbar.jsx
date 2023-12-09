'use client'
import React, { useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react'
import Link from 'next/link';
import Logo from '@/svg/Logo';



const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)


    useEffect(() => {

        window.addEventListener('resize', () => {
            setOpenModal(false)
        })
    })

    return (
        <>
            <div className={`${openModal ? 'flex' : 'hidden'} flex-col text-white absolute z-10 bg-[#0F0F0F] h-screen w-9/12 transition-all ease-out duration-300`}>
                <div className='py-5 px-10 border-b flex items-end justify-end' onClick={() => { setOpenModal(false) }}>
                    <IoMdClose size={25} />
                </div>
                <ul className='flex flex-col'>
                    <li className='py-5 border-b text-center'><Link href={'/'}>Home</Link></li>
                    <li className='py-5 border-b text-center'><Link href={'/productos'}>Productos</Link></li>
                    <li className='py-5 border-b text-center'><Link href={'/contacto'}>Contacto</Link></li>
                    <li className='py-5 border-b text-center flex items-center justify-center'><Link href={'/pedido'}><FaShoppingCart /></Link></li>
                </ul>
            </div>
            <div className="text-white flex py-3 bg-[#0F0F0F] px-10 items-center justify-between shadow-md">
                <IoMenuSharp size={25} className='lg:hidden' onClick={() => { setOpenModal(true) }} />
                {/* <p className='text-xl'>Echyzos</p> */}
                <Logo />
                <div className='hidden lg:flex lg:flex-col lg:items-end lg:gap-2'>
                    <div className='registro-login flex items-center'>
                        <p className='border-r border-white px-2'>iniciar sesión</p>
                        <p className="ml-2">registrarse</p>
                    </div>
                    <div className='menu'>
                        <ul className='flex items-center gap-5'>

                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/productos'}>Productos</Link></li>
                            <li><Link href={'/contacto'}>Contacto</Link></li>
                            <li><Link href={'/pedido'}><FaShoppingCart /></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar