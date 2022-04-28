import { ChangeEvent, useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface NumberOfBeingsProps {
  numberOfBeings: number | string;
  onChangeNumberOfBeings: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => {
  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate: (input: string) => string | undefined = input => {
    if(!/^[0-9]+$/.test(input)) {
      return 'ERROR - Numbers ONLY!'
    } else if(parseInt(input) < 1000000000) {
      return 'ERROR - Number of beings must be at least 1,000,000,000'
    } else {
      return undefined;
    }
  }

  return(
    <div>
      <label htmlFor='numberOfBeings'>
        Number of beings:
        &nbsp;
        <input 
          type='text' 
          id='numberOfBeings' 
          value={numberOfBeings} 
          onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeNumberOfBeings(e);
          }} 
        />
      </label>
      <ErrorMessage message={errorMessage}/>
    </div>
  )
}

export default NumberOfBeings;