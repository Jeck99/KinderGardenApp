import React from "react";
import { Wrapper, Title, Button } from "../../styles/styles-props.component";

export default function TeacherComponent() {
  return (
    <Wrapper bg="yellow" co="red">
        Wrapper
      <Title>
        <div>Wellcom dear techer</div>
      </Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
}
