import type { Route } from './+types/home';

export async function loader({}: Route.LoaderArgs) {}

export default function Home({}: Route.ComponentProps) {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
