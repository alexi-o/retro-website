import React from "react";
import { Container } from "retro-react";

const PageContent = () => {
  return (
    <Container
      sx={{
        background: "lightgray",
        py: "10px",
      }}
    >
      <p
        style={{
          padding: "5px",
        }}
      >
        Beans and cornbread
      </p>
    </Container>
  );
};

export default PageContent;
