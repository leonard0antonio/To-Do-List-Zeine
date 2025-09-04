import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 500px;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    outline: 2px solid #2563eb;
    border-color: #2563eb;
  }
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

interface TaskFormProps {
  addTask: (text: string) => void;
}

// Componente para o formulário de adicionar tarefas
export default function TaskForm({ addTask }: TaskFormProps) {
  const [text, setText] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <Button type="submit">Adicionar</Button>
      </Form>
    </Container>
  );
}
