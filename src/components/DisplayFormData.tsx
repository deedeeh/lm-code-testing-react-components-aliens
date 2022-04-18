interface FormDataProps {
  speciesName: string;
  planetName: string;
  numberOfBeings: string;
  whatIs2Plus2: string;
  reasonForSparing: string;
}

const DisplayFormData: React.FC<FormDataProps> = ({ speciesName, planetName, numberOfBeings, whatIs2Plus2, reasonForSparing }) => 
  <div>
    <h2>Form Data</h2>
    <p>Species Name: {speciesName}</p>
    <p>Planet Name: {planetName}</p>
    <p>Number of beings: {numberOfBeings}</p>
    <p>What is 2 + 2? {whatIs2Plus2}</p>
    <p>Reason for sparing: {reasonForSparing}</p>
  </div>

export default DisplayFormData;