import  { userId } from '../components/Storage';
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';

export default function DietaryNeeds() {

    // Set up what diets the user is on and tick those boxes
    const [diets, setDiets] = useState([]);
    const allDiets = ["vegetarian", "pescatarian", "vegan", "lowFibre"];
    const checkboxRefs = {};

    async function updateDiets(e) {
        // updates the diets under the patient on mongoDB
		e.preventDefault();
        const selectedDiets = allDiets.filter((diet, index) => checkboxRefs[index].checked);
        const response = await fetch ('http://127.0.0.1:8000/UpdateDietaryNeeds', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                '_id': userId,
                'diets': selectedDiets})
		})
		const returnData = await response.json();
		console.log(returnData);
    }

    useEffect(() => {
        // Finds the dietary the patient is currently under and
        // automatically checks the boxes of the corresponding diets.
        fetch('http://127.0.0.1:8000/DietaryNeeds', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                '_id': userId
            })
        }).then(response => response.json())
        .then(json => setDiets(json['diets']));
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <h1>Current diets:</h1>
                    <form action="" onSubmit={updateDiets}>
                        {allDiets.map((diet, index) => {
                            if (diets.includes(diet))
                                return <div><input type="checkbox" defaultChecked={true} ref={(ref) => { checkboxRefs[index] = ref }}/>{diet}</div>;
                            return <div><input type="checkbox" ref={(ref) => { checkboxRefs[index] = ref }}/>{diet}</div>;
                        })}
                        <button type='submit'>Save</button>
                    </form>
            </div>
        </div>
    )
}