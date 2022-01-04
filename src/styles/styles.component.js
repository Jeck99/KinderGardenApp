import styled from "styled-components";
// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: #9fbcba;
  height: 100vh;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;
export const Button = styled.button`
  background: ${(props) => (props.primary ? "#0d6675" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0d6675")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #eeeeee;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #0d6675;
`;
