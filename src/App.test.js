import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component",  () => {
  test('renders users when request is successful', async () => {
    const element = render(<App />);
    let data = await element.findAllByRole('table');
    expect(data).not.toHaveLength(0);
  });

  test('renders loading when request is in progress', async () => {
    const element = render(<App />);
    let data = element.getByText(/loading/i);
    expect(data).toBeInTheDocument();
  });


  test('renders no data found when api returns no data', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => []
    }); 
    render(<App />);
    let data = await screen.findByText(/No Data Found/i);
    expect(data).toBeInTheDocument();
  });
  
  


})
