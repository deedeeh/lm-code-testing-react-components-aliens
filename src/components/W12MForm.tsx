import { useContext } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIs2Plus2 from './WhatIs2Plus2';
import ReasonForSparing from './ReasonForSparing';
import DisplayFormData from './DisplayFormData';
import FormProps from './FormProps';
import { FormDataContext, FormSubmissionContext, SubmittedDataContext } from './ReactContextHook';

const W12MForm: React.FC<FormProps> = ({ 
	handleSubmit, onChangeFormHandler
}) => {
	const isTouched: boolean = false; 

	// const speciesName = useContext(SpeciesNameContext);
	// const planetName = useContext(PlanetNameContext);
	// const numberOfBeings = useContext(NumberOfBeingsContext);
	// const whatIs2Plus2 = useContext(WhatIs2Plus2Context);
	// const reasonForSparing = useContext(ReasonForSparingContext);
	const formData = useContext(FormDataContext);
	const formSubmission = useContext(FormSubmissionContext);
	const submittedData = useContext(SubmittedDataContext);

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
