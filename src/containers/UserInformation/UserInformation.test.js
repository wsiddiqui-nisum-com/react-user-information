import UserInformation from './UserInformation';
import { render, screen} from '@testing-library/react';


describe('User Information Component', () => {
test('renders Table Headers', () =>{

    render(<UserInformation />);

    const userElement = screen.getByText(/user/i);
    expect(userElement).toBeInTheDocument();
    const groupElement = screen.getByText(/group/i);
    expect(groupElement).toBeInTheDocument();
    const lastActiveElement = screen.getByText(/last active/i);
    expect(lastActiveElement).toBeInTheDocument();

});

});