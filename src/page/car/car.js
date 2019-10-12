import He from '../../components/he/he.vue'
export default {
  data() {
    return {
      mm: false,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      checked: false,
      //tabel选项卡1~5
      //索引字母表
      List: [
        { 'title': 'A', 'text': ['Adf', "asdkjf"] },
        { 'title': 'D', 'text': ['Adf', "asdkjf"] },
        { 'title': 'M', 'text': ['Adf', "asdkjf"] },
        { 'title': 'S', 'text': ['Adf', "asdkjf"] },
        { 'title': 'Y', 'text': ['Adf', "asdkjf"] },
        { 'title': 'X', 'text': ['Adf', "asdkjf"] },
        { 'title': 'W', 'text': ['Adf', "asdkjf"] },
        { 'title': 'Z', 'text': ['Adf', "asdkjf"] },
      ],
      option1: [
        { text: '排序', value: 0 },
        { text: '默认排序', value: 1 },
        { text: '首付最低', value: 3 },
        { text: ' 车价最高', value: 4 },
        { text: '最低月供', value: 5 }
      ],

      // // option2: [

      // ],
      option3: [
        { text: '车型', value: 0 },
        { text: '两厢轿车', value: 1 },
        { text: '三厢轿车', value: 2 },
        { text: 'SUV', value: 2 },
        { text: 'MPV', value: 2 }],

      option4: [
        { text: '首付', value: 0 },
        { text: '排序', value: 1 },
        { text: '默认排序', value: 2 },
        { text: '首付最低', value: 3 },
        { text: ' 车价最高', value: 4 },
        { text: '最低月供', value: 5 }
      ],
      option5: [
        { text: '筛选', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    };
  },
  methods: {
    //tabel 选项卡
    ds() {
      console.log(2)
    },
    xx(index) {
      console.log(index);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    }
  },
  components: {
    He
  }
};