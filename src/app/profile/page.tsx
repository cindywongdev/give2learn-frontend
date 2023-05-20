import React from 'react';
import Image from 'next/image';
import image3 from '../image/arrow.png';
import image4 from '../image/arrowup.png';
import image5 from '../image/progress.png';
import image6 from '../image/plus.png';
function page() {
	return (
		<div className='p-5'>
			<h2 className='mb-5 text-2xl/20 font-black text-xl'>My Requests</h2>
			{/*  */}
				<div className='bg-blue-200 p-10'>
					<div className=' padding: px justify-between flex'>
						<h1 className='font-bold mb-10'>Request 1234</h1>
							<div >
							<Image className='mb-10' src={image4} alt=''width='50'></Image>
							</div>
					</div>
									<div className='mb-7 justify-between flex'>
											<div>
											<div><Image className='mb-10' src={image5} alt=''width='800'></Image></div>
											<ul className='flex justify-between'>
												<li className='w-20 '>Application under review</li>
												<li>Approved</li>
												<li>Out for shipping</li>
												<li>Delivered</li>
											</ul>
											</div>
											<div>
												<ul>
												<li>Expectation date</li>
												<li>N/A</li>
												</ul>
											</div>
									</div>

					{/*  */}
					{/* 3 */}
					<div className='flex justify-between'>
					<div className='flex'>
						<h1 className=
						'px-5 py-8 py-4 bg-white mr-8 font-medium'
						>laptop</h1>
						<ul>
							<li>model</li>
							<li>dimensions</li>
							<li>quantity</li>
						</ul>
					</div>
					<div> 
						<p>7 days editing deadline disclamer</p>
					<button className='  mt-7 py-2 px-5 bg-blue-500 rounded-lg mr-3 ' type='button'>Edit</button>
					<button className='  mt-7 py-2 px-5 bg-blue-500 rounded-lg' type='button'>Cancel Request</button>
					</div>

					</div>
				</div>
			{/*  */}
			<br></br>
			{/*  */}
			<div className='bg-blue-200 p-10'>
					<div className=' padding: px justify-between flex'>
						<h1 className='font-bold mb-10'>Request 1234</h1>
							<Image className='mb-10' src={image3} alt=''width='30'></Image>
					</div>
					{/*  */}
					{/* 3 */}
					<div className='flex justify-between'>
					<div className='flex'>
						<h1 className=
						'px-5 py-8 py-4 bg-white mr-8 font-medium'
						>laptop</h1>
						<ul>
							<li>model</li>
							<li>dimensions</li>
							<li>quantity</li>
						</ul>
					</div>
					{/*  */}
						<h1>Processing</h1>
					{/*  */}
							<ul>
								<li>Expiration date</li>
								<li>oo/00/0000</li>
								<li>60 Days</li>
							</ul>
					</div>
				</div>
			{/*  */}
			
			<div className='flex justify-center'>
			<button className='  mt-7 py-2 px-5 bg-blue-500 rounded-lg' type='button'>Request More</button>
			</div>
		</div>
		
	);
}

export default page;