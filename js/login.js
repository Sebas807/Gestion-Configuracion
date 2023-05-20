import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, collection, deleteDoc, doc } from "firebase/firestore/lite";
import { auth, db } from "../js/firebase.js";

// Que de

class Usuario{
    constructor(){

    }

    iniciar_sesion(){
        const signInForm = document.querySelector("#login-form");
	    signInForm.addEventListener("submit", async (e) => {
		e.preventDefault();
		const email = signInForm["user"].value;
		const password = signInForm["password"].value;
		try {
			const userCredentials = await signInWithEmailAndPassword(auth, email, password)
			console.log(userCredentials)
			let userRole = await getDoc(doc(db, `usuarios`, userCredentials.user.uid));
			userRole = userRole.data().rol;
			// reset the form
			signInForm.reset();

			// show welcome message
			if (userRole == 'admin') {
				console.log('user rol admin')
				window.location.href = "/interfaz_admin.html";
			} else if(userRole == 'user'){
				window.location.href = "/interfaz_admin.html";
			}
		} catch (error) {
			if (error.code === 'auth/wrong-password') {
				alert("Contraseña incorrecta", "error")
			} else if (error.code === 'auth/user-not-found') {
				alert("Usuario incorrecto", "error")
			} else {
				console.log('error', error)
				alert("Ocurrió un error", error)
			}
		}
	});
    }
}

let usuario = new Usuario
window.addEventListener("load", usuario.iniciar_sesion, false)