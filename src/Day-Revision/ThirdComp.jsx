import styled from "styled-components";

const Wrapper = styled.div`
  background-color: olive;
  color: #800029;
  padding: 12px;
`;

const Text = styled.p`
  color: bisque;
  font-size: 20px;
`;

function ThirdComp() {
  return (
    <>
      <Wrapper>
        <Text>I'm a Third component</Text>
      </Wrapper>
    </>
  );
}

export default ThirdComp;
