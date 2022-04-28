import { ChangeEvent, useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate: (input: string) => string | undefined = input => {
    if(input.length < 3 || input.length > 23) {
      return 'ERROR - Species Name must be between 3 and 23 characters.'
    } else if(!/^[a-zA-Z]+$/.test(input)) {
      return 'ERROR - No numbers or special characters allowed!'
    } else {
      return undefined
    }
  }
 
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
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeSpeciesName(e)
          }} />
          <ErrorMessage message={errorMessage} />
      </label>
    </div>
  )
}

export default SpeciesName;