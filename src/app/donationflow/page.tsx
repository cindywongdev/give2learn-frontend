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
			<form action='/send-data-here' method='post'>
				<label htmlFor='persional information'>
					<p className='font-bold'>Personal information</p>
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
				</label>
				<label htmlFor='location'>
					<p className='font-bold'>Location</p>
					<p>where are you donating from?</p>
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
				</label>
				<button title='button' type='submit' className='btn btn-primary'></button>
			</form>
		</div>
	);
}
