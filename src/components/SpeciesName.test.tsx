import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

describe('speciesName component', () => {
  const spciesNameData = {
    speciesName: 'Humans',
    onChangeSpeciesName: () => {}
  }
  test('renders speciesName label element', () => {
    render(<SpeciesName {...spciesNameData} />)
    const speciesNameLabelText = screen.getByLabelText(/^Species Name:$/i);
    expect(speciesNameLabelText).toBeInTheDocument();
  });

  test('displays speciesName passed prop value', () => {
    render(<SpeciesName {...spciesNameData} />)
    const speciesNameInputValue = screen.getByDisplayValue(/Humans/i);
    expect(speciesNameInputValue).toBeInTheDocument();
  });
})



