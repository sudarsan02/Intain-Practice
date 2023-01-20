import { Button } from '@mui/material';
import React from 'react';

const BottomFooter =()=>{
    return(

        <div style={{backgroundColor:"white",display:"flex",justifyContent:"flex-end",padding:"0.7%"}}>
            <Button style={{backgroundColor:"#A5A5A5",marginRight:"1%",color:"black"}}>BACK</Button>
            <Button style={{backgroundColor:"#00796B",color:"white"}}>CREATE POOL</Button>
        </div>
    )
}
export default BottomFooter 