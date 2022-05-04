import { ChangeEvent, useState, useCallback, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

interface NumberOfBeingsProps {
  numberOfBeings: string;
  isTouched: boolean;
  onChangeFormHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, 	isTouched, onChangeFormHandler }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback((input) => {
    if(!touched) return '';
    if(!/^[0-9]+$/.test(input)) {
      return 'ERROR - Numbers ONLY!'
    } else if(parseInt(input) < 1000000000) {
      return 'ERROR - Number of beings must be at least 1,000,000,000'
    } else {
      return '';
    }
  }, [touched]);

  useEffect(() => setErrorMessage(validate(numberOfBeings)), [validate, numberOfBeings])

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
            setTouched(true)
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeFormHandler(e);
          }} 
        />
      </label>
      <ErrorMessage message={errorMessage}/>
    </div>
  )
}

export default NumberOfBeings;