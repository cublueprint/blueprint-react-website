import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Theme from './Theme';
import { Fonts } from './static';

import { Header, Footer } from './partials';
import { Home, About, Projects, Apply, Contact, Teams } from './pages';

const routes = [Home, About, Projects, Apply, Contact, Teams];

const links = [
  { home: Home },
  { about: About },
  { projects: Projects },
  { apply: Apply },
  { contact: Contact },
  { Teams: Teams },
];

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Fonts />
      <Router>
        <Header links={routes.map(({ name }) => name)} />
        <Switch>
          {routes.map((route) => (
            <Route key={`r-${route.name}`} exact path={`/${route.name}`}>
              {route}
            </Route>
          ))}
        </Switch>
      </Router>
      <Footer />
    </Theme>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "Source Sans Pro", sans-serif;
  }
`;

export default App;
