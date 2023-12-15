import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
    return (
        <header className='flex items-center justify-between max-w-5xl mx-auto p-4'>
            <Link href="/" className='text-primary'>
                <Logo
                    width={70}
                    height={70}
                />
            </Link>
            <nav className='flex items-center gap-14 text-gray-500 font-semibold'>
                <div className='flex gap-6 '>
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/about">Sobre nosotros</Link>
                    <Link href="/contact">Contacto</Link>
                </div>
                <div className='flex items-center gap-6 font-semibold'>
                    <Link href="/register" className=''>Registrarse</Link>
                    <Link href="/login" className='bg-primary rounded-full text-white px-4 py-2'>Iniciar sesión</Link>
                </div>
            </nav>

        </header>
    )
}
