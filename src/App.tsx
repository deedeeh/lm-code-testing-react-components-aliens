import React from 'react';
import './App.css';
import W12MForm from './components/W12MForm';
import { useState, FormEvent, ChangeEvent } from 'react';
import W12MFormData from './components/W12MFormData';
import ThankYou from './components/ThankYou';
import DisplayFormData from './components/DisplayFormData';

const formDataDefaults = {
	speciesName: '',
	planetName: '',
	numberOfBeings: '',
	whatIs2Plus2: 'Select',
	reasonForSparing: ''
}

export const FormDataContext = React.createContext<W12MFormData>(formDataDefaults)

function App() {
	const [ formData, setFormData ] = useState<W12MFormData>(formDataDefaults);
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

	return (
		<FormDataContext.Provider value={formData}>
			{!formSubmission && (
			<>
				<h1>W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION</h1>
				<W12MForm 
					handleSubmit={handleSubmit} 
					onChangeFormHandler={onChangeFormHandler}
				/>
			</>
			)}
			{formSubmission && (
				<>
				<ThankYou />
				<DisplayFormData 
					speciesName={submittedData.speciesName}
					planetName={submittedData.planetName}
					numberOfBeings={submittedData.numberOfBeings}
					whatIs2Plus2={submittedData.whatIs2Plus2}
					reasonForSparing={submittedData.reasonForSparing}
				/>
				</>
			)}
		</FormDataContext.Provider>
	);
}

export default App;
