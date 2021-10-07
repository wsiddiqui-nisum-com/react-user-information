import UserDetails from './UserDetails';
import {render, screen} from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

describe('User Details Component', () => {
    test('hide data when row is not clicked', () =>{

        let user = {
            email: "test123",
            picture: {
                large: "text",
            },
            name: {
                first: "waqas",
                last: "siddiqui",
            },
            phone: "12346",
            dob: "2021-01-01",
            location: {
                street: "abc",
            },
            isSelected: false,
            isExpanded: false,
            nat: 'tet',
            registered: "asdasd",
            
        };
        let index = 0;
        
        render(<UserDetails 
            index={index}
            user={user}/>);
    
        const userDetailsElement = screen.queryByText(/USER DETAILS/i);
        expect(userDetailsElement).toBeNull();
        const addressElement = screen.queryByText(/Address/i);
        expect(addressElement).toBeNull();
        const emailElement = screen.queryByText(/E-mail/i);
        expect(emailElement).toBeNull();
        const phoneElement = screen.queryByText(/Phone/i);
        expect(phoneElement).toBeNull();
        const dobElement = screen.queryByText(/Date of Birth/i);
        expect(dobElement).toBeNull();
    
    });


    test('show data when row is clicked', () =>{

        let user = {
            email: "test123",
            picture: {
                large: "text",
            },
            name: {
                first: "waqas",
                last: "siddiqui",
            },
            phone: "12346",
            dob: "2021-01-01",
            location: {
                street: "abc",
            },
            isSelected: false,
            isExpanded: false,
            nat: 'tet',
            registered: "asdasd",
            
        };
        let index = 0;
        const toggleExpander = jest.fn();
        const selectSpecificUser = jest.fn();
        const {rerender} = render(<UserDetails 
            index={index}
            toggleExpander={toggleExpander}
            selectSpecificUser={selectSpecificUser}
            user={user}/>);
        
        const rowExpand = screen.getByRole('row');
        UserEvent.click(rowExpand);
        user.isExpanded = true;
        rerender(<UserDetails 
            index={index}
            toggleExpander={toggleExpander}
            selectSpecificUser={selectSpecificUser}
            user={user}/>);
        const userDetailsElement = screen.queryByText(/USER DETAILS/i);
        expect(userDetailsElement).not.toBeNull();
        const addressElement = screen.queryByText(/Address/i);
        expect(addressElement).not.toBeNull();
        const emailElement = screen.queryByText(/E-mail/i);
        expect(emailElement).not.toBeNull();
        const phoneElement = screen.queryByText(/Phone/i);
        expect(phoneElement).not.toBeNull();
        const dobElement = screen.queryByText(/Date of Birth/i);
        expect(dobElement).not.toBeNull();
    
    });


});
