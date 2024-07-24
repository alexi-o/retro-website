import React from "react";
import { Box, Card, Text } from "retro-react";

const TextBox = () => {
  return (
    <div>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card
          alt="Image from Picsum"
          color="primary"
          header={
            <Text align="center" variant="h3">
              Greetings, mortal
            </Text>
          }
          image="https://picsum.photos/500/300"
          pattern="noise"
          sx={{
            maxHeight: "auto",
            maxWidth: "500px",
          }}
        >
          <Text variant="paragraph">I'm Alexi O'Hearn.</Text>
          <Text variant="paragraph">
            <br />I do software development.
          </Text>
          <Text variant="paragraph">
            <br />
            Let me know if you want to work together.
          </Text>
        </Card>
      </Box>
    </div>
  );
};

export default TextBox;
