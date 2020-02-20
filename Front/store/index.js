//Main store 안에 기능(모듈)별로 Vuex를 따로 만들어 관리!!
export const state = () => ({
  hello: "vuex"
});

export const mutations = {
  bye(state) {
    state.hello = "goodbye";
  },
  addMainPost() {}
};
