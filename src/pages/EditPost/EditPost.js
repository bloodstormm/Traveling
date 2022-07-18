import { useState, useEffect } from "react";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import ErrorMessage from "../../components/ErrorMessage";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.filteredTagsArray.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const navigate = useNavigate();
  const { updateDocument, response } = useUpdateDocument("posts");
  const { user } = useAuthValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Validar url da imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
      return;
    }
    // criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
    const filteredTagsArray = tagsArray.filter((tags) => tags);
    console.log(filteredTagsArray);

    // checagem dos campos
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    const data = {
      title,
      image,
      body,
      filteredTagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data)

    // Redirecionar p/ homePage
    navigate("/dashboard");
  };

  return (
    <div className="">
      {post && (
        <>
          {/* Lado direito (formulário) */}
          <div className="flex items-center justify-center flex-col text-center mt-6 ">
            <h1 className="text-4xl lg:text-5xl font-Montserrat font-semibold">
              Editar Publicação
            </h1>
            <p className="mt-2">O que você precisa alterar?</p>

            {response.error && <ErrorMessage error={response.error} />}

            {formError && <ErrorMessage error={formError} />}

            <hr className="border-[#cfcac3] mx-auto w-4/5 md:w-2/5 my-6" />

            <form
              onSubmit={handleSubmit}
              className="sm:w-1/2 md:w-4/5 lg:w-2/5 mx-auto p-8 md:p-0"
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
              <p className="font-medium text-gray-500">Preview da imagem:</p>
              <img src={post.image} alt={post.title} className="rounded-xl max-w-full mx-auto my-4" />
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
                <button className="btn w-full">Editar publicação</button>
              )}
              {response.loading && (
                <button className="btn w-full" disabled>
                  Atualizando...
                </button>
              )}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default EditPost;
