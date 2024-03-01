import React from "react"
import styled from "styled-components"
import Section from "./Section"
import { Color } from "../styles/variables"
import breakpoints from "../styles/breakpoints"

const Contact = ({ className }: { className?: string }) => {
	return (
		<Section id='contact' className={className}>
			<h1>CONTATOS</h1>
			<div>
				<span>
					<img src='icons/socials/email.svg' alt='' /><a href='mailto:jp_rd@hotmail.com'>jp_rd@hotmail.com</a>
				</span>
				<span>
					<img src='icons/socials/whatsapp.svg' alt='' /><a href='tel:+5521991925834'>+55 (21) 99192-5834</a>
				</span>
				<a href='https://www.linkedin.com/in/joão-pedro-rodrigues-diniz-339a1a180/' target='_blank'>
					<img src='icons/socials/linkedin_filled.svg' alt='' />
					LinkedIn
				</a>
				<a href='https://github.com/J-Player' target='_blank'>
					<img src='icons/socials/github.svg' alt='' />
					GitHub
				</a>
			</div>
		</Section>
	)
}

const StyledContact = styled(Contact)`
	background-color: ${Color.PRIMARY_BACKGROUND_COLOR};
	color: ${Color.PRIMARY_TEXT_COLOR};
	flex-direction: column;
	* {
		font-size: 1.6rem;
		text-decoration: none;
		color: inherit;
	}
	div {
		display: grid;
		gap: 1rem;
		span,
		& > a {
			border: 2px solid ${Color.SECONDARY_BACKGROUND_COLOR};
			border-radius: 2rem;
			padding: 1rem;
			width: 100%;
		}
		span {
			display: grid;
			grid-template-columns: .25fr 1fr;
			place-items: center;
			gap: 1rem;
		}
		img {
			display: block;
			width: 100%;
			max-height: 32px;
		}
		& > a {
			display: grid;
			grid-template-columns: .25fr 1fr;
			place-items: center;
		}
	}

	@media ${breakpoints.xs} {
		a {
			font-size: 1.4rem;
		}
	}
`

export default StyledContact
