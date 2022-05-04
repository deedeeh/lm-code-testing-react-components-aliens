import { FormEvent, ChangeEvent } from 'react';

export default interface FormProps {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	// onChangeSpeciesName: (e: ChangeEvent<HTMLInputElement>) => void;
	// onChangePlanetName: (e: ChangeEvent<HTMLInputElement>) => void;
	// onChangeNumberOfBeings: (e: ChangeEvent<HTMLInputElement>) => void;
	// onChangeWhatIs2Plus2: (e: ChangeEvent<HTMLSelectElement>) => void;
	// onChangeReasonForSparing: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onChangeFormHandler: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}