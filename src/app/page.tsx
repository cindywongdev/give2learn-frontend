'use client'
import Link from 'next/link';
import Image from 'next/image';
import image1 from './image/1.jpeg';
import image2 from './image/2.jpeg';
import Nav from './nav/Nav.tsx';
import Footer from './footer/Footer.tsx'
import LandingImg from './image/UI-icons/landing_img.png'

export default function Home() {
	const landingImgStyle = {
		opacity: 0.35,
		zIndex: -1
	}

	return (
		<body className='container w-screen h-full'>
			{/* yellow bar */}
			<div className='h-8 bg-g2l-bright-yellow w-full z-10'></div>

			<Nav />

			<main className='w-screen h-full'>
				<div className='relative flex flex-col justify-center gap-8 text-center h-[35rem] w-screen'>
					<Image
						src={LandingImg}
						alt='image of young girl using laptop'
						fill={true}
						objectFit='cover'
						style={landingImgStyle}
					/>

					<h1 className='text-2xl text-center mx-auto max-w-5xl font-bold'>
						More than 1 out of 10 students do not have the technology needed to complete schoolwork
					</h1>
					<h3 className='text-md max-w-2xl text-center mx-auto'>
						Make a difference by providing your unwanted computer or tablet to students in need.
					</h3>
					<div className='flex w-full max-w-md justify-between text-center mx-auto'>
						<Link href='/donationflow'>
							<button type='button' className=' bg-g2l-bright-yellow hover:bg-g2l-mid-yellow text-sm font-bold py-3 px-6 rounded-lg'>
								Donate a Device
							</button>
						</Link>
						<Link href='/requestflow'>
							<button type='button' className=' bg-g2l-bright-yellow hover:bg-g2l-mid-yellow text-sm font-bold py-3 px-6 rounded-lg'>
								Apply for a Device
							</button>
						</Link>
					</div>
				</div>

				<div className='flex flex-col items-center gap-8 p-20 max-w-[68rem] mx-auto'>
					<div className='flex flex-col items-center'>
						<h2 className='text-center text-xl font-bold mx-auto mb-8'>Our Mission</h2>
						<p className='text-md text-center mb-16'>
							Founded in 2005, Give2Learn is a non-profit organization dedicated to help meet the growing demand for technology in classrooms. We believe all students deserve access to technology in order to participate on an even level playing field, yet some students are falling behind due to the lack of tech resources. Your generous computer and tablet donations assists us to give students the devices needed to complete schoolwork and to continue to learn. We invite anyone with a computer or tablet they no longer need to donate today!
						</p>
						<button className='py-2 px-6 border-g2l-blue border-2 w-fit rounded-lg text-g2l-blue text-sm hover:bg-g2l-blue hover:text-white'>
							Learn more about the schools you support
						</button>
					</div>

					{/* gray divider line */}
					<div className='w-2/3 bg-[#D7D6D3] h-[0.1rem] opacity-80 mb-8'></div>

					<div className='flex flex-col gap-12 mb-4'>
						<h2 className='text-center text-2xl font-bold mx-auto'>How this works</h2>
						<div className='flex gap-4 max-h-44'>
							<Image
								src={image1}
								alt=''
								width='300'
							>
							</Image>
							<div className='flex flex-col justify-between'>
								<h3 className='text-md font-bold'>For Teachers</h3>
								<p className='text-sm'>
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
								<h3 className='text-md font-bold'>For Donors</h3>
								<p className='text-sm'>
									Simply fill out a simple form describing the device
									you’ll be sending to us. Check out our criteria for
									acceptable devices before you send your device in!
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</body>
	);
}
