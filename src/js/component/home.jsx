import React from "react";
import SecondsCounter from "./secondsCounter";
import { useState, useEffect } from 'react';


//create your first component
const Home = () => {


	const [seconds, setSeconds ] =  useState(0);

	useEffect(()=>{
	let myInterval = setInterval(() => {
			setSeconds(seconds + 1);
		}, 10)
		return ()=> {
			clearInterval(myInterval);
		  };
	});

	return (
		<div className="text-center">
			<SecondsCounter seconds={seconds} />
		</div>
	);
};



export default Home;
