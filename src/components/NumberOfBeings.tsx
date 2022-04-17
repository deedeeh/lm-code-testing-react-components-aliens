import { ChangeEvent } from 'react';

interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) => 
  <div>
    <label htmlFor='numberOfBeings'>
      Number of beings:
      &nbsp;<input type='text' id='numberOfBeings' value={numberOfBeings} onChange={onChangeNumberOfBeings} />
    </label>
  </div>

export default NumberOfBeings;