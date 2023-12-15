import React from 'react'

export default function Footer() {
    return (
        <footer className='border-t p-8 text-center text-gray-500 mt-16'>
            &copy; {new Date().getFullYear()} Todos los derechos reservados
        </footer>
    )
}
