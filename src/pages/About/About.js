import imgAbout from "../../img/imgAbout.jpg";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="container mx-auto p-2 mt-6">
      <h1 className="text-3xl md:text-5xl font-semibold text-center uppercase">Sobre o Traveling</h1>

      <div className="md:grid md:grid-cols-2 mt-20 px-8 md:px-12">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-medium leading-normal">
            Uma rede para postar suas{" "}
            <span className="before:block before:absolute leading-5 before:-inset-2 md:before:-inset-3 before:-skew-y-3 before:bg-main-orange relative inline-block">
              <span className="relative text-orange-50">experiências</span> 
            </span>{" "}
            em viagens
          </h2>
          <p className="mt-6">
            Esse foi o meu primeiro projeto feito em React onde pude demonstrar
            um pouco do que pude aprender com cerca de 3 meses de aprendizado. O
            Traveling consiste em uma rede social onde você pode postar algumas
            de suas imagens na internet e mostrar para outras pessoas como foi
            sua experiência
          </p>
          <p className="my-6">
            Você também pode ver alguns outros projetos próprios que produzi no
            meu portfólio! Acesse:{" "}
            <a
              href="https://bloodstormm.github.io/Portfolio-2022/"
              className="underline font-semibold decoration-main-orange text-base"
            >
              Portfólio
            </a>
          </p>
          <p className="text-center">Me encontre também em:</p>
          <div className="flex space-x-5 mt-2  mb-6 justify-center">
            <a
              href="https://github.com/bloodstormm/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-5 bg-main-orange rounded-xl transition cursor-pointer 
              hover:scale-110 hover:bg transform"
            >
              <AiFillGithub className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/_nicolasantoss/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-5 bg-main-orange rounded-xl transition cursor-pointer 
              hover:scale-110 transform"
            >
              <AiOutlineInstagram className="text-3xl" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5512988770308"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-5 bg-main-orange rounded-xl transition cursor-pointer 
              hover:scale-110 transform"
            >
              <AiOutlineWhatsApp className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-malachias/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-5 bg-main-orange rounded-xl transition cursor-pointer 
              hover:scale-110 transform"
            >
              <AiFillLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        <div className="md:grid-cols-2 mx-auto my-auto md:pt-0">
          <img
            src={imgAbout}
            alt="imagem do Desenvolvedor"
            className="rounded-full max-w-full lg:max-w-xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
