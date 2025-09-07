import { createContext } from "react";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    const value = {
        // put doctor-related state here
    };

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;
