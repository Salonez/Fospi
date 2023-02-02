import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';

export default function Admin() {

    const [name, setName] = useState('');
    const [kilojules, setKilojules] = useState(0);
    const [options, setOptions] = useState('');
    const [incompatibleDiets, setIncompatibleDiets] = useState('');
    const [image, setImage] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImage(URL.createObjectURL(file));
    };
    
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    
    return (
        <div>
            <Navbar />
            <div className='register-container'>
				<form action="" onSubmit={console.log("HELLO")}>
					<input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
					<input type="number" placeholder="Kilojules" onChange={e=>setKilojules(e.target.value)}/>
					<input type="text" placeholder="Options" min="0" onChange={e=>setOptions(e.target.value)}/>
					<input type="text" placeholder="Incompatible Diets" onChange={e=>setIncompatibleDiets(e.target.value)}/>
                    <div
                        style={{
                        width: '300px',
                        height: '300px',
                        border: '1px solid black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        {image ? (
                            <img 
                                src={image} 
                                alt="" 
                                style={{ maxWidth: '100%', maxHeight: '100%' }} 
                            />
                        ) : (
                            <p>Drop an image here</p>
                        )}
                    </div>
					<button type='submit'>Upload</button>
				</form>
            </div>
        </div>
    )
}
