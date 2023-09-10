import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Theme from './Theme';
import { Fonts } from './static';

import { Header, Footer } from './partials';
import {
  Home,
  About,
  Projects,
  ProjectPage,
  Apply,
  StudentApplications,
  NonProfitApplication,
  Contact,
  Teams,
} from './pages';
import { BannerBlock, ScrollToTop } from './components';

const routes = ['home', 'about', 'projects', 'apply', 'contact', 'teams'];

const App = () => (
  <Theme>
    <GlobalStyle />
    <Fonts />
    <Router>
      <ScrollToTop />
      <PageWrapper>
        <Header links={routes.map((name) => name)} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:name' element={<ProjectPage />} />
          <Route path='/apply' element={<Apply />} />
          <Route path='/apply/student' element={<StudentApplications />} />
          <Route path='/apply/non-profit' element={<NonProfitApplication />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/teams' element={<Teams />} />
        </Routes>
        <div>
          <BannerBlock />
          <Footer />
        </div>
      </PageWrapper>
    </Router>
  </Theme>
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "Source Sans Pro", sans-serif;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
