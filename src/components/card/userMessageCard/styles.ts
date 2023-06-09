import styled from "styled-components";

export const UserMessageContainer = styled.ul`
  width: 100%;
  background-color: var(--gray5);
  display: flex;
  flex-direction: column;
`;

export const StyledUserMessageCard = styled.li`
  background-color: var(--gray4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 22px;
  border-radius: var(--radius1);
  padding: 8px;

  h3 {
    color: var(--fixed-white);
    font-size: var(--font4);
    margin-bottom: 12px;
  }

  p {
    color: var(--gray1);
    font-size: var(--font5);
  }

  figure {
    height: 70px;
    width: 70px;
    border-radius: 100%;
    border: 1px solid var(--color-primary);
    margin-right: 12px;
  }

  img {
    height: 100%;
    width: 68px;
    border-radius: 100%;
    object-fit: cover;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 25px;
    height: 25px;
    font-size: var(--font6);

    border-radius: 100%;

    background-color: var(--color-primary);
    color: var(--fixed-white);
  }
`;

export const UserMessageContact = styled.div`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MessageCounter = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 10px;
    color: var(--color-primary);
  }
`;
