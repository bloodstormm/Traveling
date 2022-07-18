//import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // Cleanup
    // Para evitar (leak) limite de memória
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // Registrar usuário
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false);
            
            return user
        } catch (error) {

            let systemErrorMessage
            if (error.message.includes("password")) {
                console.log('cheguei aqui')
                systemErrorMessage = "A senha precisa ter no mínimo 6 caractéres"
            }

            // Email já existente
            else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já cadastrado."
            }
            

            // Outro tipo de erro
            else {
                systemErrorMessage = "Algo deu errado, tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
            console.log(error.message)
        }


    };

    // login
    const loginUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)

        try {
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            setLoading(false)
        } catch (error) {
            let systemErrorMessage

            // Nao digitou um email
            if(error.message.includes("invalid-email")) {
                systemErrorMessage = "Email inválido, tente novamente."
            }
            
            // E-mail não cadastrado
            else if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Email não encontrado, tente novamente."
            }

            // Senha errada
            else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha inválida, tente novamente."
            }
            
            else if (error.message.includes("too-many-requests")) {
                systemErrorMessage = "Muitas tentativas inválidas. Tente novamente mais tarde"
            }
            
            else (
                systemErrorMessage = "Algo deu errado, tente novamente mais tarde."

            )
            setError(systemErrorMessage)
            console.log(error.message)
            setLoading(false)

        }


    }

    // logout

    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
        
    }

    // n entendi nada aqui
    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        loginUser,
        error,
        loading,
        logout
    }
}