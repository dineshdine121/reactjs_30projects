import React, { useState } from 'react';

function Passwordstrength() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handlePasswordChange = (e) => {
    const passValue = e.target.value;
    setPassword(passValue);

    if (passValue.length > 0) {
      if (passValue.length < 4) {
        setStrength('weak');
      } else if (passValue.length >= 4 && passValue.length < 8) {
        setStrength('medium');
      } else {
        setStrength('strong');
      }
    } else {
      setStrength('');
    }
  };

  const getColor = () => {
    switch (strength) {
      case 'weak':
        return '#ff5925';
      case 'medium':
        return 'yellow';
      case 'strong':
        return '#26d730';
      default:
        return '#ccc';
    }
  };

  return (
    <div className="container">
      <div className="input-box">
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: getColor() }}
        />
        <button type="submit">
        </button>
        {password && (
          <p id="message" style={{ color: getColor() }}>
            password is <span id="strength">{strength}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Passwordstrength;
