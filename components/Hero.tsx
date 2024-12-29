import { Search } from "lucide-react"

const Hero = () => {
  return (
    <div className="px-48 pt-12 pb-4 flex flex-col bg-carousel-img-1 h-[calc(100vh-90px)] bg-cover bg-center">
      <div className="flex-1 flex flex-col justify-between">
        <div className="glassmorph px-8 text-white rounded-full">
          <div className="flex flex-row divide-x divide-white/50">
            <div className="flex-[2] px-4 py-2">
              <h3 className="text-lg font-medium">Where</h3>
              <p>City, airport, address</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <h3 className="text-lg font-medium">From</h3>
              <p>26/01/25 - 10:00 AM</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <h3 className="text-lg font-medium">To</h3>
              <p>29/01/25 - 08:30 PM</p>
            </div>
            <div className="flex-1 px-4 py-2">
              <h3 className="text-lg font-medium">Who's In</h3>
              <p>Group size</p>
            </div>
            <div className="flex-1 px-4 py-2 pe-0 flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-medium">AI</h3>
              </div>
              <button className="bg-white/30 hover:bg-white/20 p-4 rounded-full">
                <Search/>
              </button>
            </div>
          </div>
        </div>
        {/* <h2 className="max-w-[24ch] text-white text-4xl text-extrabold leading-[1.2]">
          Elevate your journey with an extensive selection of cars at Charter Now.
        </h2> */}
      </div>
      {/* <div className="pt-8 pb-4">
        <p className="text-center">...</p>
      </div> */}
    </div>
  )
}

export default Hero
