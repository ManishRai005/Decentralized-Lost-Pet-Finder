import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../../declarations/pet_finder_backend/pet_finder_backend.did.js';
import { Principal } from '@dfinity/principal';

const agent = new HttpAgent({ host: 'http://localhost:8000' });
agent.fetchRootKey(); // For local development, fetching the root key

const petFinderCanisterId = 'a3shf-5eaaa-aaaaa-qaafa-cai '; // Replace this with your canister ID

const petFinder = Actor.createActor(idlFactory, {
  agent,
  canisterId: petFinderCanisterId,
});

export default petFinder;
