import React, { useState } from 'react';

const QuestionPage = () => {
  const [formData, setFormData] = useState({
    userResponse1: '',
    userResponse2: '',
    userResponse3: '',
    userResponse4: '',
    userResponse5: '',
    userResponse6: '',
    userResponse7: '',
    userResponse8: '',
    userResponse9: '',
    userResponse10: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // calculate score here?
    console.log('Form data:', formData);
  };

  return (
    <div>
      <h1>Questions</h1>
      <form onSubmit={handleSubmit}>
        {[...Array(10)].map((_, index) => (
          <div key={index}>
            <label>
              Question {index + 1}:
              <input
                type="text"
                name={`question${index + 1}`}
                value={formData[`question${index + 1}`]}
                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
              />
            </label>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionPage;
