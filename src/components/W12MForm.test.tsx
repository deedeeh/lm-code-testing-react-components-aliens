import { render, fireEvent } from '@testing-library/react';
import W12MForm from './W12MForm';

const mockSubmit = jest.fn();

const formProps = {
	handleSubmit: mockSubmit,
	onChangeFormHandler: () => {}
}

test('renders form element', () => {
	const { container } = render(<W12MForm {...formProps} />);
	expect(container.firstChild).toHaveClass('w12MForm');
});

test('calls onSubmit handler when user clicks on submit button', () => {
	const { getByLabelText, getByTestId } = render(<W12MForm {...formProps} />);
	fireEvent.change(getByLabelText(/^Planet Name:$/i), { target: { value: 'Earth' } });
	fireEvent.submit(getByTestId('form'));
	expect(mockSubmit).toHaveBeenCalled();
	expect(mockSubmit).toHaveBeenCalledTimes(1);
}); 
