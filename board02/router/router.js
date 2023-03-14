import main from "../components/main.js";
import myBoardList from "../components/myBoardList.js";
import myBoardRead from "../components/myBoardRead.js";
import myBoardWrite from "../components/myBoardWrite.js";

// VueRouter라는 애로 내보내겠다.
export default new VueRouter({
  // hash -> # + 경로 ( 서버로 요청을 보내지 않고 페이지 이동 )
  // url # 뒤에 있는 내용을 읽을 수가 없다
  // history -> #을 제외하고 SPA 구현하기 위한 모드
  // 디폴트 값은 hash
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: main,
    },
    // boardList
    {
      path: "/boardList",
      name: "boardList",
      component: myBoardList,
    },
    // boardRead
    {
      path: "/boardRead/:item",
      name: "boardRead",
      component: myBoardRead,
      props: true, // 부모의 모든 데이터를 가져오기 위해 true를 준다
    },
    // boardWrite
    {
      path: "/boardWrite",
      name: "boardWrite",
      component: myBoardWrite,
    },
  ],
});
