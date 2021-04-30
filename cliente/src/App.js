import styled from 'styled-components';
import FormSignIn from './components/FormSignIn/FormSignIn';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body/Body';

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<Router>
			<Container>
				<GlobalStyle />
				<Switch>
					<Route exact path="/" component={FormSignIn} />
					<Route exact path="/plataforma" component={Body} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
