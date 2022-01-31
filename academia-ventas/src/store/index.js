import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [],
    prospectos: [],
    user: null
  },
  getters: {
    enviarCursos(state) {
      return state.cursos;
    },
    enviarUser(state) {
      return state.user;
    },
    enviarProspectos(state) {
      return state.prospectos;
    },
    // buscarPorRut: (state, getters) => (rut) => {
    //   return getters.enviarProspectos.filter((prospecto) => {
    //   return prospecto.rut == rut
    //   })
    //   },
    totalAlumnosInscritos(state, getters) {
      return getters.enviarCursos.map(state => state.inscritos).reduce((total, suma) => total + suma, 0);
    },
    totalCursosTerminados(state, getters) {
      let count = 0;
      getters.enviarCursos.filter(state => {
        if (state.estado) {
          count++;
        }
      });
      return count;
    }
  },
  mutations: {
    mutaCursos(state, cursosLocal) {
      state.cursos = cursosLocal;
    },
    mutaUserLocal(state, userData) {
      state.user = userData;
    },
    mutaProspectos(state, prospectosLocal) {
      state.prospectos = prospectosLocal;
    },
  },
  actions: {
    CursosDb({ commit }) {
      firebase.firestore().collection('cursos').onSnapshot(result => {
        let cursosLocal = [];
        result.forEach(element => {
          cursosLocal.push({
            cupos: element.data().cupos,
            duracion: element.data().duracion,
            imagen: element.data().imagen,
            nombre: element.data().nombre,
            costo: element.data().costo,
            fecharegistro: element.data().fecharegistro,
            estado: element.data().estado,
            codigo: element.data().codigo,
            descripcion: element.data().descripcion,
            inscritos: element.data().inscritos,
            idDoc: element.id,
          })
        });
        commit('mutaCursos', cursosLocal);
      })
    },

    ProspectosDb({ commit }) {
      firebase.firestore().collection('prospectos').onSnapshot(result => {
        let prospectosLocal = [];
        result.forEach(element => {
          prospectosLocal.push({
            name: element.data().name,
            email: element.data().email,
            rut: element.data().rut,
            fechanacimiento: element.data().fechanacimiento,
            telefono: element.data().telefono,
            ocupacion: element.data().ocupacion,
            matriculado: element.data().matriculado,
            egresado: element.data().egresado,
            idDoc: element.id,

          })
        });
        commit('mutaProspectos', prospectosLocal);
      })
    },

    cargarUsuario({ commit }, userData) {
      commit('mutaUserLocal', userData);
    },
    agregarCurso(context, cursoNuevo) {
      return firebase.firestore().collection('cursos').add({ ...cursoNuevo });
    },
    eliminarCurso(context, idDoc) {
      return firebase.firestore().collection('cursos').doc(idDoc).delete();
    },
    actualizarCurso(context, cursoActual) {
      return firebase.firestore().collection('cursos').doc(cursoActual.idDoc).update({ ...cursoActual });
    },

    agregarProspecto(context, prospectoNuevo) {
      return firebase.firestore().collection('prospectos').add({ ...prospectoNuevo });
    },
    eliminarProspecto(context, idDoc) {
      return firebase.firestore().collection('prospectos').doc(idDoc).delete();
    },
    actualizarProspecto(context, prospectoActual) {
      return firebase.firestore().collection('prospectos').doc(prospectoActual.idDoc).update({ ...prospectoActual });
    }


  }
})
