import React, {useState} from 'react';

type PropsType = {
    onClick: () => void
    name: string
    disabled?: boolean
}

export const Button: React.FC<PropsType> = ({name, onClick, disabled, ...props}) => {


    return (
        <div>
            <button onClick={onClick} disabled={!!disabled}>{name}</button>
        </div>
    )
}