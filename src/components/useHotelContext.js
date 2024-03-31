import React, { useContext} from "react";

const HotelContext = React.createContext();

const HotelProvider = ({ children }) => {
    return (
        <HotelContext.Provider value={{ hotelName}}>{children}</HotelContext.Provider>
      )
}

const useHotelContext = ()=>{
    return HotelContext(HotelContext);
  }

  export { HotelProvider, useHotelContext};