import React from 'react';
import Image from 'next/image';
import image3 from '../image/arrow.png';
function page() {
	return (
		<div>
			<h2>My Requests</h2>
			{/*  */}
			<div className=' padding: px justify-between flex bg-slate-100'>
				<h1>Request 1234</h1>
					<Image src={image3} alt=''width='40'></Image>
			</div>
			{/*  */}
			{/* 3 */}
			<div className='flex'>
				<h1 className='mr-8'>laptop</h1>
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
			{/*  */}
			<br></br>
			{/*  */}
			<div className='bg-slate-100'>
				Request 2

			</div>
			{/*  */}
			<button className='py-2 px-5 bg-blue-500 rounded-lg' type='button'>Request More</button>
		</div>
	);
}

export default page;