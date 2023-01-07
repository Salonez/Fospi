import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar';
import  { userId } from '../components/Storage';

export default function DietaryNeeds() {

    // Set up what diets the user is on and tick those boxes
    const [lowFibre, setlowFibre] = useState(false);

    const response = fetch ('http://127.0.0.1:8000/DietaryNeeds', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                '_id': userId 
            })
    })
    // const returnData = response.json();
    // if ("lowFibre" in returnData.diets) setlowFibre(true);
    


    return (
        <div>
            <Navbar />
            <div>
                <input type="checkbox" class="tocheck-true"/> Low fibre
                <input type="checkbox" class="tocheck-true"></input>
            </div>
        </div>
    )
}
