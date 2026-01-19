import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }];
}

export async function loader({ request }: Route.LoaderArgs) {}

export default function Home({}: Route.ComponentProps) {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
