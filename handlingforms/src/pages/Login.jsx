import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login logic

    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;