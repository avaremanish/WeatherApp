import React from 'react'
import {
 UilArrowUp,
 UilArrowDown,
 UilTemperature,
 UilTear,
 UilWind,
 UilSun,
 UilSunset,

} from "@iconscout/react-unicons"

const TemperauteAndDetails = () => {
  return (
    <div>

        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                    <p>  Cloudy or Whatever</p>

        </div>
        <div className="flex flex-row items-center justify-between text-white py-3">

            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" srcset="" className=' w-20 ' />
            <p className=" text-5xl"> 34°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                          <UilTemperature size={18} className=" mr-1" />
                          Real fell:
                         <span className="font "></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemperauteAndDetails