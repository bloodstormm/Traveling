import imgLogin from "../../img/imgLogin.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import ErrorMessage from "../../components/ErrorMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loginUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setPassword("");

    const user = {
      email,
      password,
    };

    await loginUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden">
      {/* Lado Direito (imagem) */}
      <div className="hidden lg:flex justify-center items-center transition duration-300">
        <img
          src={imgLogin}
          className="h-full object-cover object-center"
          alt="Imagem Login"
        />
      </div>

      {/*Lado esquerdo */}
      <div className="flex justify-center items-center flex-col w-screen lg:w-auto">
        <div className="w-11/12 md:w-3/4 lg:w-[50%]">
          <div className="text-center mb-6 2xl:mb-14">
            <h1 className="text-5xl md:text-7xl font-Binerka mb-2">
              Traveling
            </h1>
            <p className="font-thin text-base 2xl:text-lg">
              Faça login para acessar sua conta
            </p>

            {error && <ErrorMessage error={error} />}
          </div>

          <form className="flex flex-col 2xl:mx-8" onSubmit={handleSubmit}>
            <label>
              <span>Email: </span>
              <input
                type="email"
                name="email"
                value={email}
                required
                placeholder="email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha: </span>
              <input
                type="password"
                name="password"
                value={password}
                required
                placeholder="Digite sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            {loading && (
              <button className="btn" disabled>
                Entrando...
              </button>
            )}
            {!loading && <button className="btn">Entrar</button>}
          </form>
        </div>

        <p>
          Não possui conta?{" "}
          <Link to="/register" className="text-main-orange font-bold text-base">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
