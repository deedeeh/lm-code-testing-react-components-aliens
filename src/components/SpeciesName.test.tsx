import { render, screen } from '@testing-library/react';
import SpeciesName from './SpeciesName';

test('renders speciesName label element', () => {
  const spciesNameData = {
    speciesName: 'Humans',
    onChangeSpeciesName: () => {}
  }
  render(<SpeciesName {...spciesNameData} />)
  const speciesNameLabelText = screen.getByLabelText(/^Species Name:$/i);
  expect(speciesNameLabelText).toBeInTheDocument();
});