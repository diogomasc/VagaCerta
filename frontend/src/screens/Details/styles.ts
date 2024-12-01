import { styled } from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN};
  margin-top: 6%;
`;

export const HeaderButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;
export const ButtonIcon = styled.View``;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  width: 100%;
  gap: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const RegistrationDate = styled.Text`
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
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const InfoLabel = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-right: 8px;
`;

export const InfoValue = styled.Text<{ status?: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ status, theme }) =>
    status !== undefined
      ? status
        ? theme.COLORS.BLUE
        : theme.COLORS.RED
      : theme.COLORS.BLACK};
`;
