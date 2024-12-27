import { MantineProvider } from '@mantine/core';
import { Hero } from './components/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Contact } from './sections/Contact/Contact';
import { theme } from './theme/theme';

export function App() {
  return (
    <MantineProvider theme={theme}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MantineProvider>
  );
}
