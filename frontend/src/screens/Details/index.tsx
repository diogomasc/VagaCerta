import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { JobProps } from "../../utils/Types";
import { Feather } from "@expo/vector-icons";
import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
  Title,
  Description,
  InfoContainer,
  InfoLabel,
  InfoValue,
} from "../Details/styles";
import Logo from "../../components/Logo";
import theme from "../../theme";
import { Button } from "../../components/Button";
import { Linking } from "react-native";

export default function Details({ route, navigation }) {
  const [id, setId] = useState(route.params.id);
  const [job, setJob] = useState<JobProps>(null);

  const fetchJob = async () => {
    try {
      const response = await api.get(`/jobs/${id}`);
      const data = response.data;
      setJob({
        title: data.title,
        description: data.description,
        registrationDate: data.registrationDate,
        phone: data.phone,
        company: data.company,
        status: data.status,
      });
    } catch (error) {
      console.log("Erro ao buscar vaga de emprego:", error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [id]);

  // const handleContactPress = () => {
  //   if (job && job.phone) {
  //     const message = `Olá, estou interessado na vaga de ${job.title} na empresa ${job.company}.`;
  //     const url = `https://wa.me/${job.phone}?text=${encodeURIComponent(
  //       message
  //     )}`;
  //     Linking.openURL(url).catch((error) =>
  //       console.log("Erro ao abrir WhatsApp:", error)
  //     );
  //   }
  // };

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

      {job ? (
        <Container>
          <ContentContainer>
            <Title>{job.title}</Title>
            <Description>{job.description}</Description>
            <InfoContainer>
              <InfoLabel>
                <Feather name="calendar" size={16} color={theme.COLORS.BLACK} />{" "}
                Data de Cadastro:
              </InfoLabel>
              <InfoValue>
                {new Date(job.registrationDate).toLocaleDateString("pt-BR")}
              </InfoValue>
            </InfoContainer>
            {job.status && (
              <InfoContainer>
                <InfoLabel>
                  <Feather name="phone" size={16} color={theme.COLORS.BLACK} />{" "}
                  Contato:
                </InfoLabel>
                <InfoValue>{job.phone}</InfoValue>
              </InfoContainer>
            )}
            <InfoContainer>
              <InfoLabel>
                <Feather
                  name="briefcase"
                  size={16}
                  color={theme.COLORS.BLACK}
                />{" "}
                Empresa:
              </InfoLabel>
              <InfoValue>{job.company}</InfoValue>
            </InfoContainer>
            <InfoContainer>
              <InfoLabel>
                <Feather name="info" size={16} color={theme.COLORS.BLACK} />{" "}
                Status:
              </InfoLabel>
              <InfoValue status={job.status}>
                {job.status ? "Aberta" : "Encerrada"}
              </InfoValue>
            </InfoContainer>
            {job.status && (
              <Button
                title="Entrar em contato"
                noSpacing={true}
                variant="primary"
                onPress={handleContactPress}
              />
            )}
          </ContentContainer>
        </Container>
      ) : (
        <Container>
          <ContentContainer>
            <Title>Erro: Vaga não encontrada</Title>
          </ContentContainer>
        </Container>
      )}
    </Wrapper>
  );
}
