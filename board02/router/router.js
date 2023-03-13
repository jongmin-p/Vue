import main from '../components/main.js'
import myBoardList from '../components/myBoardList.js'
import myBoardRead from '../components/myBoardRead.js'
import myBoardWrite from '../components/myBoardWrite.js'


export default new VueRouter({
        // hash     ->  # + 경로 (server 로 요청을 보내지 않고, 페이지 이동)
        // history  ->  # 을 제외하고 SPA 구현하기 위한 모드
        // mode 의 기본값 : hash

    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: main
        },

        // boardList
        {
            path: '/boardList',
            name: 'boardList',
            component: myBoardList
        },

        // boardRead
        {
            path: '/boardRead/:item',
            name: 'boardRead',
            component: myBoardRead,
            props: true     // 부모로부터 받아올 떄, 모든 데이터를 받아오겠다
        },

        // boardWrite
        {
            path: 'boardWrite',
            name: 'boardWrite',
            component: myBoardWrite
        }
    ]
})