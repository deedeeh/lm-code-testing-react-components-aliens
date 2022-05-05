import W12MFormData from './W12MFormData';

const DisplayFormData: React.FC<W12MFormData> = ({ speciesName, planetName, numberOfBeings, whatIs2Plus2, reasonForSparing}) => 
  <div>
    <h2>Here are your answers:</h2>
    <p>Species Name: {speciesName}</p>
    <p>Planet Name: {planetName}</p>
    <p>Number of beings: {numberOfBeings}</p>
    <p>What is 2 + 2? {whatIs2Plus2}</p>
    <p>Reason for sparing: {reasonForSparing}</p>
  </div>

export default DisplayFormData;