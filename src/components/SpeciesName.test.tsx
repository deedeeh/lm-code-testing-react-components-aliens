import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import userEvent from '@testing-library/user-event';

const mockedOnChangeSpeciesName = jest.fn();

describe('<SpeciesName />', () => {
  const speciesNameData = {
    speciesName: 'Humans',
    onChangeSpeciesName: mockedOnChangeSpeciesName,
  }
  
  test('renders speciesName component', () => {
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameLabelText = screen.getByLabelText(/^Species Name:$/i);
    expect(speciesNameLabelText).toBeInTheDocument();
  });

  test('displays speciesName passed prop value when typing', () => {  
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameElement = screen.getByRole('textbox');
    userEvent.type(speciesNameElement, speciesNameElement.value);
    expect(speciesNameElement).toHaveValue(speciesNameElement.value);
  });

  test('calls onChange function with passed onChangeSpeciesName prop', () => {
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameElement = screen.getByRole('textbox');
    const onChangeProp = speciesNameData.onChangeSpeciesName;
    speciesNameElement.onChange = onChangeProp;
    fireEvent.change(speciesNameElement, { target: { value: 'Aliens' } });
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(1);
  });
});



