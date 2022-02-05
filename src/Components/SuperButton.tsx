import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

type PropsType = {
    onClick: () => void
    name: string
    disabled?: boolean
}

export const SuperButton: React.FC<PropsType> = ({name, onClick, disabled, ...props}) => {


    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={onClick} disabled={!!disabled}>{name}</Button>
        </div>
    )
}