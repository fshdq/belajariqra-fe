import ApiService from "@/services/api.service";

const state = {
  isLoading: false,
  error: '',
};  

const getters = {
  getLoading: (state) => {
    return state.isLoading
  },
  getError: (state) => {
    return state.error
  }
};

const mutations = {
  setLoader: (state, status) => state.isLoading = status,
  setError: (state, data) => state.error = data
};

const actions = {
  
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
