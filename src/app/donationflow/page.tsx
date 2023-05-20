'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {

	const [submitted, setSubmitted] = useState(false);
	
	function handleSubmit(event) {
		event.preventDefault();
		setSubmitted(true);
	}


	return (
		<div className='pl-20 pr-20'>
			<p className='pl-0 p-10'>
				<Link href='/'>&lt; Back to homepage</Link>
			</p>
			{/* <h1 className='text-lg font-bold'>Device Donations</h1> */}
			{/* <div className='progressbar flex items-center w-80 h-1 mr-80 mb-5 mt-5 justify-between bg-gray-200 rounded-full z-0'>
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
			</div> */}
			<form
				className='bg-blue-200 py-10 px-10'
				action='#'
				onSubmit={handleSubmit}
				method='post'>
				<div className='visible'>
					<h3 className='mb-12 font-bold text-xl'>
						Device donation form
					</h3>
					{/* <p>1 of 3 steps</p> */}
					<label className='font-bold' htmlFor='personal information'>
						Personal information
					</label>
					<div className='flex gap-8'>
						<input
							className='{isVisible ? "visible" "hidden"} bg-gray-100'
							type='text'
							id='fullname'
							name='fullname'
							placeholder='Fullname'
							required
						/>
						<input
							className='bg-gray-100'
							type='text'
							id='email'
							name='email'
							placeholder='Email'
							required
						/>
						<input
							className='bg-gray-100'
							type='text'
							id='phone'
							name='phone'
							placeholder='Phone'
							required
						/>
					</div>
					<div className='grid mt-10'>
						<p className='font-bold'>Location</p>
						<p>where are you donating from?</p>
						<div className='gap-8'>
							<div className='gap-8'>
								<select title='State' id='State'>
									<option value='option1'>Washington</option>
									<option value='option2'>California</option>
									<option value='option3'>New York</option>
									<option value='option4'>
										Massachusetts
									</option>
									<option value='option5'>Florida</option>
									<option value='option6'>Texas</option>
									<option value='option7'>Arizona</option>
									<option value='option8'>Utah</option>
									<option value='option9'>Colorado</option>
									<option value='option10'>Montana</option>
								</select>
							</div>
							<div className='gap-8'>
								<select title='city' id='city'>
									<option value='default'>Los Angeles</option>
									<option value='option1'>New York</option>
									<option value='option2'>Phoenix</option>
									<option value='option3'>Austin</option>
									<option value='option4'>Columbus</option>
									<option value='option5'>Aurora</option>
									<option value='option6'>
										District of Columbia
									</option>
									<option value='option7'>Boston</option>
									<option value='option8'>
										Salt Lake City
									</option>
									<option value='option9'>Seattle</option>
									<option value='option10'>Billings</option>
								</select>
							</div>
						</div>
					</div>
					<div className='grid mt-10'>
						<label htmlFor='location'>
							<label className='font-bold' htmlFor='device info'>
								Device info
							</label>
							<p>what type of devices will you be donating?</p>
						</label>
						<div className='flex gap-8'>
							<label htmlFor='Desktop'>Desktop</label>
							<input
								className='bg-gray-100'
								placeholder='Desktop'
								type='checkbox'
							/>
							<label htmlFor='Laptop'>Laptop</label>
							<input
								className='bg-gray-100'
								placeholder='Laptop'
								type='checkbox'
							/>
							<label htmlFor='Tablet'>Tablet</label>
							<input
								className='bg-gray-100'
								placeholder='Tablet'
								type='checkbox'
							/>
						</div>
					</div>

					{/* <button
						title='button'
						type='submit'
						className='btn btn-primary py-5 px-1'>
						<Link
							className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
							href='#'>
							Next
						</Link>
					</button> */}
				</div>
				<div className='visible'>
					{/* <p>2 of 3 steps</p> */}
					{/* <button
						title='button'
						type='submit'
						className='btn btn-primary py-5 px-1'>
						<Link
							className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
							href='#'>
							Previous
						</Link>
					</button>
					<button
						title='button'
						type='submit'
						className='btn btn-primary py-5 px-1'>
						<Link
							className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
							href='#'>
							Next
						</Link>
					</button> */}
				</div>
				<div className='grid mt-10 visible'>
					<label className='font-bold' htmlFor='Device info'>
						PC or MAC
					</label>
					{/* <p>3 of 3 steps</p> */}
					<div className='gap-8'>
						<label className='mr-2' htmlFor='Device info'>
							PC or MAC
						</label>
						<select
							className='mr-7'
							name='PcOrMac'
							id='Device info'>
							<option value='Pc'>PC</option>
							<option value='Mac'>Mac</option>
						</select>
						<label className='mr-2' htmlFor='ModelType'>
							Model Type
						</label>
						<select
							className='mr-7'
							name='ModelType'
							id='ModelType'>
							<option value='Dell'>Dell latitude 3000</option>
							<option value='Dell'>Dell latitude 5000</option>
							<option value='Dell'>Dell latitude 7000</option>
							<option value='Dell'>Dell xps 13</option>
							<option value='Dell'>Dell xps 17</option>
							<option value='Dell'>Dell xps 14</option>
						</select>
						<label
							className='mr-2'
							htmlFor='Quantity'
							placeholder='Quantity'>
							Quantity
						</label>
						<input type='text' placeholder='1' required />
					</div>
					<div className='flex gap-8'>
						{/* <button
							title='button'
							type='submit'
							className='btn btn-primary py-5 px-1'>
							<Link
								className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
								href='#'>
								Previous
							</Link>
						</button>
						<button
							title='button'
							type='submit'
							className='btn btn-primary py-5 px-1'>
							<Link
								className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
								href='#'>
								Next
							</Link>
						</button> */}
						<div className='grid mt-10'>
							<label className='font-bold'>
								Donation Send Off
							</label>
							<p>
								do you wish to drop the tech or have it picked
								up
							</p>
							<label className='#' htmlFor='Drop'>
								Drop
							</label>
							<input
								className='bg-gray-100'
								placeholder='Drop'
								type='checkbox'
							/>
							<label className='#' htmlFor='Picked-up'>
								Picked-up
							</label>
							<input
								className='bg-gray-100'
								placeholder='picked-up'
								type='checkbox'
							/>
						</div>
						<div className='grid mt-10'>
							<label className='font-bold' htmlFor='date'>
								date
							</label>
							<label htmlFor='start'>
								Select your date for pick up:
							</label>
							<input type='date' id='start' name='start_date' />
						</div>
					</div>
				</div>
				<div>
					<button
						title='button'
						type='submit'
						className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white text-xl py-2 px-7 rounded'>
						Submit
					</button>
				</div>
			</form>
			{submitted && (
				<p>
					Thank you for your Donation! <br />
					<br /> You will receive a confirmation email with a link to
					print your UPS label.
					You will also be sent a tax receipt once we have received
					your device.
				</p>
			)}
		</div>
	);
}
