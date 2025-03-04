import styled from "styled-components";

export const PostInfos = styled.div`
  width: 100%;
  min-height: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 10px;
  position: relative;
  padding: 1rem;
  margin-bottom: 4rem;

  background-color: ${({ theme }) => theme["base-profile"]};

  h1 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme["base-title"]};
  }
`;

export const PostInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme }) => theme["blue"]};
    justify-content: center;
  }
`
export const PostInfoFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    font-size: 0.725rem;
    gap: 0.5rem;
    align-items: center;
    color: ${({ theme }) => theme["base-text"]};
    justify-content: center;
  }
`

export const ArticleContainer = styled.article`
  font-size: 1rem;
  padding: 2rem;

  * {
    margin-bottom: 1rem;
  }
`;
