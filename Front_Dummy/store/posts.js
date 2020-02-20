export const state = () => ({
  mainPosts: []
});

export const mutations = {
  addMainPost(state, payload) {
    //앞에서부터 추가 -- push는 뒤에서부터 추가
    state.mainPosts.unshift(payload);
  },

  removeMainPost(state, payload) {
    //state에서 해당 index를 찾아 저장
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    //해당 index를 삭제
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    //state에서 댓글을 추가할 해당 post의 index를 찾아 저장
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    //해당 index의 post에 unshift로 추가
    state.mainPosts[index].Comments.unshift(payload);
  }
};

export const actions = {
  add({ commit }, payload) {
    // 서버에 게시글 등록 요청 보냄
    commit("addMainPost", payload);
  },
  remove({ commit }, payload) {
    commit("removeMainPost", payload);
  },
  addComment({ commit }, payload) {
    commit("addComment", payload);
  }
};
