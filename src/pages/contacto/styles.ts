import styled from "styled-components";

export const Container=styled.section`

`;

export const FormContainer=styled.form`
margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: #0EE7B7;
    transition: 0.5s;
    width: fit-content;
    &:disabled {
      opacity: 0.5;
    }
    &:not(:disabled):hover {
        background-color: hsl(145, 90%, 94%);
    }
  }}
  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input=styled.input`
    height: 3rem;
    width: 100%;
    background:#1E253E;
    border:1px solid #313958;
    padding: 1.7rem 1.5rem;
    color:#0EE7B7;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline:none;
    transition:0.5s;

    &:focus{
        border-color:#0EE7B7;
    }
    &::placeholder {
        color: #0EE7B7;
      }
      @media (max-width: 450px) {
        padding: 1.4rem;
        font-size: 1rem;
      }
`;
export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: #1E253E;
  border: 1px solid #313958;
  padding: 1.7rem 1.5rem;
  color: #0EE7B7;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1 / 3;
  &:focus {
    border-color: #0EE7B7;
  }
  &::placeholder {
    color: #0EE7B7;
  }
  @media (max-width: 700px) {
    grid-column: 1;
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;