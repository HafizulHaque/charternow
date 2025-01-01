'use client'

import Image from "next/image"
import Link from "next/link"
import { User, Menu } from "lucide-react"
import { useAppContext } from "@/context/AppContext"

const Navbar = () => {

  let { state: { vehicleType }, setStateValue } = useAppContext()

  const handleVehicleTypeSelect = (e: React.MouseEvent<HTMLElement>) => {
    let vehicleType = e.currentTarget.getAttribute('data-name') ?? 'car';
    setStateValue({
      vehicleType
    })
  }

  return (
    <header className="h-[90px] px-8 py-6 flex items-center justify-between">
      
      <div>
        <Link href={'/'} className="flex items-center">
          <Image src={`logo.svg`} height={50} width={50} alt="logo"/>
          <h1 className="ml-2 text-2xl font-medium text-cstmTeal">Charter Now</h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-6">
        <p 
          data-name="car" 
          className={`navItem ${vehicleType === 'car' ? 'navItem-active': ''}`}
          onClick={handleVehicleTypeSelect}>
          Car
        </p>
        <p 
          data-name="motorcycle" 
          className={`navItem ${vehicleType === 'motorcycle' ? 'navItem-active': ''}`}
          onClick={handleVehicleTypeSelect}>
          Motorcycle
        </p>
        <p 
          data-name="boat" 
          className={`navItem ${vehicleType === 'boat' ? 'navItem-active': ''}`}
          onClick={handleVehicleTypeSelect}>
          Boat
        </p>
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
