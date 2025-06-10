import React, { useState } from 'react';
import petFinder from './dfx-config';

function PetForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const petId = await petFinder.postPet(name, type, description, location, photo);
        alert(`Pet posted with ID: ${petId}`);
    };

    return (
        <div>
            <h2>Post a Lost/Found Pet</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                <input type="text" placeholder="Type" onChange={(e) => setType(e.target.value)} required />
                <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} required />
                <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} required />
                <input type="text" placeholder="Photo URL/IPFS" onChange={(e) => setPhoto(e.target.value)} required />
                <button type="submit">Post Pet</button>
            </form>
        </div>
    );
}

export default PetForm;
