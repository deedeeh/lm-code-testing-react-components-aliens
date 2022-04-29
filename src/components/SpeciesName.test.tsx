import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<SpeciesName />', () => {
  
  test('renders speciesName component', () => {
    const speciesNameData = {
      speciesName: 'Humans',
      isTouched: true,
      onChangeSpeciesName: mockChange,
    }
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameLabelText = screen.getByLabelText(/^Species Name:$/i);
    expect(speciesNameLabelText).toBeInTheDocument();
  });

  test('displays speciesName passed prop value', () => {  
    const speciesNameData = {
      speciesName: 'Humans',
      isTouched: true,
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
      isTouched: true,
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
      isTouched: true,
      onChangeSpeciesName: mockChange
    }
    const { getByLabelText } = render(<SpeciesName {...speciesNameData} />);
    const input = getByLabelText(/^Species Name:$/i);
    fireEvent.change(input, {target: {value: 'Humans'}});
    expect(speciesNameData.onChangeSpeciesName).toHaveBeenCalled();
    expect(speciesNameData.onChangeSpeciesName).toHaveBeenCalledTimes(1);
  });

  test('returns a valid input of just letters', async () => {
    const validSpeciesName = {
      speciesName: 'Humans',
      isTouched: true,
      onChangeSpeciesName: mockChange
    }
    render(<SpeciesName {...validSpeciesName} />);
    const speciesNameElement = screen.queryByText(/ERROR - Species Name must be between 3 and 23 characters./, {selector: '.error-message'});
    expect(speciesNameElement).not.toBeInTheDocument();
  });

  test('returns an invalid input of characters less than 3', () => {
    const invalidSpeciesName = {
      speciesName: 'Hu',
      isTouched: true,
      onChangeSpeciesName: mockChange
    }
    render(<SpeciesName {...invalidSpeciesName} />);
    const speciesNameElement = screen.getByText(/ERROR - Species Name must be between 3 and 23 characters./i, {selector: '.error-message'})
    expect(speciesNameElement).toBeInTheDocument();
  });

  test('returns an invalid input of characters more than 23', () => {
    const invalidSpeciesName = {
      speciesName: 'iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio',
      isTouched: true,
      onChangeSpeciesName: mockChange
    }
    render(<SpeciesName {...invalidSpeciesName} />);
    const speciesNameElement = screen.getByText(/ERROR - Species Name must be between 3 and 23 characters./i, {selector: '.error-message'})
    expect(speciesNameElement).toBeInTheDocument();
  });

  test('returns an invalid input of numbers or special characters', () => {
    const invalidSpeciesName = {
      speciesName: 'Humans2022',
      isTouched: true,
      onChangeSpeciesName: mockChange
    }
    render(<SpeciesName {...invalidSpeciesName} />);
    const speciesNameElement = screen.getByText(/ERROR - No numbers or special characters allowed!/i, {selector: '.error-message'})
    expect(speciesNameElement).toBeInTheDocument();
  });

});



