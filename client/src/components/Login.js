import React, {useState} from 'react'
import './login.css'

export default function Login() {

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
	}

    return (
        <div className='register-container'>
			<form action="" onSubmit={submitHandler}>
				<input type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
				<input type="text" placeholder="Password" onChange={e=>setPassword(e.target.value)}/> {/* Setting type to 'password'? */}
				<button type='submit'>Submit</button>
			</form>
		</div>
    )
}
