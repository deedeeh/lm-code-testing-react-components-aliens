import { ChangeEvent, useState, useCallback, useEffect } from 'react'
import ErrorMessage from './ErrorMessage';

interface WhatIs2Plus2Props {
  whatIs2Plus2: string;
  isTouched: boolean;
  onChangeWhatIs2Plus2: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const WhatIs2Plus2: React.FC<WhatIs2Plus2Props> = ({ whatIs2Plus2, isTouched, onChangeWhatIs2Plus2 }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback((input) => {
    if(!touched) return '';
    if(input === 'Select') {
      return 'Please select an answer.';
    } else if(input === 'Not 4') {
      return 'ERROR - Sorry that is the wrong answer!'
    } else {
      return '';
    }
  }, [touched]);

  useEffect(() => setErrorMessage(validate(whatIs2Plus2)), [validate, whatIs2Plus2]);

  return (
    <div>
      <label htmlFor='whatIs2Plus2'>
        What is 2 + 2?
        &nbsp;
        <select 
          name='whatIs2Plus2' 
          id='whatIs2Plus2' 
          value={whatIs2Plus2} 
          onChange={(e) => {
            setTouched(true);
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeWhatIs2Plus2(e)
          }}>
          <option value='Select'>Select</option>
          <option value='4'>4</option>
          <option value='Not 4'>Not 4</option>
        </select>
      </label>
      <ErrorMessage message={errorMessage} />
    </div>
  )
}

export default WhatIs2Plus2;