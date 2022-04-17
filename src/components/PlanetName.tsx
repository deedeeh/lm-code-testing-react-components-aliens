import { ChangeEvent } from 'react';

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => 
  <div>
    <label htmlFor='planetName'>
      Planet Name:
      &nbsp;<input type='text' id='planetName' value={planetName} onChange={onChangePlanetName} />
    </label>
  </div>


export default PlanetName;