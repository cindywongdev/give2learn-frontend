import Link from 'next/link';

export default function Nav(){
    return (
        <header>
                    <div className='flex items-center justify-between flex-wrap bg-white p-6'>
                        <div>Give2Learn</div>
                        <Link href='/' className='mr-6'>
                            Home
                        </Link>
                        <Link href='/for-donors' className='mr-6'>
                            For donors
                        </Link>
                        <Link href='/for-teachers' className='mr-6'>
                            For teachers
                        </Link>
                        <Link href='/profile' className='mr-6'>
                            For profile
                        </Link>
                    </div>
        </header>
    )
}
