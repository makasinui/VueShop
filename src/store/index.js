import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products:[],
    news_short:[],
    news:[]
  },
  mutations: {
    SET_NEWS_SHORT_TO_STATE:(state, news_short)=>{
      state.news_short = news_short;
    },
    SET_PRODUCTS_TO_STATE:(state, products)=>{
      state.products = products;
    },
    SET_NEWS_TO_STATE:(state, news)=>{
      state.news = news;
    }
  },
  actions: {
    GET_NEWS_SHORT_FROM_API({commit}){
      return axios('http://localhost:3000/news_short', {
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
      
    GET_PRODUCTS_FROM_API({commit}){
      return axios('http://localhost:3000/products', {
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
      return axios('http://localhost:3000/news', {
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
    }
  },
  getters:{
    NEWS_SHORT(state){
      return state.news_short;
    },
    PRODUCTS(state){
      return state.products;
    },
    NEWS(state){
      return state.news;
    }
  },
  modules: {
  }
})
