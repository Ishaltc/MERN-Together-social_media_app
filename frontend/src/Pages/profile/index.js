import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import { profileReducer } from "../../functions/reducers";
import Cover from "./Cover";
import ProfilePictureInfos from "./ProfilePictureInfos";
import "./style.css";
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
  return (
    <div className="profile">
      <Header page="profile" />
      <div className="profile_top">
        <div className="profile_container">
          <Cover
            cover={profile.cover}
          />
          <ProfilePictureInfos profile={profile}/>
        </div>
      </div>
    </div>
  );
}
