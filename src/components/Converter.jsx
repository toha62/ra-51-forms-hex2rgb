import React, { useState } from 'react';

export default function Converter() {
  const [value, setValue] = useState('');

  const handleChange = ({ target: {value} }) => {
    if (value.length < 7) {
      setValue('');
      return null;
    }
    if (!value.match(/#[a-f\d]{6}/i)) {      
      setValue('ОШИБКА !');
      return null;
    }
    setValue(parseInt(value.slice(1), 16));
    console.log(value.slice(1));
  }

  return (
    <div className="container">
      <form action="">
        <input
          className="user-input box"
          onChange={handleChange}
          type="text"
          maxLength="7"
          placeholder="Введите код цвета в формате HEX"
        />
        <input className="result box" type="text" value={value} readOnly />
      </form>
    </div>
  );
}