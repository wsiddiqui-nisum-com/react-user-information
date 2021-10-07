// get our fontawesome imports
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import "../style.scss";

const UserDetails = (props) => {
  const { user, index } = props;


  // function is called whenever a row is clicked
  const handleRowExpansionClick = (e) => {
    let event = e.target.nodeName;
    //check whether user has clicked on the checkbox field or not
    if (event === "INPUT") {
      return;
    }
    const { index, toggleExpander } = props;
    toggleExpander(index);
  };

  /*function is called whenever a particular checkbox against a user
  is clicked or unclicked */
  const selectUser = () => {
    const { index, selectSpecificUser } = props;
    selectSpecificUser(index);
  };

  return [
    <tr key={index} onClick={(e) => handleRowExpansionClick(e)}>
      <td>
        <input
          onChange={selectUser}
          checked={user?.isSelected ? user.isSelected : false}
          type="checkbox"
        />
      </td>
      <td>{user.email}</td>
      <td>{user.nat}</td>
      <td>{user.registered}</td>
      <td>
        {!user.isExpanded ? (
          <DownOutlined className="icon" />
        ) : (
          <UpOutlined className="icon" />
        )}
      </td>
    </tr>,
    user.isExpanded && (
      <tr className="expandable" key="tr-expander">
        <td colSpan={6}>
          <div>
            <div className="mainUser">
              <div className="username">
                <img
                  className="image-profile"
                  src={user.picture.large}
                  alt="avatar"
                />
              </div>
              <div className="userBasicInfo">
                <h4>
                  {(user.name.first + " " + user.name.last).toUpperCase()}
                </h4>
                <h6>
                  {(user.name.first + " " + user.name.last).toUpperCase()}
                </h6>
              </div>
            </div>
            <div className="userDetails">
              <p>USER DETAILS</p>
              <Table responsive="sm">
                <tbody>
                  <tr>
                    <td>Address</td>
                    <td>{user.location.street}</td>
                  </tr>
                  <tr>
                    <td>E-mail</td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <td>Date of Birth</td>
                    <td>{user.dob}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </td>
      </tr>
    ),
  ];
};

UserDetails.propTypes = {
  toggleExpander: PropTypes.func,
  selectSpecificUser: PropTypes.func,
  index: PropTypes.number,
  user: PropTypes.object,
};

UserDetails.defaultProps = {
  toggleExpander: null,
  selectSpecificUser: null,
  index: 0,
  user: null,
};

export default UserDetails;
