import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { profileReducer } from "../../functions/reducers";

export default function Profile() {
  const navigate = useNavigate();
  const { username } = useParams();
  const { user } = useSelector((state) => ({ ...state }));
  
  let userName = username === undefined ? user.username : username;
  console.log(userName);
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    //after passing function setting default value
    loading: false,
    profile: {},
    error: "",
  });
  //everything username change it sent the request then get info again
  useEffect(() => {
    getProfile();
  }, [userName]);

  const getProfile = async () => {
    try {
      dispatch({
        type: "PROFILE_REQUEST",
      });

      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (data === false) {
        navigate("/profile");
      } else {
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  console.log(profile);
  return <h1>profile</h1>;
}
