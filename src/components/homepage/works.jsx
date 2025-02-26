import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Trayectoria laboral"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./digitalhouse.jpg"
								alt="digitalhouse"
								className="work-image"
							/>
							<div className="work-title">Digital House</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">nov. 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./troupper.jpg"
								alt="troupper"
								className="work-image"
							/>
							<div className="work-title">Troupper</div>
							<div className="work-subtitle">
								Desarrollador Junior
							</div>
							<div className="work-duration">ene. 2023 - abr. 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
