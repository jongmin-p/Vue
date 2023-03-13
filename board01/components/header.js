//모듈
export default {
  // 정의한 내용을 다른 곳에서 불러 쓸 수 있도록 한다 
  // 해당 모듈을 불러와서 쓸 때에는 import
  template:
    `
    <header>
      <h2>간단한 게시판</h2>
      <p>게시판 데이터 json 파일 읽기</p>
      <input type="file" v-on:change="loadData($event)">
      <button v-on:click="saveBoardList">게시판 저장하기</button>
    </header>
    `,
  props: ['parentData'], // 부모가 가진 데이터를 다 가져오는거 ( this.$data << 이기때문이다)
  methods: {
    loadData: function (event) { // 파일을 읽어들이는 메소드
      console.log(event.target.files)
      let file = event.target.files[0].name;
      if (file) {
        fetch("data/" + file)
          .then(response => response.json())
          .then(data => {
            // this.dataArray = data;
            // 부모의 데이터를 불러와서 넣어주는거
            this.parentData.dataArray = data;
            if (this.parentData.dataArray != null && this.parentData.dataArray['board'].length > 0) {
              this.parentData.listOk = true;
            }
            // parentData가 바뀌었으니 수정하라는 명령문
            this.$emit('update:parentData', this.parentData)
          }).catch(err => console.log(err));
      }
    },
    saveBoardList: function () {
      //게시글을 담고 있는 변수 - object
      let data = this.dataArray;

      if (data.length == 0) {
        alert('저장할 게시판 내용이 없습니다.');
        return;
      }

      if (typeof data === 'object') {
        //object를 json형태의 문자열로 변환
        data = JSON.stringify(data, undefined, 4);
      }

      //파일 다운 받기 위해서 사용
      //이미지, 텍스트 다운
      let blob = new Blob([data], { type: 'text/json' });
      let a = document.createElement('a');
      //다운 받을 파일 명
      a.download = 'board.json';
      //서버에서 다운 받을 파일 URL(경로)
      a.href = window.URL.createObjectURL(blob);
      //a태그 클릭 이벤트 실행
      a.click();
    }
  }
}