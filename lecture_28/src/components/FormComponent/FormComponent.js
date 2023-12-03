import { useState } from 'react';

import './formcomponent.scss';

export default function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    country: '',
    ukrLanguage: false,
    engLanguage: false,
  });

  const [language, setLanguage] = useState({ ukr: false, eng: false });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { value, checked, name, type } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));

    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // відміняє якийсь функціонал, який працює по стандарту (оновлення сторінки при натисканні на кнопку "Sign in")

    if (!formData.firstName) {
      setErrorMessage('Empty first name');
    } else {
      setErrorMessage('');
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="row">
        <span>First Name:</span>
        <input name="firstName" onChange={handleInputChange} type="text" />
        {errorMessage && <span>{errorMessage}</span>}
      </div>
      <div className="row">
        <span>Surname:</span>
        <input name="surName" onChange={handleInputChange} type="text" />
      </div>
      <div className="row">
        <select name="country" onChange={handleInputChange}>
          <option>Ukrain</option>
          <option>Canada</option>
          <option>Germany</option>
        </select>
      </div>
      <span>Choose your language:</span>
      <div className="row">
        <span>Ukrainian</span>
        <input
          name="ukrLanguage"
          onChange={handleInputChange}
          type="checkbox"
        />
        <span>English</span>
        <input
          name="engLanguage"
          checked={true}
          onChange={handleInputChange}
          type="checkbox"
        />
      </div>
      <button type="submit">Sign in</button>
    </form>
  );
}
