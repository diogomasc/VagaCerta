import styled from "styled-components/native";
import theme from "../../theme";

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  width: 300px;
  padding: 20px;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  gap: 6px;
`;

export const ModalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: ${theme.COLORS.BLACK};
`;

export const ModalDescription = styled.Text`
  font-size: 14px;
  color: ${theme.COLORS.BLACK};
  margin-bottom: 12px;
`;

export const SmallButton = styled.View`
  flex: 1;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 12px;
`;
