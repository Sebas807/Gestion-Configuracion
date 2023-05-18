import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore/lite";
import { db } from '../js/firebase.js';



class Evento {
    constructor() {}
  
    async añadir_evento() {
      let name = document.getElementById("name").value;
      let id = document.getElementById("id").value;
      let lugar = document.getElementById("lugar").value;
      let capacidad = document.getElementById("salary").value;
      let fecha_hora = document.getElementById("position").value;
      let duracion = document.getElementById("email").value;
  
      try {
        const ref = await addDoc(collection(db, "eventos"), {
          id,
          nombre: name,
          lugar,
          fecha: fecha_hora,
          capacidad,
          duracion,
        });
        addEventForm.reset();
        window.location.href = "/interfaz_admin.html";
      } catch (error) {
        console.error("Error al agregar evento:", error);
      }
    }
  
    enviar_formulario(evento) {
        document.getElementById("btn_can").onclick = function () {
          window.location.href = "/interfaz_admin.html";
        };
        addEventForm.addEventListener("submit", async (e) => {
          e.preventDefault();
          bandera = false; // reiniciar la bandera en cada envío de formulario
          const querySnapshot = await getDocs(collection(db, "eventos"));
          if (querySnapshot.docs.length) {
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              if (document.getElementById("id").value == data.id) {
                alert("Este evento ya existe, por favor ingrese otro");
                bandera = true;
                window.location.href = "/agregar_evento.html";
              }
            });
            if (bandera == false) {
              this.añadir_evento(); // usar this en lugar de evento
            }
          } else {
            this.añadir_evento(); // usar this en lugar de evento
          }
        });
      }
  }
  
  let addEventForm = document.querySelector("#submit_event");
  let evento = new Evento();
  window.addEventListener("load", evento.enviar_formulario(evento), false);
  

