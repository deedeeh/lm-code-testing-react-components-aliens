import { useState, ChangeEvent, FormEvent } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2Plus2 from './WhatIs2Plus2';
import ReasonForSparing from './ReasonForSparing';
import DisplayFormData from './DisplayFormData';

const W12MForm = () => {
	const [ speciesName, setSpeciesName ] = useState<string>('');
	const [ planetName, setPlanetName ] = useState<string>('');
	const [ numberOfBeings, setNumberOfBeings ] = useState<string>('');
	const [ whatIs2Plus2, setWhaIs2Plus2 ] = useState<string>('Not 4');
	const [ reasonForSparing, setReasonForSparing ] = useState<string>('');
	const [ formSubmission, setFormSubmission ] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmission(true)
	}

	// When I call reset in handleSubmit the data aren't displayed. Bug related to async 
	// const resetForm = () => {
	// 	setSpeciesName('');
	// 	setPlanetName('');
	// 	setNumberOfBeings('');
	// 	setWhaIs2Plus2('Not 4');
	// 	setReasonForSparing('');
	// }

	return (
		<>
			<section className='w12MForm'>
				<form onSubmit={handleSubmit}>
					<W12MHeader />
					<SpeciesName 
						speciesName={speciesName}
						onChangeSpeciesName={(e: ChangeEvent<HTMLInputElement>) => setSpeciesName(e.target.value)}
					/>
					<PlanetName 
						planetName={planetName}
						onChangePlanetName={(e: ChangeEvent<HTMLInputElement>) => setPlanetName(e.target.value)}
					/>
					<NumberOfBeings 
						numberOfBeings={numberOfBeings}
						onChangeNumberOfBeings={(e: ChangeEvent<HTMLInputElement>) => setNumberOfBeings(e.target.value)}
					/>
					<WhatIs2Plus2 
						whatIs2Plus2={whatIs2Plus2}
						onChangeWhatIs2Plus2={(e: ChangeEvent<HTMLSelectElement>) => setWhaIs2Plus2(e.target.value)}
					/>
					<ReasonForSparing 
						reasonForSparing={reasonForSparing}
						onChangeReasonForSparing={(e: ChangeEvent<HTMLTextAreaElement>) => setReasonForSparing(e.target.value)}
					/>
					<button type='submit'>Submit</button>
				</form>
			</section>
			<section>
				{formSubmission && (
					<DisplayFormData 
						speciesName={speciesName}
						planetName={planetName}	
						numberOfBeings={numberOfBeings}
						whatIs2Plus2={whatIs2Plus2}
						reasonForSparing={reasonForSparing}
					/>
				)}
			</section>
		</>
	);
};

export default W12MForm;
