import { useContext } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2Plus2 from './WhatIs2Plus2';
import ReasonForSparing from './ReasonForSparing';
import FormProps from './FormProps';
import { FormDataContext } from '../App';

const W12MForm: React.FC<FormProps> = ({ 
	handleSubmit, onChangeFormHandler
}) => {
	const isTouched: boolean = false; 

	const formData = useContext(FormDataContext);

	return (
		<>
			<section className='w12MForm'>
				<form onSubmit={handleSubmit} data-testid='form'>
					<W12MHeader />
					<SpeciesName 
						speciesName={formData.speciesName}
						isTouched={isTouched}
						onChangeFormHandler={onChangeFormHandler}
					/>
					<PlanetName 
						planetName={formData.planetName}
						isTouched={isTouched}
						onChangeFormHandler={onChangeFormHandler}
					/>
					<NumberOfBeings 
						numberOfBeings={formData.numberOfBeings}
						isTouched={isTouched}
						onChangeFormHandler={onChangeFormHandler}
					/>
					<WhatIs2Plus2 
						whatIs2Plus2={formData.whatIs2Plus2}
						isTouched={isTouched}
						onChangeFormHandler={onChangeFormHandler}
					/>
					<ReasonForSparing 
						reasonForSparing={formData.reasonForSparing}
						isTouched={isTouched}
						onChangeFormHandler={onChangeFormHandler}
					/>
					<button type='submit'>Submit</button>
				</form>
			</section>
		</>
	);
};

export default W12MForm;
