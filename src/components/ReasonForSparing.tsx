import { ChangeEvent, useState, useCallback, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

interface ReasonForSparingProps {
  reasonForSparing: string;
  isTouched: boolean;
  onChangeFormHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, isTouched, onChangeFormHandler }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback((input) => {
    if(!touched) return '';
    return input.length < 17 || input.length > 153 
    ? 'ERROR - Reason for sparing must be between 17 and 153 characters.' 
    : '' 
  }, [touched]);

  useEffect(() => setErrorMessage(validate(reasonForSparing)), [validate, reasonForSparing]);
  
  return (
    <div>
      <label htmlFor='reasonForSparing'>
        Reason for sparing:
        &nbsp;
        <textarea 
          id='reasonForSparing' 
          value={reasonForSparing} 
          onChange={(e) => {
            setTouched(true);
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeFormHandler(e)
          }}>
        </textarea>
      </label>
      <ErrorMessage message={errorMessage} />
    </div>
  )
}

export default ReasonForSparing;