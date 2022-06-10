import imgLogin from "../../img/imgLogin.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden">
      {/* Lado Direito (imagem) */}
      <div className="hidden lg:flex justify-center items-center bg-red-200">
        <img src={imgLogin} className="h-full object-cover" alt="Imagem Login" />
      </div>

      {/*Lado esquerdo */}
      <div className="flex justify-center items-center flex-col w-screen lg:w-auto">
        <div className="w-11/12 md:w-3/4 lg:w-[50%]">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-Binerka mb-2">
              Traveling
            </h1>
            <p className="font-thin text-lg">
              Faça login para acessar sua conta
            </p>
          </div>

          <form className="flex flex-col md:mx-8 ">
            <label>
              <span>Email: </span>
              <input
                type="email"
                name="email"
                required
                placeholder="email@email.com"
              />
            </label>
            <label>
              <span>Senha: </span>
              <input
                type="password"
                name="password"
                required
                placeholder="Digite sua senha"
              />
            </label>

            <button className="btn">Cadastrar</button>
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
