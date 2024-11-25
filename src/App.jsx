import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form'; // Main landing page
import SeekersPage from './pages/SeekersPage'; // Seekers page
import SeekersSubpage from './subpages/SeekersSubpage'; // Seekers subpage
import ExpertsPage from './pages/ExpertsPage'; // Experts page
import ExpertsSubpage from './subpages/ExpertsSubpage'; // Experts subpage

const App = () => {
  return (
    <Routes>
      {/* Default route for "/" */}
      <Route path="/" element={<Form />} />

      {/* Other routes */}
      <Route path="/form" element={<Form />} />
      <Route path="/seekerspage" element={<SeekersPage />} />
      <Route path="/seekerssubpage" element={<SeekersSubpage />} />
      <Route path="/expertspage" element={<ExpertsPage />} />
      <Route path="/expertssubpage" element={<ExpertsSubpage />} />
    </Routes>
  );
};

export default App;
