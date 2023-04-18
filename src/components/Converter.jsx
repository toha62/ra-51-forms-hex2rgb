import React, { useState } from 'react';

export default function Converter() {
  const [state, setState] = useState({rgbColor: '', color: '#cccccc'});

  const handleChange = ({ target: {value} }) => {
    if (value.length < 7) {
      setState({rgbColor: '', color: '#cccccc'});
      return null;
    }

    const hex = value.match(/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i);
  
    if (!hex) {      
      setState({rgbColor: 'ОШИБКА!', color: 'red'});
      return null;
    }

    setState({
      rgbColor: `rgb(${parseInt(hex[1], 16)}, ${parseInt(hex[2], 16)}, ${parseInt(hex[3], 16)})`,
      color: value,
    });    
  }

  return (
    <div className="container" style={{backgroundColor: state.color}}>
      <form action="">
        <input
          className="user-input box"
          onChange={handleChange}
          type="text"
          maxLength="7"
          placeholder="код цвета в формате HEX"
        />
        <input className="result box" type="text" value={state.rgbColor} readOnly />
      </form>
    </div>
  );
}