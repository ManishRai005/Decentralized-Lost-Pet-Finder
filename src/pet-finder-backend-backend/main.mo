import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Option "mo:base/Option"; // Changed from Opt to Option

// Structure to hold pet information
actor PetFinder {
    
    type Pet = {
        id: Nat;
        name: Text;
        petType: Text; // Renamed 'type' to 'petType'
        description: Text;
        location: Text;
        photo: Text; // This will hold the URL or IPFS hash of the photo
    };
    
    var pets: [Pet] = [];
    
    public func postPet(name: Text, petType: Text, description: Text, location: Text, photo: Text) : async Nat {
        let newId = pets.size(); // Changed from Nat.fromInt(Array.size(pets))
        let newPet = {
            id = newId;
            name = name;
            petType = petType;
            description = description;
            location = location;
            photo = photo;
        };
        pets := Array.append(pets, [newPet]);
        return newId;
    };
    
    public func getPets() : async [Pet] {
        return pets;
    };
    
    public func searchPetsByLocation(searchLocation: Text) : async [Pet] {
        return Array.filter<Pet>(pets, func(pet: Pet): Bool { 
            Text.equal(pet.location, searchLocation) 
        });
    };
    
    public func searchPetsByType(searchType: Text) : async [Pet] {
        return Array.filter<Pet>(pets, func(pet: Pet): Bool { 
            Text.equal(pet.petType, searchType) 
        });
    };
    
};