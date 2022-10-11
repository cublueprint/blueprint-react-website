import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Theme from './Theme';
import { Fonts } from './content';

import { Header } from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Apply from './Apply';
import Contact from './Contact';
import { Footer } from './Footer';

const routes = [Home, About, Projects, Apply, Contact];

const links = [
  { home: Home },
  { about: About },
  { projects: Projects },
  { apply: Apply },
  { contact: Contact },
];

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Fonts />
      <Router>
        <Header links={routes.map(({ name }) => name)} />
        <div>Hey! I'm going to be the new cuBlueprint website 🤠</div>
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
