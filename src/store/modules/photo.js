import ApiService from '@/services/ApiServices'
import partials from '@/store/partials'
import axios from 'axios';

const state = {
  photos: [],
  totalPhotos: 0,
  perPage: 9,
  page: 1,
  loadState: partials.LOAD_STATE.LOADING,
  orderBy: 'latest'
}

const getters = {
  getPhotos: (state) => {
    return state.photos
  },
};

const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos
  },
  SET_TOTAL_PHOTOS(state, total) {
    state.totalPhotos = total
  },
  SET_ORDER(state, order) {
    state.orderBy = order
  },
  SET_PAGE(state, page) {
    state.page = page
  },
  SET_LOAD_STATE(state, value) {
    state.loadState = value
  }
}

const actions = {
  async fetchPhotos({commit}){
    commit('SET_LOAD_STATE', partials.LOAD_STATE.SUCCESS) 
    try {
      let response = await axios.get("https://api.unsplash.com/search/collections?client_id=StBpGJo1jfD1JOPRv3gUhJs0iAAffMEHDlxGqQyk3uo&query=school");
      commit("SET_PHOTOS", response.data);
      return response;
    } catch (error) {
      commit('SET_LOAD_STATE', partials.LOAD_STATE.ERROR)
      console.log('Error: ' + error.response.data.errors[0])
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
