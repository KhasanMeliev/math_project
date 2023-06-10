import React from "react";
import "./Profile.style.js";
import { Card, Tests, Texts, Wrapper } from "./Profile.style.js";

const Profile = () => {
  return (
    <Wrapper>
      <Card>
        <Texts>
          <img
            src="https://thumbs.dreamstime.com/b/programmer-computer-expert-chalk-white-icon-black-background-programmer-computer-expert-chalk-white-icon-black-background-215232463.jpg"
            alt=""
          />
          <h1>Hasan Meliyev</h1>
          <p>8-sinf</p>
        </Texts>
        <Tests>
          <p>Urgut tuman ixtisoslashtirilgan maktabi</p>
        </Tests>
      </Card>
    </Wrapper>
  );
};

export default Profile;
