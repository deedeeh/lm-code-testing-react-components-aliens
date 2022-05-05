import { FormEvent, ChangeEvent } from 'react';

export default interface FormProps {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	onChangeFormHandler: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}