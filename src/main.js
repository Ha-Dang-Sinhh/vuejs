// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.filter('formatDate', function (date) {
  const arr = date.split("-");
  arr[0] = "Ngày " + arr[0];
  arr[1] = "Tháng " + arr[1];
  arr[2] = "Năm " + arr[2];

  return arr.join(" ");
})

Vue.filter('formatCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  let formatter = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  });
  return formatter.format(value);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
