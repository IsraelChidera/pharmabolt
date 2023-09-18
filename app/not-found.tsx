import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='text-center'>
                <h2 className='text-primary text-3xl md:text-5xl font-extrabold'>Not Found</h2>
                <p className='md:text-base text-sm'>Could not find requested resource</p>
                <p className='md:text-base text-sm'>
                    <Link className='underline' href="/">Return Home</Link>
                </p>
            </div>
        </div>
    )
}