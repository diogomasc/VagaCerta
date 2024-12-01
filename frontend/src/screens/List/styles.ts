import { styled } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
`;

export const ListContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const TextVagas = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 8px;
`;

export const LoadingText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_02};
  text-align: center;
  margin-top: 24px;
`;
