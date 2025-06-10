import React, { useEffect, useState } from 'react';
import petFinder from './dfx-config';

function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            const petsData = await petFinder.getPets();
            setPets(petsData);
        };
        fetchPets();
    }, []);

    return (
        <div>
            <h2>List of Lost/Found Pets</h2>
            {pets.map((pet) => (
                <div key={pet.id}>
                    <h3>{pet.name}</h3>
                    <p>Type: {pet.type}</p>
                    <p>{pet.description}</p>
                    <p>Location: {pet.location}</p>
                    <img src={pet.photo} alt={pet.name} />
                </div>
            ))}
        </div>
    );
}

export default PetList;
