import * as React from 'react';
import Button from '@mui/material/Button';
import { buttonHeader } from './Button.js';

export default function DesignedButton(props : buttonHeader) {
    return (
        <Button className="commonBtn" variant="contained" size="medium" sx={{backgroundColor:'#6153CD'}}>
          {props.buttonName}
        </Button>
    )
}



