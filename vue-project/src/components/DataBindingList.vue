<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in productList" :key="idx">
          <td>{{ item.product_name }}</td>
          <td>{{ item.product_price }}</td>
          <td>{{ item.product_category }}</td>
          <td>{{ item.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      productList: [
        {
          product_name: '신형핵미사일',
          product_price: 3333333333,
          product_category: '핵미사일',
          delivery_price: 500000
        },
        {
          product_name: '구형핵미사일',
          product_price: 333333333,
          product_category: '핵미사일',
          delivery_price: 50000
        },
        {
          product_name: '최신형핵미사일',
          product_price: 33333333333,
          product_category: '핵미사일',
          delivery_price: 5000000
        }
      ]
    }
  }
}
</script>
