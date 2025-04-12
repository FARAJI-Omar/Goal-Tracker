import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import Form from './Form.jsx';
import AddGoal from './AddGoal.jsx';
import Stats from './Stats.jsx';
import './App.css';

function App() {
  // Initialize state with data from localStorage if it exists
  const [goals, setGoals] = useState(() => {
    const storedGoals = localStorage.getItem('goals');
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  // Save to localStorage whenever goals change
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  function handleFormSubmit(text) {
    const newGoal = {
      title: text,
      progress: 0
    };
    const newGoals = [...goals, newGoal];
    setGoals(newGoals);
  }

  function handleEditGoal(index, newText) {
    const newGoals = [...goals];
    newGoals[index] = {
      ...newGoals[index],
      title: newText
    };
    setGoals(newGoals);
  }

  function handleDeleteGoal(index) {
    const newGoals = goals.filter((_, i) => i !== index);
    setGoals(newGoals);
  }

  function handleProgressChange(index, newProgress) {
    const newGoals = [...goals];
    newGoals[index] = {
      ...newGoals[index],
      progress: newProgress
    };
    setGoals(newGoals);
  }

  return(
    <>
      <Header/>
      <AddGoal className="addgoal"/>
      <Form onSubmit={handleFormSubmit}/>
      <div className="body">
        <div className="card-container">
          {goals.map((goal, index) => (
            <Card
              key={index}
              goalText={goal.title}
              progress={goal.progress}
              onProgressChange={(newProgress) => handleProgressChange(index, newProgress)}
              onEdit={(newText) => handleEditGoal(index, newText)}
              onDelete={() => handleDeleteGoal(index)}
            />
          ))}
        </div>
        <div className='stats'>
          <Stats goals={goals} />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App



