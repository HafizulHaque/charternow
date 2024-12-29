'use client';

import { useState } from "react";
import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const getArray = (n: number) => Array.from({length: Math.ceil(n)}, (_,i) => i+1)

const clients = [
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    clientName: 'Lisa Adams',
    tripCount: 6,
    rate: 5,
    recommendation: 'Smooth experience!🌟 The car was clean, well-maintained, and exactly as described. Highly recommend!'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
    clientName: 'Bryan',
    tripCount: 34,
    rate: 4.5,
    recommendation: 'Smooth experience! The car was clean, well-maintained, and exactly as described. Highly recommend! 💯'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
    clientName: 'John Doe',
    tripCount: 19,
    rate: 5,
    recommendation: 'Smooth experience!🌟 The car was clean, well-maintained, and exactly as described. Highly recommend!'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/27.jpg',
    clientName: 'Anna Highway',
    tripCount: 65,
    rate: 3.5,
    recommendation: 'Smooth experience! The car was clean, well-maintained, and exactly as described. Highly recommend! 💯'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/men/40.jpg',
    clientName: 'Jamieson',
    tripCount: 7,
    rate: 4,
    recommendation: 'Smooth experience!🌟 The car was clean, well-maintained, and exactly as described. Highly recommend!'
  },
  {
    imageUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
    clientName: 'Christina Perry',
    tripCount: 11,
    rate: 5,
    recommendation: 'Smooth experience! The car was clean, well-maintained, and exactly as described. Highly recommend! 💯'
  },
]

const SlideItem = ({ client, ...rest }: {
   client: any,
}) => {
  return (    
    <div className="w-[33%] aspect-video p-2" {...rest}>
      <div className="h-full w-full bg-[#f0f0f0] rounded-3xl p-6">
        <div className="flex items-center gap-x-4">
          <Image 
            src={client.imageUrl} 
            alt={client.clientName} 
            width={64} 
            height={64}
            className="rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-2xl">{client.clientName}</h2>
            <p>{client.tripCount} trips</p>
          </div>
        </div>
        <div className="flex items-center gap-2 my-4">
          {getArray(client.rate).map((num) => {
            let Icon = client.rate < num ? StarHalf : Star
            return (
              <Icon key={num} fill="#E8C811" stroke="#E8C811" size={18}/>
            )
          })}
          <span className="font-semibold">({client.rate.toFixed(1)})</span>
        </div>
        <p className="text-xl font-light tracking-wide leading-8 line-clamp-3">
          {client.recommendation}
        </p>
      </div>
    </div>
  )
}

const Recommendation = () => {

  const [activeIndex, setActiveIndex] = useState<number>(0)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      setActiveIndex(next);
    },
    customPaging: (i: number) => (
      <div className="custom-dot mt-4">
        <div className={`${activeIndex === i ? 'bg-cstmTeal':'bg-[#aaa]'} w-[10px] h-[10px] rounded-full`}></div>
      </div>
    ),
  };

  return (
    <div className="px-48 my-16">
      <h2 className="text-3xl font-bold text-center my-8">Customer Stories</h2>
      <Slider {...sliderSettings}>
        {clients.map((client, index) => <SlideItem key={index} client={client}/>)}
      </Slider>
    </div>
  )
}

export default Recommendation
