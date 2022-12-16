import {Link} from 'wouter'

export default function Main () {

  return(
    <>
      <div className='w-1/6 realative z-index-2'>
        <img src='/assets/tree1.svg' alt='tree' className='absolute w-1/6 inset-x-32 bottom-20' />
      </div>
      <div className='w-1/6 realative z-index-2'>
        <img src='/assets/tree2.svg' alt='tree' className='absolute w-1/6 bottom-20 right-32' />
      </div>
      <div className='w-11/12 mx-auto my-10 py-10 border-2 rounded-lg bg-red-300 shadow-md shadow-emerald-100 grid grid-rows-2 gap-2 z-index-1'>
        <div className='grid grid-cols-3 gap-4 justify-items-center mt-10'>
           <img src='/assets/cookie4.svg' alt='cookie' className='w-1/3 my-4' />
           <div className='flex items-center'>
            <h1 className='text-red-600 text-center xmas-title'>Xmas~Cam</h1>
          </div>
           <img src='/assets/cookie3.svg' alt='cookie' className='w-1/3 my-4' />
        </div>
        <div className='grid grid-cols-2 justify-items-stretch gap-20'>
           <div className='p-4 text-white text-xl justify-self-end'>
              <aside className='rounded-lg bg-white w-[20rem] h-[20rem] shadow shadow-lg shadow-red-400 hover:-rotate-45 ease-out duration-300'>
                <Link to='/frame1'><img src='/assets/frame1.svg' alt='frame1'/></Link>
              </aside>
           </div>
           <div className='p-4 text-white text-xl'>
              <aside className='rounded-lg bg-white w-[20rem] h-[20rem] shadow shadow-lg shadow-red-400 hover:rotate-45 ease-out duration-300'>
                <Link to='/frame2'> <img src='/assets/frame2.svg' alt='frame2'/></Link>
              </aside>
           </div>
        </div>
      </div>
    </>
  )
}