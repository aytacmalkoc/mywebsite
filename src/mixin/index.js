import moment from "moment";
import githubColors from "../assets/data/colors.json";

const mixin = {
  methods: {
    formatDate: (date) => {
      return moment(date).format("DD/MM/YYYY");
    },

    filterReadme: (repos) => {
      return repos.filter(
        (repo) => repo.full_name != "aytacmalkoc/aytacmalkoc"
      );
    },

    findColor: (lang) => {
      return githubColors[lang].color || "#274757";
    },
  },
};

export default mixin;
