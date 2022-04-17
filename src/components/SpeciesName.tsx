import { ChangeEvent } from 'react';

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => 
  <div>
    <label htmlFor='speciesName'>
      Species Name:
      &nbsp;<input type='text' id='speciesName' value={speciesName} onChange={onChangeSpeciesName} />
    </label>
  </div>

export default SpeciesName;