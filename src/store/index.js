import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchRepositories: async ({ commit }) => {
      return await axios
        .get("https://api.github.com/users/aytacmalkoc/repos?sort=created")
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
    },
  },
});
