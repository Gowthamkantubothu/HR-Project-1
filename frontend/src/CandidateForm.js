import React, { useState, useEffect } from "react";
import axios from "axios";

function CandidateForm({ selectedCandidate, fetchCandidates, setSelectedCandidate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [current_status, setCurrentStatus] = useState("");
  const [resume_link, setResumeLink] = useState("");

  useEffect(() => {
    if (selectedCandidate) {
      setName(selectedCandidate.name);
      setEmail(selectedCandidate.email);
      setPhoneNumber(selectedCandidate.phone_number);
      setCurrentStatus(selectedCandidate.current_status);
      setResumeLink(selectedCandidate.resume_link);
    }
  }, [selectedCandidate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const candidate = {
      name,
      email,
      phone_number,
      current_status,
      resume_link
    };

    if (selectedCandidate) {
      axios.put(`http://127.0.0.1:8000/api/candidates/${selectedCandidate.id}/`, candidate)
        .then(() => {
          fetchCandidates();
          setSelectedCandidate(null);
          clearForm();
        });
    } else {
      axios.post("http://127.0.0.1:8000/api/candidates/", candidate)
        .then(() => {
          fetchCandidates();
          clearForm();
        });
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCurrentStatus("");
    setResumeLink("");
  };

  return (
    <div>
      <h2>{selectedCandidate ? "Edit Candidate" : "Add Candidate"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Phone Number" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} required />
        <input placeholder="Current Status" value={current_status} onChange={(e) => setCurrentStatus(e.target.value)} required />
        <input placeholder="Resume Link" value={resume_link} onChange={(e) => setResumeLink(e.target.value)} required />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit">{selectedCandidate ? "Update" : "Add"}</button>
          {selectedCandidate && <button type="button" className="cancel" onClick={() => { setSelectedCandidate(null); clearForm(); }}>Cancel</button>}
        </div>
      </form>
    </div>
  );
}

export default CandidateForm;
