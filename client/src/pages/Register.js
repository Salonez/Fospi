import React, {useState} from 'react';
import  { changeUserId } from '../components/Storage';
import './styles/register.css';

export default function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	
	async function submitHandler(e) {
		e.preventDefault();

		const user = {
			firstName,
			lastName,
			age,
			username,
			password
		}

		const response = await fetch ('http://127.0.0.1:8000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const returnData = await response.json();
		changeUserId(returnData['id']);
	}

	return (
		<div>
			<div className='register-container'>
				<form action="" onSubmit={submitHandler}>
					<input type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
					<input type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
					<input type="number" placeholder="Age" min="0" onChange={e=>setAge(e.target.value)}/>
					<input type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)}/>
					<input type="text" placeholder="Password" onChange={e=>setPassword(e.target.value)}/> {/* Setting type to 'password'? */}
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}
