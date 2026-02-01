import { Link } from 'react-router';

export function Nav() {
  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <Link to="/">
        <h1>React Router Template</h1>
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
