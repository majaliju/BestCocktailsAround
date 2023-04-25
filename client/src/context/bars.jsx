// import React, {useState, useEffect} from 'react';

// const BarContext = React.createContext();

// function BarProvider({children}){
//   const [bar, setBars] = useState({});

//   useEffect(() => {
//     fetch('/me')
//     .then(res => {
//       if (res.ok){
//         res.json().then(response => setUser(response))
//       }
//     })
//   }, []);
  
//   console.log("bar within user Context: ", bars)

//   return (
//       <UserContext.Provider value={{user, setUser}}> 
//           {children} 
//       </UserContext.Provider> 
//   )

// }

// export {BarContext, BarProvider };