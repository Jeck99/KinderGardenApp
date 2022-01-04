import React from "react";
import { Wrapper, Title, Button } from "../../styles/styles.component";
export default function ChildComponent() {
  return (
    <Wrapper>
      <Title>
        <div>Wellcom to Tech-Garden</div>
      </Title>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </Wrapper>
  );
}
