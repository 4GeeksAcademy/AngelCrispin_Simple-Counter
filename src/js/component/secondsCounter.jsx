import React from "react"; 
import { useState, useEffect } from 'react';
import ItemCounter from "./itemCounter";


const SecondsCounter = ({seconds})=>{

    const[arrayTimer, setArrayTimer] = useState([]);

    function getNumbersTimer(seconds){
        let arrayAux = [];
        for (let i = 1; i < 8; i++) {
            arrayAux.push(seconds%10);
            seconds= Math.trunc(seconds/10);
        }
        setArrayTimer(arrayAux);
    }

    useEffect(() => {
        getNumbersTimer(seconds);
      }, [seconds]);

    return (
        <div className="timer d-flex justify-content-center align-items-center">
            <ItemCounter item={<i className="fa fa-clock"></i>}/>
            <ItemCounter item={arrayTimer[6]}/>
            <ItemCounter item={arrayTimer[5]}/>
            <ItemCounter item={arrayTimer[4]}/>
            <ItemCounter item={arrayTimer[3]}/>
            <ItemCounter item={arrayTimer[2]}/>
            <ItemCounter item={arrayTimer[1]}/>
            <ItemCounter item={arrayTimer[0]}/>
        </div>
    );
    
    // return (
    //     <div className="timer d-flex justify-content-center align-items-center">
    //         <ItemCounter item={<i className="fa fa-clock"></i>}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=7?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-7,JSON.stringify(seconds).length-6):0}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=6?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-6,JSON.stringify(seconds).length-5):0}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=5?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-5,JSON.stringify(seconds).length-4):0}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=4?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-4,JSON.stringify(seconds).length-3):0}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=3?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-3,JSON.stringify(seconds).length-2):0}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=2?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-2,JSON.stringify(seconds).length-1):0}/>
    //         <ItemCounter item={JSON.stringify(seconds).length>=1?JSON.stringify(seconds).substring(JSON.stringify(seconds).length-1,JSON.stringify(seconds).length-0):0}/>
    //     </div>
    // );
}

export default SecondsCounter;