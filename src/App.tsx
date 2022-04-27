import './App.css';
import W12MForm from './components/W12MForm';
import { useState, FormEvent, ChangeEvent } from 'react';
import SubmittedData from './components/SubmittedData';
import { SpeciesNameContext, PlanetNameContext, NumberOfBeingsContext, WhatIs2Plus2Context, ReasonForSparingContext, FormSubmissionContext, SubmittedDataContext} from './components/ReactContextHook'

function App() {
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

	const onChangeSpeciesName= (e: ChangeEvent<HTMLInputElement>) => setSpeciesName(e.target.value);
	const onChangePlanetName=(e: ChangeEvent<HTMLInputElement>) => setPlanetName(e.target.value);
	const onChangeNumberOfBeings= (e: ChangeEvent<HTMLInputElement>) => setNumberOfBeings(e.target.value);
	const onChangeWhatIs2Plus2= (e: ChangeEvent<HTMLSelectElement>) => setWhaIs2Plus2(e.target.value);
	const onChangeReasonForSparing= (e: ChangeEvent<HTMLTextAreaElement>) => setReasonForSparing(e.target.value);

	return (
		<SpeciesNameContext.Provider value={speciesName}>
			<PlanetNameContext.Provider value={planetName}>
				<NumberOfBeingsContext.Provider value={numberOfBeings}>
					<WhatIs2Plus2Context.Provider value={whatIs2Plus2}>
						<ReasonForSparingContext.Provider value={reasonForSparing}>
							<FormSubmissionContext.Provider value={formSubmission}>
								<SubmittedDataContext.Provider value={submittedData}>
									<h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
									<W12MForm 
										handleSubmit={handleSubmit} 
										onChangeSpeciesName={onChangeSpeciesName}
										onChangePlanetName={onChangePlanetName}
										onChangeNumberOfBeings={onChangeNumberOfBeings}
										onChangeWhatIs2Plus2={onChangeWhatIs2Plus2}	
										onChangeReasonForSparing={onChangeReasonForSparing}
									/>
								</SubmittedDataContext.Provider>
							</FormSubmissionContext.Provider>
						</ReasonForSparingContext.Provider>
					</WhatIs2Plus2Context.Provider>
				</NumberOfBeingsContext.Provider>
			</PlanetNameContext.Provider>
		</SpeciesNameContext.Provider>
	);
}

export default App;
