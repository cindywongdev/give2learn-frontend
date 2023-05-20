import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='flex flex-col gap-4 items-center bg-gray-300 p-8 w-screen'>
				<Link href='/about'>Our Mission</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/faq'>FAQ</Link>
	    </footer>
    )
}

