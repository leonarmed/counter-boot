import React, { useEffect, useState } from "react";
import empty from "is-empty";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [alterSeconds, setAlterSeconds] = useState(0);
	const [type, setType] = useState("");

	useEffect(() => {
		setInterval(() => {
			setSeconds(prevCount => prevCount + 1)
		}, 1000);
	}, []);

	const Count = (seconds) => {
		let output = Math.abs(seconds);
		let length = seconds.toString().length;
		
		if (5 <= length) {
			return output.toString(); 
		} else {
			return (("0".repeat(5 - length)) + output.toString()); 
		}
	}

	return (
		<div className="text-center bg-dark text-white m-1">
			<div className="w-100 text-center">
				<i className="fas fa-clock"></i>
				{Count(seconds)}
			</div>
			<form className="row g-3 w-100 bg-dark text-white m-0 justify-content-center" style={{minHeight:"110px"}}>
				<div className="col-md-3 col-sm-6">
					<label className="form-label">Segundos</label>
					<input type="number" className="form-control" id="seconds" min="0" onChange={(e) => setAlterSeconds(e.target.value)}/>
				</div>
				<div className="col-md-3 col-sm-6">
					<label className="form-label">Acción</label>
					<select id="action-type" className="form-select" onChange={e=>{setType(e.target.value)}}>
						<option value="">Seleccionar...</option>
						<option value="countdown">Cuenta regresiva</option>
						<option value="alert">Alerta</option>
					</select>
				</div>
				<div className="col-2 d-flex justify-content-center align-items-center">
					<button className="btn btn-primary" onClick={(e)=>{e.preventDefault(); setSeconds(alterSeconds)}}>Procesar</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
