import { render, screen } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<NumberOfBeings />', () => {

  test('renders NumberOfBeings component', () => {
    const { getByLabelText } = render(<NumberOfBeings />);
    const numberOfBeingsLabelText = getByLabelText(/^Number of beings:$/i);
    expect(numberOfBeingsLabelText).toBeInTheDocument();
  });

  test('displays the correct passed prop value', () => {
    const numberOfBeingsData = {
      numberOfBeings: '100 Million',
      onChangeNumberOfBeings: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsInputValue = screen.getByLabelText(/^Number of beings:$/i);
    expect(numberOfBeingsInputValue).toHaveValue('100 Million');
  });

  test('calls onChange function with passed onChangeNumberOfBeings prop', async () => {
    const numberOfBeingsData = {
      numberOfBeings: '',
      onChangeNumberOfBeings: mockChange
    }
    render(<NumberOfBeings {...numberOfBeingsData} />);
    const numberOfBeingsInput = screen.getByRole('textbox');
    const onChangeProp = numberOfBeingsData.onChangeNumberOfBeings;
    numberOfBeingsInput.onChange = onChangeProp;
    await userEvent.type(numberOfBeingsInput, '100 Million');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(11);
  });
});