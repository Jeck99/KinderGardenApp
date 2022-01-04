import React from "react";
import styled from "styled-components";

export default function ParentComponent() {
  const Text = styled.h1`
    font-size: 40px;
    text-align: center;
    color: blue;
  `;
  const BiggerText = styled(Text)`
    font-size: 100px;
  `;
  return (
    <div>
      <Text>Wellcom dear</Text>
      <BiggerText>perant</BiggerText>
    </div>
  );
}
