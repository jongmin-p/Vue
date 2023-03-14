import myHeader from './components/header.js'
// import myBoardList from './components/myBoardList.js'
// import myBoardWrite from './components/myBoardWrite.js'
// import myBoardRead from './components/myBoardRead.js'

// import를 정의해서 사용하면 활성화가 되고 아니면 불투명한 상태가 된다
// router로 옮겨 사용하자
import router from './router/router.js'


// 단일 파일 컴포넌트 : html에 다 넣었는데 이제는 하나의 부품으로 쓰고 가독성을 위해서 사용해보자
// 부모 컴포넌트가 될 것이다
let template =
  // 부모가 가진 data를 가져오려면 $를 붙이고 속성명을 적어준다
  // sysn는 자식에게 부모의 데이터에 대한 권한을 주는거
  `
    <div>
      <my-header v-bind:parentData.sync="this.$data"></my-header>
      <router-view></router-view>
    </div>
  `;

new Vue({
  el: '#app',
  template: template,
  data: {
    dataArray: {}     // 파일에서 읽은 데이터
  },
  components: {
    // 공통으로 사용할 기능을 header-comp로 이동
    'my-header': myHeader
  },
  methods: {
    // data 를 주고 받을 수 있도록 데이터 관련 함수
    // getter
    getParentData: function () {
      return this.dataArray['board']
    },
    // setter
    setParentData: function (dataList) {
      this.dataArray['board'] = dataList
    }
  },
  router
})
