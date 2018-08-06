<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Book List
        <b-link href="#/add-book">(Add Book)</b-link>
		<b-link @click="logout()">(Logout)</b-link>
      </h2>
      <b-table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="(error, index) in errors" :key="index">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'BookList',
  data () {
    return {
      fields: {
        isbn: { label: 'ISBN', sortable: true, 'class': 'text-center' },
        title: { label: 'Book Title', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      books: [],
      errors: []
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
    /*
    axios.get(`/book`)
    .then(response => {
      this.books = response.data
    })
    .catch(e => {
      this.errors.push(e)
      if(e.response.status === 401) {
        this.$router.push({
          name: 'Login'
        })
      }
    })
    */
    this.$store.dispatch('loadBook')
      .then(() => {
        var gett = this.$store.getters;
        this.books = gett[Object.keys(gett)[0]];
      })
      .catch(e => {
        this.errors.push(e)
        if(e.response.status === 401) {
          this.$router.push({
            name: 'Login'
          })
        }
      })      
  },
  computed: {
    books () {
      return this.$store.getters.books
    }
  },  
  methods: {
    details (book) {
      this.$router.push({
        name: 'ShowBook',
        params: { id: book._id }
      })
    },
	  logout () {
      localStorage.removeItem('jwtToken')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>