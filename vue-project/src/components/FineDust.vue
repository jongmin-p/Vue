<template>
<div>
    <button @click="getData">데이터 호출</button>

    <table>
        <thead>
            <tr>
                <th>지역</th>
                <th>미세먼지 농도/대기질</th>
                <th>초미세먼지 농도/대기질</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(data, idx) in dataArr">
                <td>{{data.MSRSTE_NM}}</td>
                <td>{{data.PM10}} / {{pm10Grade}}</td>
                <td>{{data.PM25}} /</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>

export default {
  data () {
    return {
      dataArr: {},
      pm10Grade: '',
      pm25Grade: ''
    }
  },

  methods: {
    getData () {
      fetch('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          this.dataArr = data.RealtimeCityAir.row // 이게 맞나
          console.log(this.dataArr)

        //   for (let i = 0; i < this.dataArr.length; i++) {
        //     if (this.dataArr[i].PM10 > 55) {
        //       this.pm10Grade = '나쁨'
        //     } else if ((this.dataArr[i].PM10 < 55)) {
        //       this.pm10Grade = '좋음'
        //     }
        //   }
        }).catch(err => console.log(err))
    }
  }
}
</script>
