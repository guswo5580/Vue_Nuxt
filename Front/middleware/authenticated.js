//로그인한 사용자인지 검증
export default function({ store, redirect }) {
  //로그인 여부 확인 후 페이지 경로 설정
  if (!store.state.users.me) {
    redirect("/");
  }
}
