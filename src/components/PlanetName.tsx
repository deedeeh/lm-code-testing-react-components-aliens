import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import ErrorMessage from './ErrorMessage';

interface PlanetNameProps {
  planetName: string;
  isTouched: boolean;
  onChangeFormHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName: React.FC<PlanetNameProps> = ({ planetName, isTouched, onChangeFormHandler }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback((input) => {
    if(!touched) return '';
    if(input.length < 2 || input.length > 49) {
      return 'ERROR - Planet Name must be between 2 and 49 characters.';
    } else if(!/^[a-zA-Z0-9]+$/.test(input)) {
      return 'ERROR - no special characters are allowed!';
    } else {
      return '';
    }
  }, [touched]);

  useEffect(
    () => setErrorMessage(validate(planetName)),
    [validate, planetName]
    );

  return (
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
            setTouched(true);
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeFormHandler(e)
          }} />
      </label>
      <ErrorMessage message={errorMessage} />
    </div>
  )
}


export default PlanetName;