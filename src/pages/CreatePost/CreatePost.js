import { useState, useMemo } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import ErrorMessage from "../../components/ErrorMessage";
import imgNP from "../../img/imgNP.jpg";
import imgNP2 from "../../img/imgNP2.jpg";
import imgNP3 from "../../img/imgNP3.jpg";
import imgNP4 from "../../img/imgNP4.jpg";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const navigate = useNavigate()
  const { insertDocument, response } = useInsertDocument("posts");
  const { user } = useAuthValue();
  
  const bgImages = [imgNP, imgNP2, imgNP3, imgNP4];
  
  // eslint-disable-next-line
  const bgImage = useMemo(() => bgImages[Math.floor(Math.random() * bgImages.length)], []);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")
    
    // Validar url da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
      return;
    }
    // criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())
    const filteredTagsArray = tagsArray.filter((tags) => tags)
    console.log(filteredTagsArray)
    
    // checagem dos campos
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!")
      return;
    }
  
    
    insertDocument({
      title,
      image,
      body,
      filteredTagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    
    // Redirecionar p/ homePage
    navigate("/")
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 flex-1">
      {/* Lado esquerdo (imagem) */}
      <div className="col-span-1 relative hidden md:block transition ease">
        <img src={bgImage} className="h-full object-cover transition" alt="" />
        <div className="absolute justify-center items-center p-24 text-center flex flex-col text-2xl w-full h-full top-0 backdrop-blur-sm text-white">
          <span className="font-bold text-6xl mb-4">67%</span>
          <p>dos usuários entram no Traveling diariamente</p>
        </div>
      </div>

      {/* Lado direito (formulário) */}
      <div className="flex items-center justify-center flex-col md:col-span-2 lg:col-span-4 text-center mt-6 ">
        <h1 className="text-4xl lg:text-5xl font-Montserrat font-semibold">
          Nova Publicação
        </h1>
        <p className="mt-2">Poste suas experiências ainda hoje!</p>

        {response.error && <ErrorMessage error={response.error} />
}

        {formError && <ErrorMessage error={formError} />}

        <hr className="border-[#cfcac3] mx-auto w-4/5 md:w-2/5 my-6" />

        <form
          onSubmit={handleSubmit}
          className="sm:w-full md:w-4/5 lg:w-2/5 mx-auto items-center justify-center p-4"
        >
          <label className="font-medium text-gray-500">
            <span>Títlulo:</span>
            <input
              type="text"
              name="titulo"
              placeholder="Insira o título da publicação"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="font-medium text-gray-500">
            <span>Imagem (URL):</span>
            <input
              type="text"
              name="image"
              placeholder="Insira a imagem (url)"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label className="font-medium text-gray-500">
            <span>Conteúdo da publicação:</span>
            <textarea
              className="resize-none"
              cols="30"
              rows="5"
              type="text"
              name="body"
              placeholder="Insira o conteúdo da sua publicação"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </label>
          <label className="font-medium text-gray-500">
            <span>Tags</span>
            <input
              type="text"
              name="tags"
              placeholder="Insira as tags, separadas por vírugla."
              required
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
          {!response.loading && (
            <button className="btn w-full">Criar publicação</button>
          )}
          {response.loading && (
            <button className="btn w-full" disabled>
              Criando...
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
