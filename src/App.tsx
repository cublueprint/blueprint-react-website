import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Theme from './Theme';
import { Fonts } from './static';

import { Header, Footer } from './partials';
import {
  Home,
  About,
  Projects,
  Apply,
  ApplicationType,
  Contact,
  Teams,
} from './pages';

const routes = [Home, About, Projects, Apply, Contact, Teams];

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Fonts />
      <Router>
        <Header links={routes.map(({ name }) => name)} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/apply/:type' element={<ApplicationType />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/teams' element={<Teams />} />
        </Routes>
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
