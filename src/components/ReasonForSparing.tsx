import { ChangeEvent } from 'react';

interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) => 
  <div>
    <label htmlFor='reasonForSparing'>
      Reason for sparing:
      &nbsp;<textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing}>
      </textarea>
    </label>
  </div>

export default ReasonForSparing;