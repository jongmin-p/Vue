export default {
  template:
    `
      <div>
        <table id="list">
          <tr>
            <th style="width:50px;">글번호</th>
            <th>글제목</th>
            <th style="width:50px;">조회수</th>
            <th style="width:70px;"></th>
          </tr>
          <tr v-for="item in object" v-bind:key="item.no">
            <td>{{ item.no }}</td>
            <td v-on:click="boardRead(item)">{{ item.title }}</td>
            <td>{{ item.view }}</td>
            <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
          </tr>
        </table>
        <button style="float:right;" v-on:click="boardWrite">글쓰기</button>
      </div>
    `,
  props: ['object'], // 연결되는건 dataArray['board']
  methods: {
    // 부모가 정의해둔걸 $emit으로 쓰겠다 .
    boardRead: function (info) {
      // boardRead
      this.$emit('board-read', info); // 매개변수가 존재하면 , 를 통해 추가 가능
    },
    boardDelete: function (no) {
      // boardDelete
      this.$emit('board-delete', no);
    },
    boardWrite: function () {
      // boardWrite
      this.$emit('board-write');
    }
  }
}