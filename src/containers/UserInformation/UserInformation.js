import Table from "react-bootstrap/Table";
import { UserInformationContainer } from "./style";
import { useState } from "react";
import UserDetails from "../UserDetails/UserDetails";
import PropTypes from "prop-types";
const UserInformation = (props) => {
  const { userData } = props;
  const [users, setUsers] = useState(userData);

  //Updates the value of a row (isExpanded) which was selected
  const toggleExpander = (index) => {
    let updatedUsers = Object.assign([{}], users);
    /* save the new value of row which will be implemented
    either to expand or collapse
    */
    let isExpanded = !updatedUsers[index].isExpanded;

    // close any other row if previously opened
    updatedUsers.forEach(function (element, index) {
      element.isExpanded = false;
    });
    //update the value of the selected row
    updatedUsers[index].isExpanded = isExpanded;
    setUsers(updatedUsers);
  };

  /*
  function gets triggered when clicked on the main checkbox
  (located with the headers) and selects or unselects all
   rows based on selection
  */
  const selectAllUsers = (e) => {
    let isChecked = e.target.checked;
    let updatedUsers = Object.assign([{}], users);
    if (isChecked) {
      updatedUsers.forEach(function (element) {
        element.isSelected = true;
      });
    } else {
      updatedUsers.forEach(function (element) {
        element.isSelected = false;
      });
    }
    setUsers(updatedUsers);
  };

  /* 
  Updates the isSelected value of a particular row whenever its
  correspoding checkbox is clicked or unclicked
  */
  const selectSpecificUser = (index) => {
    let updatedUsers = Object.assign([{}], users);
    updatedUsers[index].isSelected = !updatedUsers[index].isSelected;
    setUsers(updatedUsers);
  };

  return (
    <UserInformationContainer>
      <Table className="table-container" responsive="md" striped>
        <thead>
          <tr>
            <th>
              {users.length > 0 && (
                <input onChange={(e) => selectAllUsers(e)} type="checkbox" />
              )}
            </th>
            <th>USER</th>
            <th>GROUP</th>
            <th>LAST ACTIVE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            //    Custom Component
            <UserDetails
              key={user.id}
              toggleExpander={toggleExpander}
              selectSpecificUser={selectSpecificUser}
              index={index}
              user={user}
            ></UserDetails>
          ))}
        </tbody>
      </Table>
    </UserInformationContainer>
  );
};

UserInformation.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object),
};

UserInformation.defaultProps = {
  userData: [],
};

export default UserInformation;
