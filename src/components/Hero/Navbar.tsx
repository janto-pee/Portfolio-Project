import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { navbar } from '../../data/data'
import { HashLink as Link } from 'react-router-hash-link'
import { useState } from 'react'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const handleNav = () => {
    setOpenNav(!openNav)
  }
  return (
    <nav className='w-full bg-neutral-900 text-white'>
      <div className='w-full p-6 lg:px-8 xl:px-16'>
        <div className='flex items-center justify-between gap-2'>
          {/* left col */}
          <Link to='/' className='flex items-center gap-2'>
          <img src="/Image-7.png" alt="logo" className='w-8 lg:w-12 rounded-full border border-neutral-500' />
          <span>Janto Pee 🔥</span>
          </Link>
          {/* right col */}
          <div className='flex gap-8 items-center text-neutral-500'>
            <div className='hidden xl:flex gap-4 2xl:gap-8 items-center'>
              {
                navbar.map((item, index) => (
                  <Link key={index} smooth to={item.href} className='cursor-pointer capitalize hover:text-neutral-100 transition-all delay-300 ease-in-out'>{item.name}</Link>
                ))
              }
            </div>
            <a href="/src/assets/CV/front-end-developer.pdf" download className='rounded-md lg:rounded-full bg-[#1D2024] p-2 button-box-shadow'>
            <ArrowDownTrayIcon className='w-4 text-secondary-500' />
            </a>
            <Link to={'#contact'} smooth className='hidden xl:flex px-8 py-4 rounded-md text-secondary-500 button-box-shadow bg-[#1D2024]'>✍️ CONTACT</Link>
            <button onClick={handleNav} className='xl:hidden'>
              <Bars3Icon  className='w-6 h-6 text-secondary-500' />
            </button>
          </div>
          

          {/* mobile menu */}
          <div className={`absolute right-0 top-0 bg-neutral-900 text-neutral-50 p-4 min-h-screen w-2/3 ${openNav? 'flex z-50': 'hidden'}`}>
          <div>
            <button onClick={handleNav}>
              <XMarkIcon className='w-6 h-6 my-4 ml-auto' />
            </button>
            <div className='mt-4 flex flex-col space-y-4'>
            {
                navbar.map((item, index) => (
                  <Link key={index} smooth to={item.href} className='cursor-pointer capitalize hover:text-neutral-100 transition-all delay-300 ease-in-out'>{item.name}</Link>
                ))
              }
            </div>
          </div>
          </div>

        </div>
      </div>

    </nav>
  )
}

export default Navbar