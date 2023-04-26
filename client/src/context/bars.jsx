import React, {useState, useEffect} from 'react';

const BarsContext = React.createContext();

function BarsProvider({children}){
  const [bars, setBars] = useState({});

  useEffect(() => {
    fetch('/bars')
      .then((r) => r.json())
      .then((info) => setBars(info));
  }, []);
  
  console.log("bars within user Context: ", bars)

  return (
      <BarsContext.Provider value={{bars, setBars}}> 
          {children} 
      </BarsContext.Provider> 
  )

}

export {BarsContext, BarsProvider };