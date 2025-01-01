'use client';

import { Search } from "lucide-react"
import Switch from "./Switch"
import { useAppContext } from "@/context/AppContext";
import { useCallback } from "react";

const Hero = () => {

  let { state, setStateValue } = useAppContext();

  const today = useCallback(() => new Date().toISOString().split('T')[0], [])
  
  const tomorrow = useCallback(() => {
    let today = new Date();
    today.setDate(today.getDate()+1);
    return today.toISOString().split('T')[0]
  }, [])

  const nextHour = useCallback(() => {
    let today = new Date();
    today.setHours(today.getHours()+1);
    return `${today.getHours().toString().padStart(2, '0')}:00`
  }, [])

  const placeChangeHandler = (e: React.MouseEvent<HTMLInputElement>) => {

  }

  const dateHandler = (e: React.MouseEvent<HTMLInputElement>) => {

  }

  return (
    <div className="px-48 pt-12 pb-4 flex flex-col bg-carousel-img-1 h-[calc(100vh-90px)] bg-cover bg-center">
      <div className="flex-1 flex flex-col justify-between">
        <div className="glassmorph px-4 text-white rounded-full">
          <div className="flex flex-row divide-x divide-white/50">

            {/* //place search  */}
            <div className="flex-[2] px-4 py-2">
              <h3 className="filter-input-label">Where</h3>
              <input 
                type="text" 
                placeholder="City, airport, address"
                className="filter-input"/>
            </div>

            {/* from date  */}
            <div className="flex-1 px-4 py-2">
              <h3 className="filter-input-label">From</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="date" 
                  className="filter-input"
                  min={today()}
                  defaultValue={today()}
                />
                <input 
                  type="time" 
                  className="filter-input"
                  defaultValue={nextHour()}
                />
              </div>
            </div>

            {/* to date  */}
            <div className="flex-1 px-4 py-2">
              <h3 className="filter-input-label">To</h3>
              <div className="flex items-center gap-2">
                <input 
                  type="date" 
                  className="filter-input"
                  min={today()}
                  defaultValue={tomorrow()}
                />
                <input 
                  type="time" 
                  className="filter-input"
                  defaultValue={`10:00`}
                />
              </div>
            </div>

            {/* group size  */}
            <div className="flex-1 px-4 py-2">
              <h3 className="filter-input-label">Who's In</h3>
              <select className="filter-input">
                <option value="">Group size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10+">10+</option>
              </select>
            </div>


            <div className="flex-1 px-4 py-2 pe-0 flex items-center">

              {/* ai mode toggle  */}
              <div className="flex-1 flex items-center gap-2">
                <h3 className="text-lg font-medium">AI</h3>
                <Switch/>
              </div>

              {/* submit button  */}
              <button className="bg-white/30 hover:bg-white/20 p-4 rounded-full">
                <Search/>
              </button>

            </div>
          </div>
        </div>

        {/* slogan  */}
        <h2 className="max-w-[24ch] text-white text-6xl font-medium leading-[1.2] mb-16">
          Elevate your journey with an extensive selection of cars at Charter Now.
        </h2>
      </div>
    </div>
  )
}

export default Hero
