import { Link } from 'react-router-dom';
import './Signup.css';
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const image = "sampleImg.jpg";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        name,
        age,
        email,
        password,
        image
      });

      if (response.data) {
        console.log('Login successful!');
        setName("");
        setAge(0);
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  }
  
  return (
    <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>
            <div className="form-container">
                <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="number" className="input" placeholder="Age" onChange={(e) => setAge(Number(e.target.value))} required />
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type='submit' className='button'>Sign up</button>
            {errorMessage && <p className="error text-red-700">{errorMessage}</p>}
        </form>
        
        <div className="form-section">
            <p>Have an account? <Link to="/signin">Sign in</Link> </p>
        </div>
    </div>
  )
}

export default Signup