import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";

const Profile = () => {
  const { auth } = useContext(appContext);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    auth.getProfile((profile) => {
      setProfile(profile);
    });
  }, [auth]);

  if (!profile) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>profile</h1>
      <>
        <p>{profile.name}</p>
        <p>{profile.nickname}</p>
        <img src={profile.picture} alt="profile-pic" />
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      </>
    </div>
  );
};
export default Profile;
