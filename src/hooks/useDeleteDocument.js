import {  useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

// Sobre o reducer
const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useDeleteDocument = (docCollection) => {
  const [response, dispatch] = useReducer(deleteReducer, initialState);

  const checkCancelBeforeDispatch = (action) => {
      dispatch(action);
  };

  const deleteDocument = async (id) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const deletedDocument = await deleteDoc(doc(db, docCollection, id));

      checkCancelBeforeDispatch({
        type: "DELETED_DOC",
        payload: deletedDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  return { deleteDocument, response };
};
