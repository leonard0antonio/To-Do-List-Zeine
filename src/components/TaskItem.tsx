import React from "react";
import styled from "styled-components";
import type { Task } from "../App";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

const Item = styled.li<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: ${({ done }) => (done ? "#e0f2fe" : "#f9fafb")};
  border-left: 4px solid ${({ done }) => (done ? "#16a34a" : "#2563eb")};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Text = styled.span<{ done: boolean }>`
  font-size: 1rem;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const Time = styled.span`
  font-size: 0.8rem;
  color: #64748b;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ef4444;
  font-size: 1.2rem;
  transition: color 0.2s;

  &:hover {
    color: #dc2626;
  }
`;

// Props do componente TaskItem
interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}
// Componente para exibir uma tarefa individual
const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  removeTask,
}) => {
  
  return (
    <Item done={task.done} onClick={() => toggleTask(task.id)}>
      <Left>
        <TopRow>
          {task.done && <FaCheckCircle color="#16a34a" />}
          <Text done={task.done}>{task.text}</Text>
        </TopRow>
        <Time>
          Criada em {new Date(task.createdAt).toLocaleDateString()} às{" "}
          {new Date(task.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Time>
      </Left>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          removeTask(task.id);
        }}
      >
        <FaTrash />
      </Button>
    </Item>
  );
};

export default TaskItem;
