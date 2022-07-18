import { Link, useParams } from "react-router-dom";
import { BsArrowLeft, BsInfoCircle } from "react-icons/bs";
import ErrorMessage from "../../components/ErrorMessage";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading, error } = useFetchDocument("posts", id);
  return (
    <div className="flex flex-col mx-auto container ">
      {loading && (
        <p className="flex justify-center mt-6 text-xl font-medium">
          Carregando...
        </p>
      )}
      {error && <ErrorMessage error={error} />}
      {post && (
        <div className="overflow-hidden mx-auto my-8 pb-8 px-3 sm:px-0 ">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold">{post.title}</h2>
            <h3 className="text-gray-500 pt-2 text-md sm:text-lg">
              Criado por:{" "}
              <span className="font-semibold">{post.createdBy}</span>
            </h3>
          </div>
          {/* Imagem */}

          <img
            src={post.image}
            className="xs:max-w-[350px] md:max-w-2xl lg:max-w-5xl w-full h-auto mx-auto object-cover rounded-xl"
            alt={post.title}
          />

          {/* Informações */}

          <p className="text-lg my-3 font-semibold ">Conteúdo da Publicação:</p>
              <div className="p-4 flex items-center bg-[#f2ede5] text-lg rounded-xl mb-6">
                <BsInfoCircle className="h-5 w-5 mr-2 hover:text-main-orange transition"/>
                {post.body}

              </div>

            {/* Conteudo */}
            <div className="flex flex-col">

            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
              <p className="text-blackText font-semibold text-lg">Tags:</p>
              {post.filteredTagsArray.map((post) => (
                <div
                  key={post}
                  className="py-2  px-5 text-xs sm:text-sm rounded-3xl font-bold bg-[#ffe7bb] text-[#ff8732]"
                >
                  {post}
                </div>
              ))}
            </div>
            <Link to={`/`}>
              <div className="flex items-center justify-end mt-8 hover:-translate-x-1 transform transition">
                <p className="mr-3 text-blackText text-sm sm:text-base font-medium">
                  Voltar
                </p>
                <BsArrowLeft className="h-8 w-8" />
              </div>
            </Link>
        </div>
      )}
    </div>
  );
};

export default Post;
