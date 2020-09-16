import styled from "styled-components";

const StyledGallery = styled.section`
  min-height: 100vh;
  .galery-image-container {
    width: 20rem;
    height: 15rem;
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
  margin: 3%;
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

export { StyledContainer, StyledCategoryTittle, StyledGallery };
