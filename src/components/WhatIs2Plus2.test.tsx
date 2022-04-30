import { fireEvent, render, screen } from '@testing-library/react';
import WhatIs2Plus2 from './WhatIs2Plus2';

const mockChange = jest.fn();

describe('<WhatIs2Plus2 />', () => {
  test('renders WhatIs2Plus2 component', () => {
    const whatIs2Plus2Props = {
      whatIs2Plus2: 'Not 4',
      isTouched: true,
      onChangeWhatIs2Plus2: mockChange
    }
    render(<WhatIs2Plus2 {...whatIs2Plus2Props} />);
    const whatIs2Plus2Select = screen.getByLabelText(/^What is 2 \+ 2\?$/i);
    expect(whatIs2Plus2Select).toBeInTheDocument();
  });

  test('displays the correct passed whatIs2Plus2 prop', () => {
    const whatIs2Plus2Props = {
      whatIs2Plus2: 'Not 4',
      isTouched: true,
      onChangeWhatIs2Plus2: mockChange
    }
    render(<WhatIs2Plus2 {...whatIs2Plus2Props} />);
    const whatIs2Plus2Select = screen.getByLabelText(/^What is 2 \+ 2\?$/i);
    expect(whatIs2Plus2Select).toHaveValue('Not 4');
  });

  test('calls onChange function when user select another option', () => {
    const whatIs2Plus2Props = {
      whatIs2Plus2: 'Not 4',
      isTouched: true,
      onChangeWhatIs2Plus2: mockChange
    }
    const onChangeProp = whatIs2Plus2Props.onChangeWhatIs2Plus2;
    render(<WhatIs2Plus2 {...whatIs2Plus2Props} />);
    const whatIs2Plus2Select = screen.getByLabelText(/^What is 2 \+ 2\?$/i);
    fireEvent.change(whatIs2Plus2Select, { target: { value: '4' } });
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(1);
  });

  test('returns valid what is 2 + 2 of option 4', () => {
    const whatIs2Plus2Props = {
      whatIs2Plus2: '4',
      isTouched: true,
      onChangeWhatIs2Plus2: mockChange
    }
    render(<WhatIs2Plus2 {...whatIs2Plus2Props} />);
    const whatIs2Plus2Error = screen.queryByText(/ERROR - Sorry that is the wrong answer!/);
    expect(whatIs2Plus2Error).not.toBeInTheDocument();
  });

  test('returns invalid what is 2 + 2 of option Not 4', () => {
    const whatIs2Plus2Props = {
      whatIs2Plus2: 'Not 4',
      isTouched: true,
      onChangeWhatIs2Plus2: mockChange
    }
    render(<WhatIs2Plus2 {...whatIs2Plus2Props} />);
    const whatIs2Plus2Error = screen.queryByText(/ERROR - Sorry that is the wrong answer!/);
    expect(whatIs2Plus2Error).toBeInTheDocument();
  });

  test('returns invalid what is 2 + 2 of option Select', () => {
    const whatIs2Plus2Props = {
      whatIs2Plus2: 'Select',
      isTouched: true,
      onChangeWhatIs2Plus2: mockChange
    }
    render(<WhatIs2Plus2 {...whatIs2Plus2Props} />);
    const whatIs2Plus2Error = screen.queryByText(/Please select an answer./);
    expect(whatIs2Plus2Error).toBeInTheDocument();
  });
});