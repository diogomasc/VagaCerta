import { styled } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_02};
  width: 100%;
  border-radius: 16px;
  flex-direction: row;
  margin-bottom: 12px;
  elevation: 2;
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  gap: 4px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Data = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  opacity: 0.8;
`;

export const Company = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const StatusText = styled.Text<{ status: boolean }>`
  font-size: 14px;
  color: ${({ status, theme }) =>
    status ? theme.COLORS.BLUE : theme.COLORS.RED};
  font-weight: 500;
  background-color: ${({ status, theme }) =>
    status ? theme.COLORS.BLUE_LIGHT : theme.COLORS.RED_LIGHT};
  padding: 4px 8px;
  border-radius: 4px;
  display: inline;
  align-self: flex-start;
`;

export const OpenButton = styled.View`
  border-radius: 0 16px 16px 0;
  padding: 0 16px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_01};
`;
