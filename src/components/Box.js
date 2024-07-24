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
        }}
      >
        <Card
          alt="Image from Picsum"
          color="primary"
          header={
            <Text align="center" variant="h3">
              Greetings, mortals
            </Text>
          }
          image="https://picsum.photos/500/200"
          pattern="noise"
          sx={{
            maxHeight: "500px",
            maxWidth: "500px",
          }}
        >
          <Text variant="paragraph">I'm Alexi. Thank you for stopping by.</Text>
        </Card>
      </Box>
    </div>
  );
};

export default TextBox;
