import "./App.scss";
import { useEffect, useState } from "react";
import UserService from "../src/services/UserServices";
import UserInformation from "./containers/UserInformation/UserInformation";
import Loading from "./common/components/Loading/Loading";
import NoDataAvailable from "./common/components/NoDataAvailable/NoDataAvailable";
import ErrorPage from "./common/components/ErrorPage/ErrorPage";

//Main Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setIsError] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
      UserService.getUsers()
        .then((res) => {
          res.results.forEach(function (element, index) {
            element.isExpanded = false;
            element.isSelected = false;
            element.id = index+1;
          });
          setIsLoading(false);
          setUserData(res.results);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
          console.log("Error: ", err);
        });
  }, []);

  let content = <Loading></Loading>;

  if(isLoading) {
     // Loader Component;
    content = <Loading></Loading>;
  }
  if(!isLoading && hasError) {
    // If error is thrown from the API;
   content = <ErrorPage></ErrorPage>;
  }
  if(!isLoading && !hasError && userData.length === 0) {
     // If no data is returned from the API;
    content = <NoDataAvailable></NoDataAvailable> 
  }
  
  if(!isLoading && !hasError && userData.length > 0) {
    // Custom Component having userData as a props
    content = <UserInformation userData={userData}></UserInformation>   
  }
  return (
    <div className="App">
      {content}
    </div>
  );
};

export default App;
