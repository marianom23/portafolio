import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Studies = () => {
	return (
		<div className="works">
			<Card
				icon={faBook}
				title="Trayectoria universitaria"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./ugr.jpg"
								alt="ugr"
								className="work-image"
							/>
							<div className="work-title">Universidad Gran Rosario</div>
							<div className="work-subtitle">
								Ciencia de datos
							</div>
							<div className="work-duration">mar. 2025 - Present</div>
						</div>

						<div className="work">
							<img
								src="./utn.png"
								alt="utn"
								className="work-image"
							/>
							<div className="work-title">Universidad Tecnológica Nacional</div>
							<div className="work-subtitle">
								Tecnicatura en programación
							</div>
							<div className="work-duration">ene. 2023 - abr. 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Studies;
