import TaskItem from "./TaskItem";
import type { Task } from "../App";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Empty = styled.p`
  text-align: center;
  color: #6b7280;
`;

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

// Componente para listar as tarefas
export default function TaskList({
  tasks,
  toggleTask,
  removeTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <Empty>Nenhuma tarefa encontrada</Empty>;
  }

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </List>
  );
}
