import { render, screen } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<ReasonForSparing />', () => {
  test('renders ReasonForSparing component', () => {
    const reasonForSparingProps = {
      reasonForSparing: '',
      onChangeReasonForSparing: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const reasonForSparingLabel = screen.getByLabelText(/^Reason for sparing:$/i);
    expect(reasonForSparingLabel).toBeInTheDocument();
  });

  test('displays the correct passed reasonForSparing prop', () => {
    const reasonForSparingProps = {
      reasonForSparing: 'There is still good in this world!',
      onChangeReasonForSparing: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('There is still good in this world!');
  });

  // test('changes the value when user types', async () => {
  //   const reasonForSparingProps = {
  //     reasonForSparing: 'Hello',
  //     onChangeReasonForSparing: mockChange
  //   }
  //   render(<ReasonForSparing {...reasonForSparingProps} />);
  //   const input = screen.getByRole('textbox');
  //   expect(input).toHaveValue('Hello');
  //   await userEvent.clear(input);
  //   await userEvent.type(input, 'There is still good in this world!');
  //   expect(input).toHaveValue('There is still good in this world!');
  // }); 
  
  test('calls onChange function when user types', async () => {
    const reasonForSparingProps = {
      reasonForSparing: '',
      onChangeReasonForSparing: mockChange
    }
    render(<ReasonForSparing {...reasonForSparingProps} />);
    const input = screen.getByRole('textbox');
    const onChangeProp = reasonForSparingProps.onChangeReasonForSparing;
    input.onchange = onChangeProp;
    await userEvent.type(input, 'There is still good in this world!');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(34);
    // expect(input).toHaveValue('There is still good in this world!');
  });
});