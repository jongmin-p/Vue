import myHeader from './components/header.js'

let template =

    `
    <div>
        <my-header v-bind:parentData.sync="this.$data"></my-header>
    </div>
    `;

new Vue({
    el: '#app',
    template: template,
    data: {
    },
    components: {
        // 공통으로 사용할 기능을 header-comp로 이동
        'my-header': myHeader,
    },
    methods: {
    }
})
