import Link from 'next/link';
import Image from 'next/image';
import Contact from '../image/contact.jpeg';

export default function Nav(){
    return (
		<header>
			<div className='flex items-center justify-between flex-wrap p-12 w-screen'>
				<div className='title text-4xl'>Give2Learn</div>

				<div className='flex gap-12'>
					<Link href='/' className='mr-6'>
						Home
					</Link>
					<Link href='/about' className='mr-6'>
						About
					</Link>
					<Image 
                        src={Contact}
                        alt='profile pic' 
                        width='35'>
                    </Image>
				</div>
			</div>
		</header>
	);
}
