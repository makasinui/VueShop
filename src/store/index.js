import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  /**
   * Компонент VueX, предназначен для взаимодействия с данными, в целом, используется как хранилище данных
   * 
   */
  state: { 
    searchValue:'',
    cart:[],
    cartCount:0,
    products:[],
    news_short:[],
    news:[],
    products_sssr:[],
    products_rus:[],
    products_asia:[]
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX:(state,value) =>{
      state.searchValue = value
    },
    SET_CART:(state,product) =>{
      state.cart.push(product)
      state.cartCount++
    },
    SET_NEWS_SHORT_TO_STATE:(state, news_short)=>{
      state.news_short = news_short;
    },
    SET_PRODUCTS_TO_STATE:(state, products)=>{
      state.products = products;
    },
    SET_NEWS_TO_STATE:(state, news)=>{
      state.news = news;
    },
    SET_PRODUCTS_SSSR_TO_STATE:(state, products_sssr)=>{
      state.products_sssr = products_sssr
    },
    SET_PRODUCTS_RUS_TO_STATE:(state, products_rus)=>{
      state.products_rus = products_rus
    },
    SET_PRODUCTS_ASIA_TO_STATE:(state, products_asia)=>{
      state.products_asia = products_asia
    },
    REMOVE_FROM_CART:(state, index)=>{
        console.log(state,index)
    }
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
      commit('SET_SEARCH_VALUE_TO_VUEX',value)
    },
    GET_NEWS_SHORT_FROM_API({commit}){
      return axios('https://json-servermakasinui.herokuapp.com/news_short', {
        method:"GET"
      })
      .then((news_short) =>{
        commit('SET_NEWS_SHORT_TO_STATE',news_short.data)
        return news_short
      })
      .catch((error)=>{
        console.log(error);
        return error;
      })},
      
    GET_PRODUCTS_FROM_API({commit}){ //Получение данных с json server при помощи библиотеки axios
      return axios('https://json-servermakasinui.herokuapp.com/products', {
        method:"GET"
      })
      .then((products) =>{
        commit('SET_PRODUCTS_TO_STATE',products.data)
        return products
      })
      .catch((error)=>{
        console.log(error);
        return error;
      })
    },
    GET_NEWS_FROM_API({commit}){
      return axios('https://json-servermakasinui.herokuapp.com/news', {
        method:"GET"
      })
      .then((news) =>{
        commit('SET_NEWS_TO_STATE',news.data)
        return news
      })
      .catch((error)=>{
        console.log(error);
        return error;
      })
    },
    GET_PRODUCTS_SSSR_FROM_API({commit}){
      return axios('https://json-servermakasinui.herokuapp.com/products_sssr', {
        method:"GET"
      })
      .then((products_sssr) =>{
        commit('SET_PRODUCTS_SSSR_TO_STATE',products_sssr.data)
        return products_sssr
      })
      .catch((error)=>{
        console.log(error);
        return error;
      })
    },
  GET_PRODUCTS_RUS_FROM_API({commit}){
    return axios('https://json-servermakasinui.herokuapp.com/products_rus', {
      method:"GET"
    })
    .then((products_rus) =>{
      commit('SET_PRODUCTS_RUS_TO_STATE',products_rus.data)
      return products_rus
    })
    .catch((error)=>{
      console.log(error);
      return error;
    })
  },
  GET_PRODUCTS_ASIA_FROM_API({commit}){
    return axios('https://json-servermakasinui.herokuapp.com/products_asia', {
      method:"GET"
    })
    .then((products_asia) =>{
      commit('SET_PRODUCTS_ASIA_TO_STATE',products_asia.data)
      return products_asia
    })
    .catch((error)=>{
      console.log(error);
      return error;
    })
  },
  ADD_TO_CART({commit}, product) {
    commit('SET_CART', product)
  },
  DELETE_FROM_CART({commit}, index){
    commit('REMOVE_FROM_CART', index)
  }
},
  getters:{
    SEARCH_VALUE(state){
      return state.searchValue
    },
    NEWS_SHORT(state){
      return state.news_short;
    },
    PRODUCTS(state){
      return state.products;
    },
    NEWS(state){
      return state.news;
    },
    PRODUCTS_SSSR(state){
      return state.products_sssr;
    },
    PRODUCTS_RUS(state){
      return state.products_rus;
    },
    PRODUCTS_ASIA(state){
      return state.products_asia;
    },
    CART(state){
      return state.cart;
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
