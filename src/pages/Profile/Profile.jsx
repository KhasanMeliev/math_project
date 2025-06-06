import React from "react";
import "./Profile.style.js";
import { Card, Tests, Texts, Wrapper } from "./Profile.style.js";

const Profile = (props) => {
  const { values } = props;

  return (
    <Wrapper>
      <Card>
        <Texts>
          <img
            src="https://thumbs.dreamstime.com/b/programmer-computer-expert-chalk-white-icon-black-background-programmer-computer-expert-chalk-white-icon-black-background-215232463.jpg"
            alt="erta"
          />
          <h1>{values.username}</h1>
          <p>{values.class}-sinf</p>
        </Texts>
        <Tests>
          <p>93-maktab</p>
        </Tests>
      </Card>
    </Wrapper>
  );
};

export default Profile;
