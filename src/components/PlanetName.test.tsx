import { render, screen } from '@testing-library/react';
import PlanetName from './PlanetName';
import userEvent from '@testing-library/user-event';

const mockChange = jest.fn();

describe('<PlanetName />', () => {

  test('renders PlanetName component', () => {
    const planetNameData = {
      planetName: 'Earth',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    const { getByLabelText } = render(<PlanetName {...planetNameData} />);
    const planetNameLabelText = getByLabelText(/^Planet Name:$/i);
    expect(planetNameLabelText).toBeInTheDocument();
  });

  test('displays the correct passed prop value', () => {
    const planetNameData = {
      planetName: 'Earth',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<PlanetName {...planetNameData} />);
    const planetNameInputValue = screen.getByLabelText(/^Planet Name:$/i);
    expect(planetNameInputValue).toHaveValue('Earth');
  });

  test('calls onChange function with passed onChangePlanetName prop', async () => {
    const planetNameData = {
      planetName: '',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<PlanetName {...planetNameData} />);
    const planetNameElement = screen.getByRole('textbox');
    const onChangeProp = planetNameData.onChangeFormHandler;
    planetNameElement.onchange = onChangeProp;
    await userEvent.type(planetNameElement, 'Mars');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(4);
  });

  test('returns a valid number of characters for planet name', () => {
    const validplanetName = {
      planetName: 'Earth',
      isTouched: true,
      onChangeFormHandler: mockChange,
    }
    render(<PlanetName {...validplanetName} />)
    const planetNameError = screen.queryByText(/ERROR - Planet Name must be between 2 and 49 characters./);
    expect(planetNameError).not.toBeInTheDocument();
  });

  test('returns an invalid planet name of characters less than 2', async () => {
    const invalidplanetName = {
      planetName: 'E',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<PlanetName {...invalidplanetName} />);
    const planetNameError = screen.getByText(/ERROR - Planet Name must be between 2 and 49 characters./i, {selector: '.error-message'});
    expect(planetNameError).toBeInTheDocument();
  });

  test('returns an invalid planet name of characters more than 49', async () => {
    const invalidplanetName = {
      planetName: 'iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio',
      isTouched: true,
      onChangeFormHandler: mockChange
    }
    render(<PlanetName {...invalidplanetName} />);
    const planetNameError = screen.getByText(/ERROR - Planet Name must be between 2 and 49 characters./i, {selector: '.error-message'});
    expect(planetNameError).toBeInTheDocument();
  });

    test('returns a valid planet name with no special characters', () => {
    const validplanetName = {
      planetName: 'Earth2022',
      isTouched: true,
      onChangeFormHandler: mockChange,
    }
    render(<PlanetName {...validplanetName} />)
    const planetNameError = screen.queryByText(/ERROR - no special characters are allowed!/);
    expect(planetNameError).not.toBeInTheDocument();
  });

  test('returns an invalid planet name with special characters', () => {
    const validplanetName = {
      planetName: 'Earth()',
      isTouched: true,
      onChangeFormHandler: mockChange,
    }
    render(<PlanetName {...validplanetName} />)
    const planetNameError = screen.getByText(/ERROR - no special characters are allowed!/i, {selector: '.error-message'});
    expect(planetNameError).toBeInTheDocument();
  });
});