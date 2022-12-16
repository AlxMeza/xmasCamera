import {Link} from 'wouter'

export default function Main () {

  return(
    <>
      <div className='w-11/12 h-10/12 mx-auto my-5 border-2 rounded-md bg-red-300 shadow-md shadow-emerald-100 grid grid-rows-3 gap-2'>
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
           <img src='/assets/cookie4.svg' alt='cookie' className='w-1/3 my-4' />
           <div className='flex items-center'>
            <h1 className='text-red-600 text-8xl font-semibold text-center px-4 py-3 bg-white rounded-md'>Xmas Camera</h1>
          </div>
           <img src='/assets/cookie3.svg' alt='cookie' className='w-1/3 my-4' />
        </div>
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
           <div className='p-4 text-white text-xl'></div>
           <div className='flex items-center'>
            <Link to='/frame1' className='bg-emerald-400 hover:bg-emerald-300 text-white py-2 px-10 hover:ring-2 hover:ring-white rounded-md text-2xl font-semibold'>Let`s Take a Picture</Link>
          </div>
           <div className='p-4 text-white text-xl'></div>
        </div>
        <div className='grid grid-cols-3 gap-4 justify-items-center'>
          <img src='/assets/tree1.svg' alt='cookie' className='w-1/3 my-4'/>
          <div className='p-4 text-white text-xl'></div>
          <img src='/assets/tree2.svg' alt='cookie' className='w-1/3 my-4'/>
        </div>
      </div>
    </>
  )
}