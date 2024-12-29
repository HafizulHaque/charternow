import Image from "next/image"
import { Check } from "lucide-react"

const Branding = () => {
  return (
    <div className="px-64 py-8">

      <div className="text-center">
        <h2 className="text-5xl font-bold leading-[1.5]">Renting Experience Fueled By AI</h2>
        <p className="text-2xl leading-[1.8] w-[80ch] mx-auto mt-2">Discover vehicles tailored to your trip, powered by cutting-edge AI insights. From scenic routes to dynamic itineraries, we make every journey unforgettable.</p>
      </div>

      <div className="mt-32 flex flex-col gap-y-48">

        <div className="flex items-center gap-x-16">
          <div className="flex-1">
            <Image src={`trip.svg`} alt="trip image" height={350} width={525} className="mx-auto"/>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold w-[36ch] leading-[1.5]">Smart Recommendations for your Trip using AI</h2>
            <p className="mb-2 text-xl leading-[1.5]">Discover vehicles tailored to your trip, powered by cutting-edge AI insights. From scenic routes to dynamic itineraries, we make every journey unforgettable.</p>
            <ul className="mt-2 mb-6">
              <li className="text-xl"><Check className="inline mr-2 text-cstmTeal"/>No paperwork, no hassel</li>
              <li className="text-xl"><Check className="inline mr-2 text-cstmTeal"/>Book a boat, car and motorcycle in one place</li>
            </ul>
            <button className="bg-cstmTeal hover:bg-cstmTeal/80 text-white px-4 py-2 text-xl rounded-full">Plan Your Trip</button>
          </div>
        </div>

        <div className="flex items-center gap-x-16">
          <div className="flex-1">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Cars that are exceptional in quality</h3>
              <p className="text-xl">Our AI crafts custom itineraries with activities, dining spots, and scenic routes tailored to your trip. Let us guide your journey!</p>
            </div>
          </div>
          <div className="flex-1">
            <Image src={`car.svg`} alt="car image" height={200} width={300} className="mx-auto"/>
          </div>
        </div>

        <div className="flex items-center gap-x-16">
          <div className="flex-1">
            <Image src={`bike.svg`} alt="bike image" height={200} width={300} className="mx-auto"/>
          </div>
          <div className="flex-1">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Bikes at the lowest price</h3>
              <p className="text-xl">Our AI crafts custom itineraries with activities, dining spots, and scenic routes tailored to your trip. Let us guide your journey!</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-16">
          <div className="flex-1">
            <div>
              <h3 className="text-3xl font-semibold mb-4">Boats at your convenience</h3>
              <p className="text-xl">Our AI crafts custom itineraries with activities, dining spots, and scenic routes tailored to your trip. Let us guide your journey!</p>
            </div>
          </div>
          <div className="flex-1">
            <Image src={`boat.svg`} alt="boat image" height={200} width={300} className="mx-auto"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Branding
