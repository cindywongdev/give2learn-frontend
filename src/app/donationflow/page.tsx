import Link from 'next/link';

export default function page() {

	const DonationForm = () => {
		const handleSubmit = (event) => {
			event.preventDefault();
		}
	}



	return (
		<div className='pl-20 pr-20'>
			<p className='pl-0 p-10'>
				<Link href='/'>&lt; Back to homepage</Link>
			</p>

			<h1 className='text-lg font-bold'>Device Donations</h1>
			<form className='bg-blue-200 py-8 px-8' action='#' method='post'>
				<div>
					<h3 className='font-bold text-xl'>Device donation form</h3>
					<p>1 of 3 steps</p>
					<label className='font-bold' htmlFor='personal information'>
						Personal information
					</label>
					<div className='flex gap-8'>
						<input
							className='bg-gray-100'
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
				</div>
				<label htmlFor='location'>
					<p className='font-bold'>Location</p>
					<p>where are you donating from?</p>
				</label>
				<div className='flex gap-8'>
					<input
						className='bg-gray-100'
						placeholder='State'
						type='text'
					/>
					<input
						className='bg-gray-100'
						placeholder='City'
						type='text'
					/>
					<input
						className='bg-gray-100'
						placeholder='Street Address'
						type='text'
					/>
				</div>
				<button
					title='button'
					type='submit'
					className='btn btn-primary py-5 px-1'>
					<Link
						className='bg-gray-400 hover:bg-gray-700 text-black text-xl py-1 px-4 rounded'
						href='#'>
						Next
					</Link>
				</button>
				************************************
				<div>
					<h3 className='font-bold text-xl'>Device donation form</h3>
					<p>2 of 3 steps</p>
					<label className='font-bold' htmlFor='personal information'>
						Device info
					</label>
					<p>what type of devices will you be donating?</p>
					<div className='flex gap-8'>
						<select
							title='first-dropdown'
							id='first-dropdown'
							onchange='updateSecondDropdown()'>
								
							<option value='option1'>Option 1</option>
							<option value='option2'>Option 2</option>
							<option value='option3'>Option 3</option>
						</select>
						
						<select title='second-dropdown' id='second-dropdown'>
							<option value='default'>Choose an option</option>
						</select>
					</div>
				</div>
				<button
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
				</button>
				************************************
				<div>
					<label className='font-bold' htmlFor='personal information'>
						Personal information
					</label>
					<p>3 of 3 steps</p>
					<div className='flex gap-8'>
						<input
							className='bg-gray-100'
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
				</div>
				<label htmlFor='location'>
					<p className='font-bold'>Location</p>
					<p>where are you donating from?</p>
				</label>
				<div className='flex gap-8'>
					<input
						className='bg-gray-100'
						placeholder='State'
						type='text'
					/>
					<input
						className='bg-gray-100'
						placeholder='City'
						type='text'
					/>
					<input
						className='bg-gray-100'
						placeholder='Street Address'
						type='text'
					/>
				</div>
				<button
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
				</button>
			</form>
		</div>
	);
}
