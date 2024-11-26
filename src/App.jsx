import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form'; // Main landing page
import SeekersPage from './pages/SeekersPage'; // Seekers page
import SeekersSubpage from './subpages/SeekersSubpage'; // Seekers subpage
import SeekersSubpagetwo from './subpages/SeekersSubpagetwo'; // Seekers subpage two
import SeekersSubpagethree from './subpages/SeekersSubpagethree'; // Seekers subpage three
import SeekersSubpagefour from './subpages/SeekersSubpagefour'; // Seekers subpage four
import SeekersSubpagefive from './subpages/SeekersSubpagefive'; // Seekers subpage five
import SeekersSubpagesix from './subpages/SeekersSubpagesix'; // Seekers subpage six
import ExpertsPage from './pages/ExpertsPage'; // Experts page
import ExpertsSubpageone from './subpages/ExpertsSubpageone'; // Experts subpage one
import ExpertsSubpagetwo from './subpages/ExpertsSubpagetwo'; // Experts subpage two
import ExpertsSubpagethree from './subpages/ExpertsSubpagethree'; // Experts subpage three
import ExpertsSubpagefour from './subpages/ExpertsSubpagefour'; // Experts subpage four
import ExpertsSubpagefive from './subpages/ExpertsSubpagefive'; // Experts subpage five
import Section from './subpages/Section'; // Section
import DarkTheme from './subpages/DarkTheme'; // DarkTheme
import DarkThemetwo from './subpages/DarkThemetwo'; // DarkThemetwo
import DarkThemethree from './subpages/DarkThemethree'; // DarkThemethree
import DarkThemefour from './subpages/DarkThemefour'; // DarkThemefour


const App = () => {
  return (
    <Routes>
      {/* Default route for "/" */}
      <Route path="/" element={<Form />} />

      {/* Other routes */}
      <Route path="/form" element={<Form />} />
      <Route path="/seekerspage" element={<SeekersPage />} />
      <Route path="/seekerssubpage" element={<SeekersSubpage />} />
      <Route path="/seekerssubpagetwo" element={<SeekersSubpagetwo />} />
      <Route path="/seekerssubpagethree" element={<SeekersSubpagethree />} />
      <Route path="/seekerssubpagefour" element={<SeekersSubpagefour />} />
      <Route path="/seekerssubpagefive" element={<SeekersSubpagefive />} />
      <Route path="/seekerssubpagesix" element={<SeekersSubpagesix />} />
      <Route path="/expertspage" element={<ExpertsPage />} />
      <Route path="/expertssubpageone" element={<ExpertsSubpageone />} />
      <Route path="/expertssubpagetwo" element={<ExpertsSubpagetwo />} />
      <Route path="/expertssubpagethree" element={<ExpertsSubpagethree />} />
      <Route path="/expertssubpagefour" element={<ExpertsSubpagefour />} />
      <Route path="/expertssubpagefive" element={<ExpertsSubpagefive />} />
      <Route path="/section" element={<Section />} />
      <Route path="/darktheme" element={<DarkTheme />} />
      <Route path="/darkthemetwo" element={<DarkThemetwo />} />
      <Route path="/darkthemethree" element={<DarkThemethree />} />
      <Route path="/darkthemefour" element={<DarkThemefour />} />
    </Routes>
  );
};

export default App;
