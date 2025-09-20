import { createContext, use, useState } from "react";

export const Appcontext = createContext()

const AppcontextProvider = (props) =>{
    const [user,setUser] =useState(null) ;

    const value = {
        user,setUser
    } 

    return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default AppcontextProvider

  