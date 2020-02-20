export const state = () => ({
  me: null,
  followerList: [],
  followingList: []
});

//동기적으로 state를 변환할 때는 mutations를 사용하는 것이 유리
//함수 형식으로 선언하지 않음에 유의
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  }
};

export const actions = {
  signUp({ commit, state }, payload) {
    // 서버에 회원가입 요청을 보내는 부분
    commit("setMe", payload);
  },
  logIn({ commit }, payload) {
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  }
};
