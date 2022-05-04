import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<ReasonForSparing />', () => {
  test('renders ReasonForSparing component', () => {
    const reasonForSparingProps = {
      reasonForSparing: '',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const reasonForSparingLabel = screen.getByLabelText(/^Reason for sparing:$/i);
    expect(reasonForSparingLabel).toBeInTheDocument();
  });

  test('displays the correct passed reasonForSparing prop', () => {
    const reasonForSparingProps = {
      reasonForSparing: 'There is still good in this world!',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('There is still good in this world!');
  });

  // test('changes the value when user types', async () => {
  //   const reasonForSparingProps = {
  //     reasonForSparing: 'Hello',
  //     isTouched: true,
  //     onChangeReasonForSparing: mockChange
  //   }
  //   render(<ReasonForSparing {...reasonForSparingProps} />);
  //   const input = screen.getByRole('textbox');
  //   expect(input).toHaveValue('Hello');
  //   userEvent.clear(input);
  //   await userEvent.type(input, 'There is still good in this world!');
  //   expect(input).toHaveValue('There is still good in this world!');
  // }); 
  
  test('calls onChange function when user types', async () => {
    const reasonForSparingProps = {
      reasonForSparing: '',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const input = screen.getByRole('textbox');
    const onChangeProp = reasonForSparingProps.onChangeFormHandler;
    input.onchange = onChangeProp;
    await userEvent.type(input, 'There is still good in this world!');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(34);
    // expect(input).toHaveValue('There is still good in this world!');
  });

  test('returns a valid reason for sparing of characters between 17 and 153', () => {
    const reasonForSparingProps = {
      reasonForSparing: 'There is still good in this world even in 2022.',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const reasonForSparingError = screen.queryByText(/ERROR - Reason for sparing must be between 17 and 153 characters./);
    expect(reasonForSparingError).not.toBeInTheDocument();
  });

  test('returns an invalid reason for sparing of characters between 17 and 153', () => {
    const reasonForSparingProps = {
      reasonForSparing: 'None',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const reasonForSparingError = screen.queryByText(/ERROR - Reason for sparing must be between 17 and 153 characters./);
    expect(reasonForSparingError).toBeInTheDocument();
  });
});