import React, { useState } from "react";
import { Modal } from "react-native";
import Input from "../Input";
import { Button } from "../Button";
import theme from "../../theme";
import {
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalDescription,
  ButtonContainer,
  SmallButton,
} from "./styles";

interface PasswordValidationModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: (password: string) => void;
}

const PasswordValidationModal: React.FC<PasswordValidationModalProps> = ({
  visible,
  onCancel,
  onConfirm,
}) => {
  const [password, setPassword] = useState("");

  const handleConfirm = () => {
    onConfirm(password);
    setPassword("");
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <ModalBackground>
        <ModalContainer>
          <ModalTitle>Confirmação</ModalTitle>
          <ModalDescription>
            Por favor, insira sua senha atual para confirmar as alterações:
          </ModalDescription>
          <Input
            label="Senha:"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
          />
          <ButtonContainer>
            <SmallButton>
              <Button
                title="Cancelar"
                onPress={onCancel}
                variant="secondary"
                style={{
                  backgroundColor: theme.COLORS.GRAY_02,
                  color: theme.COLORS.BLUE,
                }}
              />
            </SmallButton>
            <SmallButton>
              <Button title="Atualizar" onPress={handleConfirm} />
            </SmallButton>
          </ButtonContainer>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  );
};

export default PasswordValidationModal;
