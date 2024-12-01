import { Image } from "react-native";
import {
  Wrapper,
  Container,
  Form,
  TextContainer,
  TextBlack,
  TextLink,
  TextLinkContainer,
} from "./styles";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      await signIn(email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: "Auth", params: { screen: "Home" } }],
      });
    } catch (error) {
      alert("E-mail ou senha inválidos!");
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Image source={BGTop} />
      <Container>
        <Form>
          <Logo />
          <Input
            label="E-mail"
            placeholder="digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            label="Senha"
            placeholder="digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            title="Entrar"
            noSpacing={true}
            variant="primary"
            onPress={handleLogin}
          />
          <TextContainer>
            <TextBlack>Não tem uma conta?</TextBlack>
            <TextLinkContainer
              onPress={() => navigation.navigate("FormScreen")}
            >
              <TextLink>Criar conta</TextLink>
            </TextLinkContainer>
          </TextContainer>
        </Form>
      </Container>
    </Wrapper>
  );
}
