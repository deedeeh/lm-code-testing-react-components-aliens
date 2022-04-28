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

  // test('returns a valid planet name', () => {
  //   const validplanetName = {
  //     planetName: 'Earth2022',
  //     onChangePlanetName: mockChange
  //   }
  //   render(<PlanetName {...validplanetName} />)
  //   const planetNameError = screen.getByText(/ERROR - Planet Name must be between 2 and 49 characters./);
  //   expect(planetNameError).not.toBeInTheDocument();
  // })

  // test('returns an invalid planet name of characters less than 2', async () => {
  //   const invalidplanetName = {
  //     planetName: 'K',
  //     onChangePlanetName: mockChange
  //   }
  //   const user = userEvent.setup();
  //   render(<PlanetName {...invalidplanetName} />);
  //   const planetNameElement = screen.getByText(/^Planet Name:$/i);
  //   await user.type(planetNameElement, invalidplanetName.planetName);
  //   expect(planetNameElement).toBeInTheDocument();
  //   expect(screen.getByText(/ERROR - Planet Name must be between 2 and 49 characters./i, {selector: 'error-message'})).toBeInTheDocument();
  // });
});