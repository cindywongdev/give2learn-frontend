import Link from 'next/link'

export default function page() {
	return (
		<div className='pl-20 pr-20'>
			<p className='pl-0 p-10'>
				<Link href='/'>&lt; Back to homepage</Link>
			</p>
			<h1 className='pl-0 p-10 text-lg font-bold'>Device Request from</h1>
			<h3 className='font-bold'>Device info</h3>
			<p className=''>what type of device do you need?</p>
			<div className='pl-0 pt-10'>
				<button className='pl-0 p-10'>Desktop</button>
				<button className='pl-0 p-10'>Laptop</button>
				<button className='pl-0 p-10'>Tablets</button>
			</div>
		</div>
	);
}