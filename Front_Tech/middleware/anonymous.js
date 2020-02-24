//로그인을 하지 않았는지 확인
export default function({ store, redirect }) {
  //로그인 여부 확인 후 페이지 경로 설정
  if (store.state.users.me) {
    redirect("/");
  }
}
