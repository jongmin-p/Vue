<template>
  <div>
    <button @click="loadJinju">데이터 호출</button>
    <table>
        <thead>
            <tr>
                <th>축제 이름</th>
                <th>주소</th>
                <th>홈페이지</th>
                <th>사진</th>
                <th>연락처</th>
            </tr>
        </thead>
        <tbody>
            <!-- 콘솔창의 results 참고 -->
            <tr :key="item.idx" v-for="item in jinjuArray">
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.homepage}}</td>
                <td><img :src=item.images[6] style="width:100px"></td>     <!-- 사진 (단순 링크이기 때문에 src 안에다 넣기) -->
                <td>{{item.phone}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jinjuArray: {}
    }
  },
  methods: {
    loadJinju () {
      fetch('https://cors-anywhere.herokuapp.com/https://www.jinju.go.kr/openapi/tour/festival.do')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          // 데이터 담아주기  (데이터 중에서 results 만 가지고 옴 - results 부분은 콘솔창 확인)
          this.jinjuArray = data.results
          console.log(this.jinjuArray)
        }).catch(err => console.log(err))
    }
  }
}
</script>
