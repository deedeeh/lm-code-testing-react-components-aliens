import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import userEvent from '@testing-library/user-event';

describe('speciesName component', () => {
  const speciesNameData = {
    speciesName: 'Humans',
    onChangeSpeciesName: () => {}
  }
  
  test('renders speciesName label element', () => {
    render(<SpeciesName {...speciesNameData} />)
    const speciesNameLabelText = screen.getByLabelText(/^Species Name:$/i);
    expect(speciesNameLabelText).toBeInTheDocument();
  });

  test('displays speciesName passed prop value', () => {  
    render(<SpeciesName {...speciesNameData} />);
    const speciesNameElement = screen.getByRole('textbox');
    userEvent.type(speciesNameElement, speciesNameElement.value);
    expect(speciesNameElement).toHaveValue('Humans');
  });
});



