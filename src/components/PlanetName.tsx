import { ChangeEvent, useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {
  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate: (input: string) => string | undefined = input => {
    if(input.length < 2 || input.length > 49) {
      return 'ERROR - Planet Name must be between 2 and 49 characters.';
    } else if(!/^[a-zA-Z0-9]+$/.test(input)) {
      return 'ERROR - no special characters are allowed!';
    } else {
      return undefined;
    }
  }

  return(
    <div>
      <label htmlFor='planetName'>
        Planet Name:
        &nbsp;
        <input 
          required
          type='text' 
          id='planetName' 
          value={planetName} 
          onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangePlanetName(e)
          }} />
          <ErrorMessage message={errorMessage} />
      </label>
    </div>
  )
}


export default PlanetName;