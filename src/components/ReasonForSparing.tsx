import { ChangeEvent, useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => {
  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate: (input: string) => string | undefined = input => 
    input.length < 17 || input.length > 153 ? 'ERROR - Reason for sparing must be between 17 and 153 characters.' : undefined;
  

  return (
    <div>
      <label htmlFor='reasonForSparing'>
        Reason for sparing:
        &nbsp;
        <textarea 
          id='reasonForSparing' 
          value={reasonForSparing} 
          onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeReasonForSparing(e)
          }}>
        </textarea>
      </label>
      <ErrorMessage message={errorMessage} />
    </div>
  )
}

export default ReasonForSparing;