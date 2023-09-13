import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    async function fetchTrainSchedule() {
      try {
        const response = await fetch('YOUR_API_ENDPOINT_HERE');
        const data = await response.json();
        setSchedule(data); // Assuming the API response is an array of train schedule data
      } catch (error) {
        console.error('Error fetching train schedule:', error);
      }
    }

    fetchTrainSchedule();
  }, []);

  return (
    <div className="App">
      <h1>Train Schedule App</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(train => (
            <tr key={train.id}>
              <td>{train.trainName}</td>
              <td>{train.departure}</td>
              <td>{train.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
