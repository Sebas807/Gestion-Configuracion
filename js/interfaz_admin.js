import { getDocs, collection, deleteDoc, getDoc, doc } from 'firebase/firestore/lite';
import { db, onGetEvent, updateEvento } from '../js/firebase.js';

export class Gestion{

    constructor(){
    }
        
    cargar_datos(){
        datable = document.getElementById("user_table")
        gestion.actualizar_tabla();
    }

    validar_cerrar_sesion() {
        document.getElementById("btn_log").onclick = function () {
            alert("Sesión cerrada");
        }
    }

    abrir_formulario_de_eventos(){ //abre la pestaña html "add_evento"
        let btnAdd = document.getElementById("btn_add")
        btnAdd.addEventListener("click", () => window.open('../html/add_evento.html', '_top'), false)
        gestion.cargar_datos();
    }

    abrir_formulario_de_editar(){ //abre la pestaña html "update_evento"
        let btnEdit = document.getElementById("btn-edit")
        btnEdit.addEventListener("click", () => window.open('../html/update_evento.html', '_top'), false)
    }

    async eliminar_evento(event){
        await deleteDoc(doc(db, 'eventos', event))
        gestion.actualizar_tabla();
    }

    async actualizar_tabla(){
        let tabla='';
        const querySnapshot = await getDocs(collection(db,'eventos'));
        if (querySnapshot.docs.length) {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                tabla += `<table class="hover"> 
                    <tr>                    
                        <th class="id_info">
                            <input type="text" style="text-align: left;" value="` + data.id + `" id="id` + data.id + `" readonly> 
                            <input type="text" style="text-align: left;" value="` + data.nombre + `" id="name` + data.id + `" readonly> 
                            <input type="text" style="text-align: left;" value="` + data.lugar + `" id="name` + data.id + `" readonly>
                            <input type="text" style="text-align: left;" value="` + data.fecha + `" id="date` + data.id + `" readonly> 
                            <input type="text" style="text-align: left;" value="` + data.capacidad + `" id="capacity` + data.id + `" readonly> 
                            <input type="text" style="text-align: left;" value="` + data.duracion + `" id="duration` + data.id + `" readonly> 
                            <button type="submit" onclick="deleteEvent('${doc.id}')" class="icon"><i class="fa-solid fa-trash" id="btn_delete"></i></button>
                        </th>
                    </tr>
                </table>`
            })
            datable.innerHTML = tabla
        }
        else {
            datable.innerHTML = `<p class="not_found_message"> Aún no tienes eventos registrados </p>`;
        }
    }
}
let datable;
let gestion = new Gestion()
window.addEventListener("load", gestion.cargar_datos(), false);
window.addEventListener("load", gestion.abrir_formulario_de_eventos(), false);
window.addEventListener("load", gestion.abrir_formulario_de_editar(), false);
window.addEventListener("load", gestion.validar_cerrar_sesion(), false);
window.deleteEvent = gestion.eliminar_evento



