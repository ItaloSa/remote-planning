import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/room')({
  component: Room
});

function Room() {
  return <p>Room</p>;
}
