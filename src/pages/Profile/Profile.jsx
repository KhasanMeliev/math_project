import React from "react";
import "./Profile.style.js";
import { Tests, Texts, Wrapper } from "./Profile.style.js";
import { Card } from "@mantine/core";

const Profile = () => {
  return (
    <Wrapper>
      <Card>
        <Texts>
          <h1>Hasan</h1>
          <p>8-sinf</p>
        </Texts>
        <Tests>
          <h1>Yechgan testlari</h1>
        </Tests>
      </Card>
    </Wrapper>
  );
};

export default Profile;
