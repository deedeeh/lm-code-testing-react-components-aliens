import React from 'react';
import W12MFormData from './W12MFormData';

const formDataDefaults = {
	speciesName: '',
	planetName: '',
	numberOfBeings: '',
	whatIs2Plus2: 'Select',
	reasonForSparing: ''
}

export const FormDataContext = React.createContext<W12MFormData>(formDataDefaults)

// export const SpeciesNameContext = React.createContext<string>('');
// export const PlanetNameContext = React.createContext<string>('');
// export const NumberOfBeingsContext = React.createContext<string>('');
// export const WhatIs2Plus2Context = React.createContext<string>('Select');
// export const ReasonForSparingContext = React.createContext<string>('');
export const FormSubmissionContext = React.createContext<boolean>(false);
export const SubmittedDataContext = React.createContext<W12MFormData>({speciesName: '', planetName: '', numberOfBeings: '', whatIs2Plus2: 'Select', reasonForSparing: ''});