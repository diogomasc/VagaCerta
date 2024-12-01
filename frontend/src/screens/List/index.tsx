import React, { useState, useEffect } from "react";
import { Image, FlatList, View, Text } from "react-native";
import { Wrapper, Container, ListContainer, TextVagas } from "./styles";
import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import VagaCard from "../../components/VagaCard";
import api from "../../services/api";
import { JobProps } from "../../utils/Types";

export default function List() {
  const [jobs, setJobs] = useState<JobProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await api.get("/jobs");
        setJobs(response.data);
      } catch (error) {
        console.log("Erro ao buscar vagas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />

      <Container>
        <Logo />
        <TextVagas>{jobs.length} vagas encontradas!</TextVagas>
        <ListContainer>
          {isLoading ? (
            <Text>Carregando vagas...</Text>
          ) : (
            <FlatList
              data={jobs}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View>
                  <VagaCard
                    id={item.id}
                    title={item.title}
                    dataCreated={formatDate(item.registrationDate)}
                    company={item.company}
                    status={item.status}
                  />
                </View>
              )}
              showsVerticalScrollIndicator={true}
              ListEmptyComponent={() => (
                <View>
                  <Text>Você ainda não tem vagas cadastradas</Text>
                  <Text>Crie vagas.</Text>
                </View>
              )}
            />
          )}
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
