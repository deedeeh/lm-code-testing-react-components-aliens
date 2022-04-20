import { useState, ChangeEvent, FormEvent } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2Plus2 from './WhatIs2Plus2';
import ReasonForSparing from './ReasonForSparing';
import DisplayFormData from './DisplayFormData';

export interface SubmittedData {
	speciesName: string;
	planetName: string;
	numberOfBeings: string;
	whatIs2Plus2: string;
	reasonForSparing: string;
}

const W12MForm = () => {
	const [ speciesName, setSpeciesName ] = useState<string>('');
	const [ planetName, setPlanetName ] = useState<string>('');
	const [ numberOfBeings, setNumberOfBeings ] = useState<string>('');
	const [ whatIs2Plus2, setWhaIs2Plus2 ] = useState<string>('Not 4');
	const [ reasonForSparing, setReasonForSparing ] = useState<string>('');
	const [ formSubmission, setFormSubmission ] = useState<boolean>(false);
	const [ submittedData, setSubmittedData ] = useState<SubmittedData>({speciesName, planetName, numberOfBeings, whatIs2Plus2, reasonForSparing});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmittedData({...submittedData, speciesName, planetName, numberOfBeings, whatIs2Plus2, reasonForSparing});
		setFormSubmission(true);
		resetForm();
	}

	const resetForm = () => {
		setSpeciesName('');
		setPlanetName('');
		setNumberOfBeings('');
		setWhaIs2Plus2('Not 4');
		setReasonForSparing('');
	}

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
						speciesName={submittedData.speciesName}
						planetName={submittedData.planetName}
						numberOfBeings={submittedData.numberOfBeings}
						whatIs2Plus2={submittedData.whatIs2Plus2}
						reasonForSparing={submittedData.reasonForSparing}
					/>
				)}
			</section>
		</>
	);
};

export default W12MForm;
