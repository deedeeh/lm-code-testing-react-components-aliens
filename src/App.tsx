import './App.css';
import W12MForm from './components/W12MForm';
import { useState, FormEvent, ChangeEvent } from 'react';
import { FormDataContext, FormSubmissionContext, SubmittedDataContext } from './components/ReactContextHook'
import W12MFormData from './components/W12MFormData';

const formDataDefaults = {
	speciesName: '',
	planetName: '',
	numberOfBeings: '',
	whatIs2Plus2: 'Select',
	reasonForSparing: ''
}

function App() {
	const [ formData, setFormData ] = useState<W12MFormData>(formDataDefaults);
	// const [ speciesName, setSpeciesName ] = useState<string>('');
	// const [ planetName, setPlanetName ] = useState<string>('');
	// const [ numberOfBeings, setNumberOfBeings ] = useState<string>('');
	// const [ whatIs2Plus2, setWhaIs2Plus2 ] = useState<string>('Select');
	// const [ reasonForSparing, setReasonForSparing ] = useState<string>('');
	const [ formSubmission, setFormSubmission ] = useState<boolean>(false);
	const [ submittedData, setSubmittedData ] = useState<W12MFormData>(formDataDefaults);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmittedData(formData);
		setFormSubmission(true);
		resetForm();
	}

	const resetForm = () => {
		setFormData(formDataDefaults)
	}

	const onChangeFormHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const newFormData = {...formData};
		newFormData[e.target.id] = e.target.value;
		setFormData(newFormData);
	}

	// const onChangeSpeciesName= (e: ChangeEvent<HTMLInputElement>) => setSpeciesName(e.target.value);
	// const onChangePlanetName=(e: ChangeEvent<HTMLInputElement>) => setPlanetName(e.target.value);
	// const onChangeNumberOfBeings= (e: ChangeEvent<HTMLInputElement>) => setNumberOfBeings(e.target.value);
	// const onChangeWhatIs2Plus2= (e: ChangeEvent<HTMLSelectElement>) => setWhaIs2Plus2(e.target.value);
	// const onChangeReasonForSparing= (e: ChangeEvent<HTMLTextAreaElement>) => setReasonForSparing(e.target.value);

	return (
		<FormDataContext.Provider value={formData}>
			<FormSubmissionContext.Provider value={formSubmission}>
				<SubmittedDataContext.Provider value={submittedData}>
						<h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
						<W12MForm 
							handleSubmit={handleSubmit} 
							// onChangeSpeciesName={onChangeSpeciesName}
							// onChangePlanetName={onChangePlanetName}
							// onChangeNumberOfBeings={onChangeNumberOfBeings}
							// onChangeWhatIs2Plus2={onChangeWhatIs2Plus2}	
							// onChangeReasonForSparing={onChangeReasonForSparing}
							onChangeFormHandler={onChangeFormHandler}
						/>
				</SubmittedDataContext.Provider>
			</FormSubmissionContext.Provider>
		</FormDataContext.Provider>
	);
}

export default App;
