<template>
<div>
    <button type="button" @click="getData">데이터 출력</button>

    <table>
        <thead>
            <tr>
                <th>축제 이름</th>
                <th>주소</th>
                <th>홈페이지</th>
                <th>사진</th>
                <th>연락처</th>
            </tr>
            <tbody>
                <tr :key="data.idx" v-for="data in gimhaeArray">
                    <td>{{data.name}}</td>
                    <td>{{data.address}}</td>
                    <td><a :href=data.homepage>{{data.homepage}}</a></td>
                    <td><img :src=data.images[1] style="width:100px"></td>
                    <td>{{data.phone}}</td>
                </tr>
            </tbody>
        </thead>
    </table>
</div>
</template>
<script>

export default {
  data () {
    return {
      gimhaeArray: {}
    }
  },

  methods: {
    getData () {
      fetch('https://cors-anywhere.herokuapp.com/https://www.gimhae.go.kr/openapi/tour/tourinfo.do')
      // 성공적으로 응답받으면, 결과를 json 으로 파싱
        .then(res => res.json())
        .then(data => {
          console.log(data)
          // 변수 gimhaeArray 에다가 결과 저장
          this.gimhaeArray = data.results
          console.log(this.getData)
        }).catch(err => console.log(err))
    }
  }
}
</script>
