import styled from "styled-components";

const StyledGallery = styled.section`
  min-height: 100vh;
  .galery-image-container {
    width: 20rem;
    height: 15rem;
    background: var(--backgroundLightColor);
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px;
    margin: 5px;
  }
  li {
    list-style: none;

    margin: 0.5rem;
    padding: 0px;
  }
`;
const StyledContainer = styled.div`
  padding: 3%;
`;

const StyledCategoryTittle = styled.div`
  text-decoration: none !important;
  transition: all 0.5s;
  position: absolute;
  color: var(--mainColorFont) !important;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  :hover {
    color: var(--mainColorFont);
    transition: all 0.4s ease 0s;
  }
`;

const StyledFormGroup = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
  span {
    margin-left: 1rem;
  }
`;

const StyledLabel = styled.label`
  background: var(--backgroundProfile);
  ${(props) => (props.error ? "border: #f55757 solid 1px" : null)}
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid var(--backgroundProfile);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  :hover {
    background: var(--backgroundProfile);
    transition: 0.15s ease-in-out;
  }
`;

export {
  StyledContainer,
  StyledCategoryTittle,
  StyledGallery,
  StyledFormGroup,
  StyledLabel,
};
