import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionPage from './components/QuizPage';
import ScoresPage from './components/ScoresPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>MARTINA QUIZ APP</h1>
        <Routes>
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/score" element={<ScoresPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
