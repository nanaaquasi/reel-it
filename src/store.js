import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genres: '',
    selectedGenre: 'All Genres',
    movie: null,
    loadingStatus: false,
    initialShow: true
  },
  mutations: {
    'STORE_GENRES'(state, genres) {
      state.genres = genres;
    },
    'SET_SELECTED_GENRE'(state, value){
      state.selectedGenre = value
    },
    'SET_LOADING_STATUS'(state, status){
      state.loadingStatus = status
    },
    'SET_INITIAL_STATUS'(state, status){
      state.initialShow = status;
    },
    'STORE_MOVIE'(state, movie){
      state.movie = movie;
    }
  },
  actions: {
    async 'GET_MOVIE_GENRES'({commit }){
      try {
        const {
          data
        } = await axios.get('/genre/movie/list', {
          params: {
            api_key: process.env.VUE_APP_API_KEY,
            language: 'en-US',
          }
        })
        commit('STORE_GENRES', data.genres);

      } catch (error) {
        console.log(error)
      }
    },
    async 'GET_MOVIES'({commit, state, dispatch}, movieData){
      try {

        // console.log(movieData);

        commit('SET_LOADING_STATUS', true)

        commit('SET_INITIAL_STATUS', false);

        const {data} = await axios.get('/discover/movie', {
          params: {
            api_key: process.env.VUE_APP_API_KEY,
            language: 'en-US',
            with_genres: state.selectedGenre.id,
            sort_by: movieData.sort,
            year: movieData.year,
            include_video: false,
            include_adult: false
          },
        })
        let {results} = data

        const movie = results[Math.floor(Math.random()* results.length)]

        dispatch('GET_MOVIE_DETAIL', movie.id)
        

        console.log(movie);
      } catch (error) {
        console.log(error)
      }
    },
    async 'GET_MOVIE_DETAIL'({commit}, id){
        const { data } = await axios.get(`/movie/${id}`, {
        params: {
          api_key: process.env.VUE_APP_API_KEY,
          language: "en-US"
        }
      });

      console.log(data);
      commit('STORE_MOVIE', data)

      commit('SET_INITIAL_STATUS', false)
      
      commit('SET_LOADING_STATUS', false)
  
    }
  },
  getters: {
    genres: (state) => state.genres,
    movieResults(state){
      const movie = state.movie
      return movie
    },
    loadingStatus: (state) => state.loadingStatus,
    initialShow: (state) => state.initialShow
  }
});