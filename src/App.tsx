import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import { GlobalStyle } from "./styles/global";
import styled from "styled-components";

export interface Task {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza horizontalmente */
  padding: 2rem;
  background: #f0f4f8;
  min-height: 100vh;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 1.5rem 2rem; /* diminui um pouco o padding */
  border-radius: 16px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem; /* espaço para o footer */

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
  }
`;

// Componente principal da aplicação
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");

  // Função para adicionar uma nova tarefa
  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      done: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  // Função para alternar o estado de conclusão de uma tarefa
  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  // Função para remover uma tarefa
  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Filtra as tarefas com base no filtro selecionado
  const filteredTasks = tasks.filter((t) =>
    filter === "all" ? true : filter === "done" ? t.done : !t.done
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Header />
          <TaskForm addTask={addTask} />
          <Filters filter={filter} setFilter={setFilter} />
          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        </Card>
      </Container>
    </>
  );
}
