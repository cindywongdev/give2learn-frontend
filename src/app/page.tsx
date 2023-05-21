import Link from 'next/link';
import Image from 'next/image';
import image1 from './image/1.jpeg';
import image2 from './image/2.jpeg';
import Nav from './nav/Nav.tsx';
import Footer from './footer/Footer.tsx'

export default function Home() {
	return (
		<body className='container w-screen h-full'>
			<Nav/>
			<main className='border-2 w-screen h-full'>
				<div className='flex flex-col gap-8 bg-gray-200 text-center h-[30rem] w-screen p-16'>
					<h1 className='text-2xl text-center mx-auto max-w-6xl font-bold'>
						Did you know that 1 in 4 lower-income students don’t have access to a home computer?
					</h1>
					<h3 className='text-md max-w-3xl text-center mx-auto'>
						Find a new home for your old devices by supporting
						students who need technology in their classrooms.
					</h3>
					<div className='flex w-full max-w-3xl justify-between text-center mx-auto'>
						<Link href='/donationflow'>
							<button type='button' className=' bg-blue-500 hover:bg-blue-700 text-white text-sm py-4 px-8 rounded'>
								Donate a Device
							</button>
						</Link>
						<Link href='/requestflow'>
							<button type='button' className='bg-blue-500 hover:bg-blue-700 text-white text-sm py-4 px-8 rounded'>
								Request a Device
							</button>
						</Link>
					</div>
				</div>

				<div className='p-12 max-w-5xl mx-auto flex flex-col gap-12 mb-4'>
					<h2 className='text-center text-2xl font-bold mx-auto'>How this works</h2>
					<div className='flex gap-4 max-h-44'>
							<Image
								src={image1}
								alt=''
								width='300'
								>
							</Image>
						<div className='flex flex-col justify-between'>
							<h3 className='text-xl font-bold'>For Teachers</h3>
							<p className='text-xl'>
								Submit a request for a device we have in our
								inventory. Within a day, we will review your request
								and begin the process for getting your requested
								devices to your classroom.
							</p>
						</div>
					</div>
					<div className='flex gap-4 max-h-44'>
						<Image
							src={image2}
							alt=''
							width='300'
							></Image>
						<div className='flex flex-col justify-between'>
							<h3 className='text-xl font-bold'>For Donors</h3>
							<p className='text-xl'>
							Simply fill out a simple form describing the device
							you’ll be sending to us. Check out our criteria for
							acceptable devices before you send your device in!
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</body>
	);
}
