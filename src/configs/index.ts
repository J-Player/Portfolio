export enum Language {
	java = 'java',
	javascript = 'javascript',
	python = 'python'
}

export default interface ProjectModel {
	name: string
	repository: string
	description: string
	project?: string
}

export const projects: { [key in Language]: ProjectModel[] } = {
	java: [
		{
			name: 'Profanator-API',
			repository: 'https://github.com/J-Player/Profanator',
			description:
				'API REST reativa desenvolvida em Spring WebFlux com o propósito de fornecer dados relacionados aos itens do Profane (MMO Sandbox brasileiro).',
			project: 'https://profanator-api.onrender.com/swagger-ui/index.html'
		},
		{
			name: 'Simple Spring Batch Template',
			repository: 'https://github.com/J-Player/Simple-Spring-Batch-Template',
			description: 'Um simples template de um projeto usando Spring Batch para processamento de lotes.'
		},
		{
			name: 'Simple Spring Kafka Template',
			repository: 'https://github.com/J-Player/Simple-Spring-Kafka-Template',
			description: 'Um simples template de um serviço de mensageria usando Spring Kafka.'
		}
	],
	javascript: [
		{
			name: 'Smart-Market',
			repository: 'https://github.com/J-Player/smart-market',
			description:
				'Projeto desenvolvido para ajudar pessoas a encontrar produtos de supermercados pelo menor preço. O projeto tem como principal objetivo ajudar consumidores a economizar tempo e dinheiro nas compras do dia-a-dia.'
		},
		{
			name: 'Profanator',
			repository: 'https://github.com/J-Player/Profanator',
			description:
				'Site desenvolvido para auxiliar jogadores do Profane (MMO Sandbox brasileiro) a comercializar seus itens de forma mais eficiente através deste site. O site foi desenvolvido com React e Typescript.',
			project: 'https://profanator.onrender.com'
		},
		{
			name: 'Devedle',
			repository: 'https://github.com/J-Player/devedle',
			description: 'Jogo inspirado no gamedle, porém para a comunidade de desenvolvedores.',
			project: 'https://devedle.vercel.app'
		},
		{
			name: 'Portfolio',
			repository: 'https://github.com/J-Player/Portfolio',
			description: 'O portfolio que você está acessando agora! Foi desenvolvido com Typescript e React.'
		},
		{
			name: 'React Note App Demo',
			repository: 'https://github.com/J-Player/React-Note-App-Demo',
			description:
				'Um gerenciador de notas do usuário. O projeto foi desenvolvido usando a MERN stack (MongoDB, ExpressJS, React e NodeJS).',
			project: 'https://react-note-app-demo.onrender.com'
		}
	],
	python: [
		{
			name: 'Kaggle Competitions Collection',
			repository: 'https://github.com/J-Player/Kaggle-Competitions-Collection',
			description:
				'Coleção de competições do Kaggle de Data Science com Python. É uma coletânea de notebooks desenvolvidos para resolver determinados desafios disponíveis no Kaggle.'
		},
		{
			name: 'Web Scraping Example',
			repository: 'https://github.com/J-Player/Web-Scraping-Example',
			description: 'Um simples exemplo de Web Scraping com Python e Selenium (framework).'
		}
	]
}
