import styled from "styled-components";

export const CardProfile = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  border-radius: 10px;
  position: relative;
  padding: 1rem;

  background-color: ${({ theme }) => theme["base-profile"]};

  img {
    border-radius: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.725rem;
  justify-content: space-between;
`;

export const ProfileHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;

  span {
    color: ${({ theme }) => theme["white"]};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;

    color: ${({ theme }) => theme["blue"]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileBio = styled.div`
  display: flex;
  font-size: 0.725rem;
  flex-direction: column;
  gap: 0.725rem;
  justify-content: space-between;
  color: ${({ theme }) => theme["base-span"]};
`;

export const ProfileFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ProfileAccount = styled.div`
  display: flex;
  font-size: 0.725rem;
  align-items: center;
  gap: 0.25rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4rem;

  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 10px;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme["base-border"]};
    background-color: ${({ theme }) => theme["base-input"]};
    color: ${({ theme }) => theme["white"]};
  }
`;

export const SearchTitle = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme["base-title"]};
  font-weight: bold;
`;

export const PublishCount = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme["base-span"]};
`;

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  a {
    text-decoration: none;
  }
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme["base-post"]};
  height: 10rem;
  width: 22rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    h3 {
      font-size: 1rem;
      color: ${({ theme }) => theme["white"]};
      width: 60%;

      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    span {
      font-size: 0.725rem;
      color: ${({ theme }) => theme["base-span"]};
    }
  }

  p {
    font-size: 0.75rem;
    color: ${({ theme }) => theme["base-subtitle"]};

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  &:hover {
    transition: background-color 0.3s ease;
    background-color: ${({ theme }) => theme["hover-color"]};
  }
`;
