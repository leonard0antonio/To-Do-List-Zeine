import styled from "styled-components";

const Container = styled.header`
  background: linear-gradient(135deg, #2563eb, #1e40af);
  color: white;
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
  opacity: 0.9;
`;

//cabeçalho do app
export default function Header() {
  return (
    <Container>
      <Title>To-Do List Zeine</Title>
      <Subtitle> Organize suas tarefas de forma simples e elegante </Subtitle>
    </Container>
  );
}
