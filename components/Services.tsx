import Link from "next/link"

const Services = () => {
  return (
    <div className="my-16 flex flex-row h-[860px]">
      
      <div className="flex-1 h-full bg-car-service bg-cover bg-center p-16">
        <div className="h-full flex flex-col justify-end items-center">
          <h3 className="mb-3 text-3xl text-white text-center font-medium">Rent a Car</h3>
          <Link href={"/car"} className="bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-full font-semibold text-white">
            Plan Your Trip
          </Link>
        </div>
      </div>

      <div className="flex-1 h-full bg-bike-service bg-cover bg-center p-16">
        <div className="h-full flex flex-col justify-end items-center">
          <h3 className="mb-3 text-3xl text-white text-center font-medium">Rent a Motorcycle</h3>
          <Link href={"/motorcycle"} className="bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-full font-semibold text-white">
            Plan Your Trip
          </Link>
        </div>
      </div>

      <div className="flex-1 h-full bg-boat-service bg-cover bg-center p-16">
        <div className="h-full flex flex-col justify-end items-center">
          <h3 className="mb-3 text-3xl text-white text-center font-medium">Rent a Boat</h3>
          <Link href={"/ship"} className="bg-white/20 hover:bg-white/30 backdrop-blur-lg px-6 py-3 rounded-full font-semibold text-white">
            Plan Your Trip
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Services
