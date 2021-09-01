import React, {useState} from 'react';

export const ModalContext = React.createContext();


export default function ModalProvider(props){
    const [value, setValue] = useState(false);

    const submitclickHandler = (val) => {
        setValue(val);
    }

    const defValues = {
        value:value,
        submitclick:submitclickHandler
    }

    return (
        <ModalContext.Provider value={defValues}>
            {props.children}
        </ModalContext.Provider>
    )
}