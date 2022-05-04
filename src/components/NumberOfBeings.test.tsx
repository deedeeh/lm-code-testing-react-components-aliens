import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<NumberOfBeings />', () => {

  test('renders NumberOfBeings component', () => {
    const numberOfBeingsData = {
      numberOfBeings: '1000000000',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    const { getByLabelText } = render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsLabelText = getByLabelText(/^Number of beings:$/i);
    expect(numberOfBeingsLabelText).toBeInTheDocument();
  });

  test('displays the correct passed prop value', () => {
    const numberOfBeingsData = {
      numberOfBeings: '1000000000',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsInputValue = screen.getByLabelText(/^Number of beings:$/i);
    expect(numberOfBeingsInputValue).toHaveValue('1000000000');
  });

  test('calls onChange function with passed onChangeNumberOfBeings prop', async () => {
    const numberOfBeingsData = {
      numberOfBeings: '1000000000',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsInput = screen.getByRole('textbox');
    const onChangeProp = numberOfBeingsData.onChangeFormHandler;
    numberOfBeingsInput.onchange = onChangeProp;
    await userEvent.type(numberOfBeingsInput, '1000000000');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(10);
  });

  test('returns a valid number of beings of a number more than 1,000,000,000', () => {
    const numberOfBeingsData = {
      numberOfBeings: '1000000000',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsError = screen.queryByText(/ERROR - Number of beings must be at least 1,000,000,000/);
    expect(numberOfBeingsError).not.toBeInTheDocument();
  });

  test('returns a valid number of beings of a number input', () => {
    const numberOfBeingsData = {
      numberOfBeings: '1000000000',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsError = screen.queryByText(/ERROR - Numbers ONLY!/);
    expect(numberOfBeingsError).not.toBeInTheDocument();
  });

  test('returns an invalid characters of number of beings', () => {
    const numberOfBeingsData = {
      numberOfBeings: '1 Million',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsError = screen.getByText(/ERROR - Numbers ONLY!/i, {selector: '.error-message'});
    expect(numberOfBeingsError).toBeInTheDocument();
  });

  test('returns an invalid number of beings which is less than 1,000,000,000', () => {
    const numberOfBeingsData = {
      numberOfBeings: '90000',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsError = screen.getByText(/ERROR - Number of beings must be at least 1,000,000,000/, {selector: '.error-message'});
    expect(numberOfBeingsError).toBeInTheDocument();
  });
  
});