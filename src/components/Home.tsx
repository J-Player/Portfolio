import styled from 'styled-components'
import { Color } from '../styles/variables'
import Section from './Section'
import breakpoints from '../styles/breakpoints'

const Home = ({ className }: { className?: string }) => {
	return (
		<Section
			id="home"
			className={className}
			$backgroundColor={Color.backgroundColor.PRIMARY}
			$textColor={Color.fontColor.PRIMARY}>
			<div>
				<div className="title-wrapper">
					<h1>João Pedro R. Diniz</h1>
					<h2>Desenvolvedor Full-Stack</h2>
				</div>
				<div className="social-media-wrapper">
					<a href="https://www.linkedin.com/in/joao-pedro-rodrigues-diniz/" target="_blank" rel="noreferrer">
						<img src="icons/socials/linkedin.svg" title="LinkedIn" alt="LinkedIn icon" />
					</a>
					<a href="https://github.com/J-Player" target="_blank" rel="noreferrer">
						<img src="icons/socials/github.svg" title="GitHub" alt="GitHub icon" />
					</a>
				</div>
			</div>
		</Section>
	)
}

const HomeStyled = styled(Home)`
	position: relative;
	justify-content: start;
	&::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.5;
		background-image: url('bg.jpg');
		background-size: cover;
		filter: saturate(0);
		mix-blend-mode: color-dodge;
	}

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		gap: 1rem;
		.title-wrapper * {
			letter-spacing: 0.25rem;
			font-size: clamp(1.2rem, 2.2rem, 3.2rem); //12 16 35
		}
		.social-media-wrapper {
			display: flex;
			gap: 2rem;
			a {
				cursor: pointer;
				text-decoration: none;
				z-index: 1;
				img {
					display: block;
					width: 100%;
					max-height: 3.2rem;
				}
			}
		}
	}

	@media ${breakpoints.sm} {
		.title-wrapper {
			h1 {
				font-size: 2.7rem;
			}
			h2 {
				font-size: 1.9rem;
			}
		}
		.social-media-wrapper {
			align-self: center;
		}
	}

	@media ${breakpoints.xs} {
		.title-wrapper {
			h1 {
				font-size: 1.9rem;
			}
			h2 {
				font-size: 1.3rem;
			}
		}
	}
`

export default HomeStyled
