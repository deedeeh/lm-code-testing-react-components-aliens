import { ChangeEvent, useState, useCallback, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

interface SpeciesNameProps {
  speciesName: string;
  isTouched: boolean;
  onChangeFormHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, isTouched, onChangeFormHandler }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback((input) => {
    if(!touched) return '';
    if(input.length < 3 || input.length > 23) {
      return 'ERROR - Species Name must be between 3 and 23 characters.'
    } else if(!/^[a-zA-Z]+$/.test(input)) {
      return 'ERROR - No numbers or special characters allowed!'
    } else {
      return '';
    }
  }, [touched]);

  useEffect(() => setErrorMessage(validate(speciesName)), [validate, speciesName]);

  return (
    <div>
      <label htmlFor='speciesName'>
        Species Name:
        &nbsp;
        <input 
          required
          type='text' 
          id='speciesName' 
          value={speciesName} 
          onChange={(e) => {
            setTouched(true)
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeFormHandler(e)
          }} />
      </label>
      <ErrorMessage message={errorMessage} />
    </div>
  )
}

export default SpeciesName;