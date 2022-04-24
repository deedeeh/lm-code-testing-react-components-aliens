import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<PlanetName />', () => {

  test('renders PlanetName component', () => {
    const planetNameData = {
      planetName: 'Earth',
      onChangePlanetName: mockChange
    }
    const { getByLabelText } = render(<PlanetName {...planetNameData} />);
    const planetNameLabelText = getByLabelText(/^Planet Name:$/i);
    expect(planetNameLabelText).toBeInTheDocument();
  });

  test('displays the correct passed prop value', () => {
    const planetNameData = {
      planetName: 'Earth',
      onChangePlanetName: mockChange
    }
    render(<PlanetName {...planetNameData} />);
    const planetNameInputValue = screen.getByLabelText(/^Planet Name:$/i);
    expect(planetNameInputValue).toHaveValue('Earth');
  });

  test('calls onChange function with passed onChangePlanetName prop', async () => {
    const planetNameData = {
      planetName: '',
      onChangePlanetName: mockChange
    }
    render(<PlanetName {...planetNameData} />);
    const planetNameElement = screen.getByRole('textbox');
    const onChangeProp = planetNameData.onChangePlanetName;
    planetNameElement.onchange = onChangeProp;
    await userEvent.type(planetNameElement, 'Mars');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(4);
  });
});