import Image from "next/image"

export default function MenuItem() {
    return (
        <>
            <div className='bg-slate-100 p-4 rounded-lg text-center hover:shadow hover:bg-slate-200 transition duration-300'>
                <div className='flex justify-center'>
                    <Image
                        src={'/assets/pizza.png'}
                        width={190}
                        height={190}
                        alt='imagen pizza'
                    />
                </div>
                <h4 className='font-semibold text-xl my-2'>Pepperoni Pizza</h4>
                <p className='text-gray-500 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, tempore vero dicta placeat perspiciatis libero mollitia a quisquam laborum animi quas.
                </p>
                <button className='bg-primary mt-4 text-white rounded-full px-8 py-2'>Add to cart $12</button>
            </div>
        </>
    )
}
