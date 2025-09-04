import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button<{ active: boolean }>`
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.9rem;
  border: none;
  transition: 0.2s;
  cursor: pointer;
  background: ${({ active }) => (active ? "#2563eb" : "#e5e7eb")};
  color: ${({ active }) => (active ? "#fff" : "#374151")};

  &:hover {
    background: ${({ active }) => (active ? "#1d4ed8" : "#d1d5db")};
  }

  @media (max-width: 480px) {
    flex: 1;
    text-align: center;
  }
`;

interface FiltersProps {
  filter: "all" | "done" | "pending";
  setFilter: (f: "all" | "done" | "pending") => void;
}

// Componente para os filtros de tarefas
export default function Filters({ filter, setFilter }: FiltersProps) {
  return (
    <Container>
      <Button active={filter === "all"} onClick={() => setFilter("all")}>
        Todas
      </Button>
      <Button active={filter === "done"} onClick={() => setFilter("done")}>
        Concluídas
      </Button>
      <Button
        active={filter === "pending"}
        onClick={() => setFilter("pending")}
      >
        Pendentes
      </Button>
    </Container>
  );
}
