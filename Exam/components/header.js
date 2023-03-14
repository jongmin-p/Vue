//모듈
export default {
    // 정의한 내용을 다른 곳에서 불러 쓸 수 있도록 한다 
    // 해당 모듈을 불러와서 쓸 때에는 import
    template:
        `
        <header>
            <h2>영화검색 사이트</h2>
            <p2>영화 검색 (오늘 날짜: 2023년 3월 14일)</p2>
            <input type="date" id="date" value="2023-03-14">
            <button v-on:click="selectDate">검색</button>
        </header>
        `,
    // props: ['parentData'], // 부모가 가진 데이터를 다 가져오는거 ( this.$data << 이기때문이다)

    methods: {

    }
}