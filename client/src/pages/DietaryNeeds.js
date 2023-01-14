import  { userId } from '../components/Storage';
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar';

export default function DietaryNeeds() {

    // Set up what diets the user is on and tick those boxes
    const [diets, setDiets] = useState([]);
    const allDiets = ["vegetarian", "pescatarian", "vegan", "lowFibre"];
    let checks = [];

    // function buildCheckBox(diet) {
    //     if (diets.includes(diet)) {
    //         checks.push(React.createElement("checkbox", {checked: true}, "{diet}"));
    //     } else {
    //         checks.push(React.createElement("checkbox", {}, "{diet}"));
    //     }
    // }

    useEffect(() => { 
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
        // .then(() => {
        //     allDiets.forEach(buildCheckBox);
        // })
    }, []);

    return (
        <div>
            <Navbar />
            <div>
                <h1>Current diets:</h1>
                    <form>
                        {allDiets.map(diet => {
                            if (diets.includes(diet))
                                return <pre><input type="checkbox" defaultChecked={true}/>{diet}</pre>;
                            return <pre><input type="checkbox"/>{diet}</pre>;
                        })}
                    </form>
            </div>
        </div>
    )
}
