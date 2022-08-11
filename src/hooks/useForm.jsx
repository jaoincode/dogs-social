import React from 'react';
import { useState } from 'react';

const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: 'Preencha um email válido',
  }
}

export const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) true;
    if (value.length === 0) {
      setError('Preencha o campo.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  const onChange = ({ target }) => {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
}