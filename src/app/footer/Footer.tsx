import Link from 'next/link'

export default function Footer(){
    return (
        <footer className='flex items-center justify-between flex-wrap bg-gray-500 p-6'>
				<Link href='/about'>About</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/faq'>FAQ</Link>
	    </footer>
    )
}