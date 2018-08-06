import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    books: [],
    id:''
  },

  getters: {
    books: state => state.books,
    id: state => state.id
  },

  mutations: {

    load (state, books) {
      state.books = books
    },

    add (state, book) {
      state.books.push(book)
      state.id = book._id
    },

    edit(state, book){
    	state.books[state.books.indexOf(book)]=book
    },
 
    delete (state, book) {
    	state.books.splice(state.books.indexOf(book), 1)
    }

  },

  actions: {

    loadBook ({ commit }) {
      return new Promise((resolve) => {
        axios
          .get('/book')
          .then(r => r.data)
          .then(books => {
            commit('load', books)
            resolve();
          })
          .catch(e => {
            this.errors.push(e)
            if(e.response.status === 401) {
              this.$router.push({
                name: 'Login'
              })
            }
          })
      })
    },

    addBook ({ commit },book) {
      return new Promise((resolve) => {
        axios.post('/book', book).then(response => {
          commit('add', response.data)
          resolve();
        })
        .catch(e => {
          this.errors.push(e)
        })
      })
    },
    editBook ({ context }, { id }) {
      this.$axios.post(`/book/${id}`)
      context.commit('edit',response)
    }
  }
})

export default store