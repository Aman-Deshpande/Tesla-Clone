import React from "react";
import styled from "styled-components";
import SectionS from "./SectionS";
import SectionX from "./SectionX";
import SectionY from "./SectionY";
import SectionThree from "./SectionThree";
import SolarPanel from "./SolarPanel";
import SolarRoof from "./SolarRoof";
import Accessories from "./Accessories";

function Home() {
  return (
    <Container>
      <SectionS />
      <SectionY />
      <SectionThree />
      <SectionX />
      <SolarPanel />
      <SolarRoof />
      <Accessories />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;

export default Home;
