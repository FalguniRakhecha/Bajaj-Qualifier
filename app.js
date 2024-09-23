import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [response, setResponse] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.parse(inputData);
    // Call the API endpoint with the input data
    fetch('https://your-api-url.com/bfhl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => setResponse(data));
  };

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedOptions);
  };

  return (
    <div>
      <h1>ABCD123</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={inputData} onChange={(event) => setInputData
(event.target.value)} />
<button type="submit">Submit</button>
</form>
<select multiple value={selectedOptions} onChange={handleSelectChange}>
<option value="alphabets">Alphabets</option>
<option value="numbers">Numbers</option>
<option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
</select>
{response && (
<div>
  {selectedOptions.includes("alphabets") && (
    <p>Alphabets: {response.alphabets.join(", ")}</p>
  )}
  {selectedOptions.includes("numbers") && (
    <p>Numbers: {response.numbers.join(", ")}</p>
  )}
  {selectedOptions.includes("highest_lowercase_alphabet") && (
    <p>Highest Lowercase Alphabet: {response.highest_lowercase_alphabet[0]}</p>
  )}
</div>
)}
</div>
);
}

export default App;