import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  background-color: #e2afef98;
  opacity: 128;
  padding: 4px;
  border-radius: 8px;
`;

export const TextTitle1 = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
  background-color: #fdfafa98;
  opacity: 128;
  padding: 8px;
  border-radius: 8px;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription1 = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
  background-color: #fdfafa98;
  opacity: 128;
  border: 12px;
  border-radius: 8px;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const StyledButton = styled.div`
position: relative;
background-color: purple;
border: 2px;
border-radius: 8px;
font-size: 18px;
color: whitesmoke;
padding: 20px;
text-align: center;
transition-duration: 0.4s;
text-decoration: none;
overflow: hidden;
cursor: pointer;
`;
