import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyle />
		<App />
	</>
)
