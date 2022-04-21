import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<SpeciesName />', () => {
  
  test('renders speciesName component', () => {
    render(<SpeciesName />);
    const speciesNameLabelText = screen.getByLabelText(/^Species Name:$/i);
    expect(speciesNameLabelText).toBeInTheDocument();
  });

  test('displays speciesName passed prop value', () => {  
    const speciesNameData = {
      speciesName: 'Humans',
      onChangeSpeciesName: mockChange,
    }
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameElement = screen.getByRole('textbox');
    userEvent.type(speciesNameElement, speciesNameElement.value);
    expect(speciesNameElement).toHaveValue('Humans');
  });

  test('calls onChange function with passed onChangeSpeciesName prop', async () => {
    const speciesNameData = {
      speciesName: '',
      onChangeSpeciesName: mockChange
    }
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameElement = screen.getByRole('textbox');
    const onChangeProp = speciesNameData.onChangeSpeciesName;
    speciesNameElement.onChange = onChangeProp;
    await userEvent.type(speciesNameElement, 'Humans');
    expect(onChangeProp).toHaveBeenCalled();
    // expect(onChangeProp).toHaveBeenCalledTimes(6);
  });

  test('calls onChange function with passed onChangeSpeciesName prop', () => {
    const speciesNameData = {
      speciesName: '',
      onChangeSpeciesName: mockChange
    }
    const { getByLabelText } = render(<SpeciesName {...speciesNameData} />);
    const input = getByLabelText(/^Species Name:$/i);
    fireEvent.change(input, {target: {value: 'Humans'}});
    expect(speciesNameData.onChangeSpeciesName).toHaveBeenCalled();
    expect(speciesNameData.onChangeSpeciesName).toHaveBeenCalledTimes(1);
  });

});



