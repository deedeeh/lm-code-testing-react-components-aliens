import { useState, ChangeEvent } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';

const W12MForm = () => {
	const [ speciesName, setSpeciesName ] = useState<string>('');
	const [ planetName, setPlanetName ] = useState<string>('');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName 
				speciesName={speciesName}
				onChangeSpeciesName={(e: ChangeEvent<HTMLInputElement>) => setSpeciesName(e.target.value)}
			/>
			<PlanetName 
				planetName={planetName}
				onChangePlanetName={(e: ChangeEvent<HTMLInputElement>) => setPlanetName(e.target.value)}
			/>
		</section>
	);
};

export default W12MForm;
