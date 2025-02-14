// @ts-nocheck
'use client';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from '../nav/Nav';

export default function Request() {
	const [submitted, setSubmitted] = useState('');

	const url = 'https://give2learn-backend.onrender.com/requests';
	const [data, setData] = useState({
		deviceType: '',
		brand: '',
		isPC: '',
		modelType: '',
		quantityToRequest: '',
	});

	async function handleChange(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(data);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await axios.post(url, data);
		setSubmitted(true);
	}

	return (
		<div>
			<Nav />
			<div className='pl-20 pr-20'>
				<p className='pl-0 p-10'>
					<Link href='/'>&lt; Back to homepage</Link>
				</p>
				<h1 className='pl-0 p-10 text-lg font-bold'>
					Device Request Form
				</h1>
				<div className=''>
					<form
						className='bg-blue-200 py-10 px-10'
						onSubmit={handleSubmit}
						method='post'
						action='POST'>
						<h3 className='font-bold mb-10'>Device Info</h3>
						<label htmlFor='deviceType' className='mb-3'>
							Type of Device
						</label>
						<div className=''>
							<select
								name='deviceType'
								id='deviceType'
								className='w-1/6'
								onChange={(e) => handleChange(e)}
								value={data.deviceType}>
								<option value='' selected></option>
								<option>Desktop</option>
								<option>Laptop</option>
								<option>Tablets</option>
							</select>
						</div>
						<div className=''>
							<h3 className='font-bold mt-10'>
								Please Provide Device Information
							</h3>

							<div className='grid gap-8'>
								<div className='flex flex-col'>
									<label htmlFor='isPC' className='mt-2'>
										PC or Mac?
									</label>
									<select
										className='w-1/6 mt-2 mb-5'
										onChange={(e) => handleChange(e)}
										value={data.isPC}
										title='isPC'
										id='isPC'
										required>
										<option value='' selected></option>
										<option value='true'>PC</option>
										<option value='false'>MAC</option>
									</select>
									<p>Brand</p>
									<div className='flex gap-8'>
										<select
											className='w-1/6 mt-2 mb-5'
											onChange={(e) => handleChange(e)}
											value={data.brand}
											title='brand'
											id='brand'>
											<option value='' selected></option>
											<option>HP</option>
										</select>
									</div>
									<p>Model</p>
									<div className='flex gap-8'>
										<select
											className='w-1/6 mt-2 mb-5'
											onChange={(e) => handleChange(e)}
											value={data.modelType}
											title='modelType'
											id='modelType'
											required>
											<option value='' selected></option>
											<option>HP Pavilion Plus</option>
											<option>HP Latitude 3000</option>
											<option>HP Latitude 5000</option>
											<option>HP Elitebook 645</option>
										</select>
									</div>
									<p>Quantity</p>
									<div className='flex gap-8'>
										<input
											className='bg-gray-200 w-1/6 mt-2 mb-5'
											onChange={(e) => handleChange(e)}
											value={data.quantityToRequest}
											title='quantityToRequest'
											id='quantityToRequest'
											min='0'
											max='99'
											type='number'
											placeholder='0'
											required></input>
									</div>
									<button
										title='button'
										type='submit'
										className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white text-md mt-10 py-2 px-7 rounded w-fit'>
										<Link href='/thankyou'>
											Submit
										</Link>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}