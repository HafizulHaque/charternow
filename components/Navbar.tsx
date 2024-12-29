import Image from "next/image"
import Link from "next/link"
import { User, Menu } from "lucide-react"

const Navbar = () => {
  return (
    <header className="h-[90px] px-8 py-6 flex items-center justify-between">
      
      <div>
        <Link href={'/'} className="flex items-center">
          <Image src={`logo.svg`} height={50} width={50} alt="logo"/>
          <h1 className="ml-2 text-2xl font-medium text-cstmTeal">Charter Now</h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-4">
        <Link className="navItem" href={'#car'}>Car</Link>
        <Link className="navItem" href={'#motorcycle'}>Motorcycle</Link>
        <Link className="navItem" href={'#boat'}>Boat</Link>
      </div>

      <div className="flex items-center gap-x-4">
        <Link 
          className="px-1 py-2 hover:text-cstmTeal text-xl" 
          href={'/register-host'}>
          Become a host
        </Link>
        <Link href={'/dashboard'}>
          <div className="bg-slate-300 hover:bg-teal-900/50 p-2 rounded-full text-white">
            <User size={24}/>
          </div>
        </Link>
        <div className="bg-cstmTeal hover:bg-cstmTeal/80 p-2 rounded-full text-white cursor-pointer">
          <Menu size={24}/>
        </div>
        
      </div>
    </header>
  )
}

export default Navbar
