import { useRef, useState } from "react";
import ProfilePicture from "../../components/profilePicture.js";
import Friendship from "./Friendship.js";

export default function ProfilePictureInfos({
  profile,
  visitor,
  photos,
  setNewProfile,
}) {
  // console.log(profile);
  //console.log("0000000000000");
  // console.log(photos);
  const PRef = useRef(null);
  const [show, setShow] = useState(false);
  return (
    <div className="profile_img_wrap">
      {show && (
        <ProfilePicture
          setShow={setShow}
          PRef={PRef}
          photos={photos}
          setNewProfile={setNewProfile}
        />
      )}
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            ref={PRef}
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${profile.picture})`,
            }}
          ></div>
          {!visitor && (
            <div
              className="profile_circle hover1"
              onClick={() => setShow(true)}
            >
              <i className="camera_filled_icon"></i>
            </div>
          )}
        </div>
        <div className="profile_w_col">
          <div className="profile_name">
            {profile.first_name} {profile.last_name}
            {/* <div className="other_name">(Other name)</div> */}
          </div>
          <div className="profile_friend_count">
            {profile?.friends && (
              <div className="profile_card_count">
                {profile?.friends.length === 0
                  ? ""
                  : profile?.friends.length === 1
                  ? "1 Friend"
                  : `$profile?.friends.length} friends`}
              </div>
            )}
          </div>
          <div className="profile_friend_imgs">
            {profile?.friends &&
              profile.friends
                .slice(0, 6)
                .map((friend, i) => (
                  <img src={friend.picture} key={i} alt="" style={{transform:`translateX(${-i *7}px)`,zIndex:`${1}`}} />
                ))}
          </div>
        </div>
      </div>

      {visitor ? (
        <Friendship friendshipp={profile?.friendShip} profileId={profile._id} />
      ) : (
        <div className="profile_w_right">
          <div className="orange_btn">
            <img src="../../../icons/plus.png" alt="" className="invert" />
            <span>Add to story</span>
          </div>
          <div className="gray_btn">
            <i className="edit_icon"></i>
            <span>Edit Profile</span>
          </div>
        </div>
      )}
    </div>
  );
}
