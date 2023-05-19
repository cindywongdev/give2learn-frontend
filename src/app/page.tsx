import Link from 'next/link';
import Image from 'next/image';
import image1 from './image/1.jpeg';
import image2 from './image/2.jpeg';
import Nav from './nav/Nav'
import Footer from './footer/Footer'

export default function Home() {
	return (
		<div className='container mx-auto'>
			<Nav/>
			<main>
				<div className='bg-gray-200 text-center mx-auto'>
					<h1 className='p-10 text-center mx-auto'>
						Did you know that over 41 million computers are
						discarded when they’re broken or outdated?
					</h1>
					<h3 className='text-center mx-auto'>
						Find a new home for your old devices by supporting
						students who need technology in their classrooms.
					</h3>
					<div className='p-10 text-center mx-auto'>
						<Link href='/donationflow'>
							<button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
								Donate a Device
							</button>
						</Link>
						<Link href='/requestflow'>
							<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
								Request a Device
							</button>
						</Link>
					</div>
				</div>

				<div>
					<h2 className='text-center mx-auto'>How this works</h2>
					<div>
						<Image
							src={image1}
							alt=''
							width='300'
							height='200'></Image>
						<h3>For Teachers</h3>
						<p>
							Submit a request for a device we have in our
							inventory. Within a day, we will review your request
							and begin the process for getting your requested
							devices to your classroom
						</p>
					</div>
					<div>
						<Image
							src={image2}
							alt=''
							width='300'
							height='200'></Image>
						<h3>For Donors</h3>
						<p>
							Simply fill out a simple form describing the device
							you’ll be sending to us. Check out our criteria for
							acceptable devices before you send your device in!
						</p>
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
}
