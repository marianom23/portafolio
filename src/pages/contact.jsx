import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contacto | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Pongámonos en contacto: Formas de conectarse conmigo
						</div>

						<div className="subtitle contact-subtitle">
							Gracias por tu interés en contactarme. Agradezco tus comentarios, preguntas y sugerencias. Si tienes alguna pregunta o comentario específico, no dudes en enviarme un correo electrónico directamente a&nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Respondo a todos los mensajes en un plazo de 24 horas, aunque puede que tarde más durante períodos de alta actividad. Finalmente, si prefieres conectarte a través de las redes sociales, puedes encontrarme en&nbsp;
							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.linkedin}
							</a>
						
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
