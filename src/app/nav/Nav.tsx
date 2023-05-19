import Link from 'next/link';

export default function Nav(){
    return (
        <header>
                    <div className='flex items-center justify-between flex-wrap p-12 w-screen'>
                        <div className="title text-4xl">Give2Learn</div>

                        <div className='flex gap-12'>
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
                                Profile
                            </Link>
                        </div>
                    </div>
        </header>
    )
}
