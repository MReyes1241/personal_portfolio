import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Contact } from './sections/Contact/Contact';
// import { Resume } from './sections/Resume/Resume';
import { Navbar } from './components/Navbar/Navbar';
import { theme } from './theme/theme';

export function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          {/*<Route path="/resume" element={<Resume />} />*/}
        </Routes>
      </Router>
    </MantineProvider>
  );
}
