import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css"
import registerImg from "../../img/imgRegister.jpg";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 4) {
        setError("A senha precisa ter no mínimo 4 caracteres.")
    }

    console.log("formulario enviado");
  };

  return (
    <div className="grid md:grid-cols-2 h-screen overflow-hidden">
      {/*Lado esquerdo */}
      <div className="flex justify-center items-center flex-col w-screen lg:w-auto">
        <div className="w-11/12 md:w-3/4 lg:w-[50%]">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-Binerka mb-2">
              Traveling
            </h1>
            <p className="font-thin text-lg">
              Mostre suas experiências de viagens
            </p>

            {error && <div className="error">{error}</div>}
          </div>

          <form className="flex flex-col md:mx-8" onSubmit={handleSubmit}>
            <label>
              <span>Nome: </span>
              <input
                type="text"
                name="displayName"
                required
                placeholder="Digite seu nome"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </label>
            <label>
              <span>Email: </span>
              <input
                type="email"
                name="email"
                required
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              <span>Senha: </span>
              <input
                type="password"
                name="password"
                required
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button className="btn">Cadastrar</button>
          </form>
        </div>

        <p>
          Já possui conta?{" "}
          <Link to="/login" className="text-main-orange font-bold text-base">
            Fazer login
          </Link>
        </p>
      </div>

      {/* Lado Direito (imagem) */}
      <div className="hidden lg:flex justify-center">
        <img src={registerImg} className="h-full object-cover " alt="" />
      </div>
    </div>
  );
};

export default Register;
