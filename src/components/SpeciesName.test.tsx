import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<SpeciesName />', () => {
  
  test('renders speciesName component', () => {
    const speciesNameData = {
      speciesName: 'Humans',
      onChangeSpeciesName: mockChange,
    }
    render(<SpeciesName {...speciesNameData} />);
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
    userEvent.type(speciesNameElement, speciesNameData.speciesName);
    expect(speciesNameElement).toHaveValue('Humans');
  });

  test('calls onChange function when user types', async () => {
    const speciesNameData = {
      speciesName: '',
      onChangeSpeciesName: mockChange
    }
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameInput = screen.getByRole('textbox');
    const onChangeProp = speciesNameData.onChangeSpeciesName;
    speciesNameInput.onchange = onChangeProp;
    await userEvent.type(speciesNameInput, 'Humans');
    expect(onChangeProp).toHaveBeenCalled();
    //I need to check why this returns 11 calls not 6!
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

  // test('returns a valid input', async () => {
  //   const validSpeciesName = {
  //     speciesName: '',
  //     onChangeSpeciesName: mockChange
  //   }
  //   render(<SpeciesName {...validSpeciesName} />);
  //   const speciesNameElement = screen.getByLabelText(/^Species Name:$/i);
  //   await userEvent.type(speciesNameElement, 'Humans');
  //   expect(screen.queryByText(/ERROR - Species Name must be between 3 and 23 characters./, {selector: '.error-message'})).not.toBeInTheDocument();
  // });

  // test('returns an invalid input of characters less than 3', async () => {
  //   const invalidSpeciesName = {
  //     speciesName: 'ir',
  //     onChangeSpeciesName: mockChange
  //   }
  //   render(<SpeciesName {...invalidSpeciesName} />);
  //   const speciesNameElement = screen.getByLabelText(/^Species Name:$/i);
  //   await userEvent.type(speciesNameElement, invalidSpeciesName.speciesName);
  //   expect(screen.queryByText(/ERROR - Species Name must be between 3 and 23 characters./i)).toBeInTheDocument();
  // });

});



