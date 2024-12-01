import React, { useState, useEffect } from "react";
import { Alert, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
} from "../Profile/styles";
import Logo from "../../components/Logo";
import theme from "../../theme";
import Input from "../../components/Input";
import { useAuth } from "../../context/AuthContext";
import {
  SaveButton,
  SaveButtonText,
  LogoutButton,
  LogoutButtonText,
} from "./styles";
import PasswordValidationModal from "../../components/PasswordValidationModal";

export default function Profile({ navigation }) {
  const { user, signOut, updateUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSave = async () => {
    setModalVisible(true);
  };

  const handleConfirmPassword = async (password: string) => {
    setModalVisible(false);
    if (password === user?.password) {
      const updatedData: Partial<User> = {};
      if (name !== user.name) updatedData.name = name;
      if (email !== user.email) updatedData.email = email;
      if (newPassword) updatedData.password = newPassword;

      const success = await updateUser(updatedData);
      if (success) {
        Alert.alert("Sucesso", "Informações salvas com sucesso!");
      } else {
        Alert.alert("Erro", "Falha ao atualizar as informações!");
      }
    } else {
      Alert.alert("Erro", "Senha incorreta!");
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirmação",
      "Você tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sim", onPress: signOut },
      ],
      { cancelable: true }
    );
  };

  return (
    <Wrapper>
      <Header>
        <HeaderButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon>
            <Feather size={16} name="chevron-left" color={theme.COLORS.BLUE} />
          </ButtonIcon>
          <ButtonText>Voltar</ButtonText>
        </HeaderButtonContainer>
        <Logo />
      </Header>

      <Container>
        <ContentContainer>
          <Input
            label="Nome"
            placeholder="Digite seu novo nome"
            value={name}
            onChangeText={setName}
          />
          <Input
            label="E-mail"
            placeholder="Digite seu novo e-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Nova Senha"
            placeholder="Digite sua nova senha"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showPassword}
            rightIcon={
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={16}
                color={theme.COLORS.BLACK}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
        </ContentContainer>

        <SaveButton onPress={handleSave}>
          <SaveButtonText>Salvar informações</SaveButtonText>
        </SaveButton>

        <LogoutButton onPress={handleLogout}>
          <LogoutButtonText>Logout</LogoutButtonText>
        </LogoutButton>
      </Container>
      <PasswordValidationModal
        visible={isModalVisible}
        onCancel={() => setModalVisible(false)}
        onConfirm={handleConfirmPassword}
      />
    </Wrapper>
  );
}
