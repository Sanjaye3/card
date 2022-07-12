import React, { useState } from "react";
import "C:\\Users\\SanjayeJ\\Desktop\\card\\my-app\\src\\Components\\Card.css";
import Button from '@mui/material/Button';


function Card({h,e,a,b,c,d,ee,f,g,i}) {

    
    return ( 
        <div className="Card">
            <div className="Upper">
                <p className="first">{h}</p>
                <p>{e}</p>

            </div>
            <hr />
            <div className="middle">
            
                <p>{a}</p>
                <p>{b}</p>
                <p>{c}</p>
                <p>{d}</p>
                <p>{ee}</p>
                <p>{f}</p>
                <p>{g}</p>
                <p>{i}</p>
                
            </div>


            <div className="lower">
            <Button variant="contained" className="button">BUTTON</Button>


            </div>
        
        </div>

     );
}

export default Card ;
