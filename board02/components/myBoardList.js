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
            <!-- name : url -->
            <router-link tag="td" :to="{name : 'boardRead', params:{'item':item}}">{{item.title}}</router-link>
            <td>{{ item.view }}</td>
            <td><button v-on:click="boardDelete(item.no)">삭제</button></td>
          </tr>
        </table>
        <router-link tag="button" style="float:right;" :to="{name : 'boardWrite'}">글쓰기</router-link>
      </div>
    `,
  data: function () {
    return {
      object: []
    }
  },
  // 컴포넌트가 생성될 때, 부모 컴포넌트의 데이터를 얻어 온다.
  // boardList Reading
  created: function () {
    this.object = this.$parent.getParentData(); // 부모가 가지고 있는 즉 전체적으로 쓸 수 있는 데이터
  },
  methods: {
    boardDelete: function (no) {
      // boardDelete
      for (let i = 0; i < this.object.length; i++) {
        if (this.object[i].no == no) {
          this.object.splice(i, 1);
        }
      }
      // 변경된 data를 알려준다
      this.$parent.setParentData(this.object);
    }
  }
}