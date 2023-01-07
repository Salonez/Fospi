import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import  { changeUserId } from '../components/Storage';
import './styles/login.css';

export default function Login() {

    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	
	async function submitHandler(e) {
		e.preventDefault();

		const user = {
			username,
			password
		}

		console.log(user);

		const response = await fetch ('http://127.0.0.1:8000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const returnData = await response.json();
		console.log(returnData);
        if (returnData['message'] === "User found.") {
			changeUserId(returnData['id']);
            navigate('/menu');
        } else if (returnData['message'] === "User not found.") {
            navigate('/error');
        } else if (returnData['message'] ===  "Incorrect password.") {
            navigate('/error');
        }
	}

	async function signUp(e) {
		e.preventDefault();
		navigate('/register');
	}

    return (
		<div>
			<div className='register-container'>
				<form action="" onSubmit={submitHandler}>
					<input type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
					<input type="text" placeholder="Password" onChange={e=>setPassword(e.target.value)}/> {/* Setting type to 'password'? */}
					<button type='submit'>Login</button>
				</form>
				<br/>
				<button type='submit' onClick={signUp}>Sign up</button>
			</div>
		</div>
    )
}
