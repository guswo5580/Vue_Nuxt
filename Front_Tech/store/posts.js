export const state = () => ({
  //게시글 정보
  mainPosts: [],
  //인피니티 스크롤링 여부 확인
  hasMorePost: true
});

//예시 데이터 설정(Dummy) - Front는 limit, totalPosts 등을 알 필요 없음!!
//따라서 state에 넣지 않는다!!!
const totalPosts = 51;
const limit = 10;

export const mutations = {
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload);
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  },

  //게시글 불러오기
  loadPosts(state) {
    //totalPost = 전체 게시글 수, mainPosts.length = 현재 내가 불러온 post 개수
    //diff = 아직 불러오지 않은 게시글 수
    const diff = totalPosts - state.mainPosts.length;

    //Array = 배열 생성, fill = 배열 채우기, map = 배열 내 삽입하기
    const fakePosts = Array(diff > limit ? limit : diff)
      .fill()
      .map(v => ({
        id: Math.random().toString(),
        User: {
          id: 1,
          nickname: "예시"
        },
        content: `Hello infinite scrolling~ ${Math.random()}`,
        Comments: [],
        Images: []
      }));

    //불러오지 않은 게시글이 limit보다 작으면 diff 만큼의 수를 불러옴
    //diff만큼을 불러왔을 때 fakePosts.length < limit
    //따라서 hasMorePost === false로 바뀜
    state.hasMorePost = fakePosts.length === limit;

    //기존 mainPosts와 새로 삽입되는 Posts 배열 합치기
    //concat = 배열 합치기
    state.mainPosts = state.mainPosts.concat(fakePosts);
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
  },

  //게시글 불러오기
  loadPosts({ commit, state }, payload) {
    if (state.hasMorePost) {
      commit("loadPosts");
    }
  }
};

//limit 기반을 실무에 사용하지 않는 이유
//1. 서버의 응답이 늦어진 경우, 무한 요청이 일어날 경우가 생김!!
//2. 삭제, 갱신 등을 통해 totalPosts가 바뀌는 경우가 생김!!
