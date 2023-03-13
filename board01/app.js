import myHeader from './components/header.js'
import myBoardList from './components/myBoardList.js'
import myBoardWrite from './components/myBoardWrite.js'
import myBoardRead from './components/myBoardRead.js'

// 단일 파일 컴포넌트 : html에 다 넣었는데 이제는 하나의 부품으로 쓰고 가독성을 위해서 사용해보자
// 부모 컴포넌트가 될 것이다
let template =
  // 부모가 가진 data를 가져오려면 $를 붙이고 속성명을 적어준다
  // sysn는 자식에게 부모의 데이터에 대한 권한을 주는거
  `
    <div>
      <my-header v-bind:parentData.sync="this.$data"></my-header>
      <my-board-list v-if="listOk" v-bind:object="dataArray['board']" v-on:board-read="boardRead"
      v-on:board-write="boardWrite" v-on:board-delete="boardDelete"></my-board-list>
      <my-board-read v-if="readOk" v-bind:object="boardInfo" v-on:board-list="boardList"></my-board-read>
      <my-board-write v-if="writeOk" v-on:board-list="boardList" v-on:board-save="boardSave"></my-board-write>
    </div>
  `;

new Vue({
  el: '#app',
  template: template,
  data: {
    listOk: false,
    readOk: false,
    writeOk: false,
    dataArray: {},     // 파일에서 읽은 데이터
    boardInfo: {}      // 선택된 게시글 정보
  },
  components: {
    // 공통으로 사용할 기능을 header-comp로 이동
    'my-header': myHeader,
    'my-board-list': myBoardList,
    'my-board-read': myBoardRead,
    'my-board-write': myBoardWrite
  },
  methods: {
    // 자식 컴포넌트에서 사용하기 위해 선언한 것들임 
    boardList: function () { // 게시판 목록 조회
      this.listOk = true;
      this.readOk = false;
      this.writeOk = false;
    },
    boardWrite: function () { // 게시판 글쓰기
      this.listOk = false;
      this.readOk = false;
      this.writeOk = true;
    },
    boardRead: function (info) { //게시판 글 조회
      //컴포넌트 생성여부
      this.listOk = false;
      this.readOk = true;
      this.writeOk = false;

      //게시판 글 상세조회
      this.boardInfo = info;

      //해당 글 조회수 증가
      for (let i = 0; i < this.dataArray['board'].length; i++) {
        if (this.dataArray['board'][i].no == info.no) {
          this.dataArray['board'][i].view
            = parseInt(this.dataArray['board'][i].view) + 1;
        }
      }
    },
    boardSave: function (title, content) {  // 게시글 저장
      let no = 1;
      if (this.dataArray['board'].length != 0) {
        let index = this.dataArray['board'].length - 1;
        no = parseInt(this.dataArray['board'][index].no) + 1;
      }

      let boardInfo = {
        'no': no,
        'title': title,
        'content': content,
        'view': '1'
      }

      this.dataArray['board'].push(boardInfo);

      this.boardList();
    },
    boardDelete: function (no) { // 게시글 삭제
      for (let i = 0; i < this.dataArray['board'].length; i++) {
        if (this.dataArray['board'][i].no == no) {
          this.dataArray['board'].splice(i, 1);
        }
      }
    },

  }
})
