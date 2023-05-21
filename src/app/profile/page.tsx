'use client'
import React from 'react';
import Image from 'next/image';
import image1 from '../image/UI-icons/fill-in-2.png';
import image2 from '../image/UI-icons/trash.png';
import image3 from '../image/UI-icons/Laptop mac.png';
import image4 from '../image/UI-icons/plus.png';
import image7 from '../image/UI-icons/Vector-5.png';
import image5 from '../image/dl.png';
import image6 from '../image/edit.png';
import Link from 'next/link';
import Nav from '../nav/Nav.tsx';
function page() {
	return (

<div className='p-5 bg-g2l-bright-yellow'>
	<div>
		<Nav/>
	</div>
		<div className='mb-5' ><Link href='/'>&lt; Back to homepage</Link></div>
			<h2 className='mb-5 text-2xl/20 font-black text-xl'>My Application</h2>
  				<div className='bg-blue-200 p-10'> {/* top container div */}
				  				<div className='justify-end flex'>
									<Image className='mb-10 mr-2' src={image6} alt=''width='20'></Image>
									<Image className='mb-10 ml-2' src={image5} alt=''width='20'></Image>
								</div>
						
						<div className='flex space-beween w-300' >
						<ul className='flex '>
											<li className='w-20 '>Application under review</li>
											<li>Approved &nbsp; &nbsp;</li>
											<li>Out for shipping &nbsp; &nbsp;</li>
											<li>Delivered</li>
									</ul>
							<div className='progressbar flex items-center w-80 h-1 mr-80 mb-5 mt-5 justify-between bg-gray-200 rounded-full z-0'>
									<div className='bg-blue-800 text-white progressbar-step flex w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									1   
									</div>
									<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									2
									</div>
									<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									3
									</div>
									<div className='progressbar-step flex bg-gray-200 progressbar-step w-8 h-8 rounded-full counter-reset counter-step items-center justify-center'>
									4
									</div>
							</div>
							
				</div>
				

				
						<br></br><br></br><br></br>
				{/*  */}
				<div className='justify-between flex'>
								<div className='justify-between flex'>
									<div>
									<Image className='mr-8' src={image3} alt=''width='90'></Image>
									</div>
									<ul>
										<li>#0784329</li>
										<li>Laptop</li>
										<li>Dell, Dell Latitude 5000</li>
									</ul>
								</div>
								{/*  */}
								<div>
									<h1>Application under review</h1>
								</div>
								{/*  */}
							  <ul>
										<li>Date: 05/22/23</li>
										<li>Quantity:6</li>
								</ul>
						</div>
				
						{/* arrowdown */}
									<div classname='justify-center'>
									<Image className='mr-8' src={image7} alt=''width='30'></Image>
									</div>
						{/* arrowdown */}		
				<div className='flex justify-between'>
				<div className='flex'>
					
				</div>
				<div> 
					
				</div>

				</div>
			</div>
		{/*  */}
		<br></br>
		{/*  */}
		<h1>hello</h1>
<div className='p-5 bg-blue-200' >
								<div className='justify-end flex'>
									<Image className='mb-10 mr-2' src={image6} alt=''width='20'></Image>
									<Image className='mb-10 ml-2' src={image5} alt=''width='20'></Image>
								</div>
<div className='justify-between flex'>
								<div className='justify-between flex'>
								
									<div>
									<Image className='mr-8' src={image3} alt=''width='90'></Image>
									</div>
									<ul>
										<li>#0784329</li>
										<li>Laptop</li>
										<li>Dell, Dell Latitude 5000</li>
									</ul>
								</div>
								{/*  */}
								<div>
									<h1>Application under review</h1>
								</div>
								{/*  */}
							  <ul>
										<li>Date: 05/22/23</li>
										<li>Quantity:6</li>
								</ul>
						</div>
						{/* arrowdown */}
									<div classname='justify-center'>
									<Image className='mr-8' src={image7} alt=''width='30'></Image>
									</div>
						{/* arrowdown */}		
						

</div>
		{/*  */}
		
		<div className='flex justify-center'>
		<button className=" mt-10 flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
      		<span className="mr-2">New Application</span>
      			+
    	</button>
	
		</div>
	</div>

		
	);
}

export default page;