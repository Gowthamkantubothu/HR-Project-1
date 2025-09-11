import React, { useState, useEffect } from "react";
import axios from "axios";
import CandidateForm from "./CandidateForm";
import './styles.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const fetchCandidates = () => {
    axios.get("http://127.0.0.1:8000/api/candidates/")
      .then(response => {
        setCandidates(response.data);
      });
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const deleteCandidate = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/candidates/${id}/`)
      .then(() => {
        fetchCandidates();
      });
  };

  return (
    <div className="container">
      <h1>Candidate Management System</h1>
      <CandidateForm
        selectedCandidate={selectedCandidate}
        fetchCandidates={fetchCandidates}
        setSelectedCandidate={setSelectedCandidate}
      />
      <h2>Candidate List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Status</th><th>Resume</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone_number}</td>
              <td>{c.current_status}</td>
              <td><a href={c.resume_link} target="_blank" rel="noopener noreferrer">View Resume</a></td>
              <td className="actions">
                <button onClick={() => setSelectedCandidate(c)}>Edit</button>
                <button className="cancel" onClick={() => deleteCandidate(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
