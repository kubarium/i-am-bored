import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const api = "https://www.boredapi.com/api/activity";

const config = {
  method: "GET",
  mode: "cors"
};

const toTitleCase = text =>
  `${text[0].toUpperCase()}${text.substring(1, text.length)}`;

export default new Vuex.Store({
  state: {
    activity: "",
    search: {
      participants: 1,
      type: "",
      price: 0,
      accessibility: [0.1, 0.8]
    }
  },
  mutations: {},
  actions: {
    fetchRandom(context) {
      fetch(api, config)
        .then(response => response.json())
        .then(data => {
          context.state.activity = data.activity;
          context.state.search.type = toTitleCase(data.type);
          context.state.search.participants = data.participants;
          context.state.search.price = [data.price, 1.0];
        });
    },
    fetchActivity(context, payload) {
      if (payload) {
        Object.assign(context.state.search, payload);
      }

      var path =
        `${api}?` +
        [
          `participants=${context.state.search.participants}`,
          `type=${context.state.search.type.toLowerCase()}`,
          `minprice=${context.state.search.price}`,
          `maxprice=1.0`
        ].join("&");

      fetch(path, config)
        .then(response => response.json())
        .then(data => {
          context.state.activity = data.activity || data.error;
        });
    }
  }
});
