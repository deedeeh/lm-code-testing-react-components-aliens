import { ChangeEvent } from 'react'

interface WhatIs2Plus2Props {
  whatIs2Plus2: string;
  onChangeWhatIs2Plus2: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const WhatIs2Plus2: React.FC<WhatIs2Plus2Props> = ({ whatIs2Plus2, onChangeWhatIs2Plus2 }) => 
  <div>
    <label htmlFor='whatIs2Plus2'>
      What is 2 + 2?
      &nbsp;<select name='whatIs2Plus2' id='whatIs2Plus2' value={whatIs2Plus2} onChange={onChangeWhatIs2Plus2}>
        <option value='4'>4</option>
        <option value='Not 4'>Not 4</option>
      </select>
    </label>
  </div>

export default WhatIs2Plus2;