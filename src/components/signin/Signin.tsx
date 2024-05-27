import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import { useState } from 'react';
import axios from 'axios';

const Signin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email,
        password,
      });

      const data = response.data;

      if (data) {
        console.log("Login Successfully");
        navigate('/');
        localStorage.setItem('authToken', data.token);
      } else {
        console.error('Login failed:', data.message);
        setErrorMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
            <span className="title">Sign in</span>
            <span className="subtitle">Login to your account.</span>
            <div className="form-container">
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type='submit' className='button'>Sign in</button>
            {errorMessage && <p className="error text-red-700">{errorMessage}</p>}
        </form>
        
        <div className="form-section">
            <p>Don't have an account? <Link to="/signup">Sign up</Link> </p>
        </div>
    </div>
  )
}

export default Signin