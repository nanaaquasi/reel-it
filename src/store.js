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
    initialShow: true,
    credits: null,
    reviews: null
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
        
      } catch (error) {
        console.log(error)
      }
    },
    async 'GET_MOVIE_DETAIL'({commit}, id){
      try {
        const { data } = await axios.get(`/movie/${id}`, {
        params: {
          api_key: process.env.VUE_APP_API_KEY,
          language: "en-US",
          append_to_response: 'videos,images,credits,reviews,recommendations',
          include_image_language: 'en,null'
        }
      });

      console.log('Data Here', data)

      commit('STORE_MOVIE', data)

      commit('SET_INITIAL_STATUS', false)
      
      commit('SET_LOADING_STATUS', false)

      } catch (error) {
        console.log(error)
      }
  },
  // async 'GET_MEDIA'({commit}, id){
  //   try {
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

},
  getters: {
    genres: (state) => state.genres,
    movieResults(state){
      if(!state.movie) return;

      return state.movie
    },
    casts(state){
      if(!state.movie) return;
      const { credits } = state.movie

      if(!credits) return

      return credits.cast

    },
    crews(state){
      if(!state.movie) return;

      const {credits} = state.movie

      if(!credits) return

      return credits.crew

    },
    reviews(state){
      if(!state.movie) return;

       const {reviews} = state.movie

      if(!reviews) return

      return reviews.results
    },
    videos(state){
      if(!state.movie) return;

      const {videos} = state.movie

      if(!videos) return

      const { results } = videos;

      return results

    },
     recommendations(state){
             if(!state.movie) return;

      const { recommendations } = state.movie

      if(!recommendations) return

      const { results } = recommendations;

      return results

    },
     posters(state){
             if(!state.movie) return;

      const {images} = state.movie

      if(!images) return

      const { posters } = images;

      return posters

    },
     backdrops(state){
             if(!state.movie) return;

      const {images} = state.movie

      if(!images) return

      const { backdrops } = images;

      return backdrops

    },
    loadingStatus: (state) => state.loadingStatus,
    initialShow: (state) => state.initialShow
  }
});