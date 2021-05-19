import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ArtworkStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<ArtworkStateInterface, StateInterface> = {
  /**
   * 艺术品搜索
   *
   * @param {*} { commit }
   * @param {*} payload
   * @return {*}
   */
  async getArtworkSearch ({ commit }, payload) {
    // console.log("getArtworkSearch", payload)
    // const {
    //   category,
    //   classification,
    //   material,
    //   model,
    //   place,
    //   ruiwu,
    //   shape,
    //   specification,
    //   style,
    //   technique,
    //   theme,
    //   type,
    //   use,
    //   ...search
    // } = payload;

    let price = '';
      if(payload.pricemin && payload.pricemax){
        price = `${payload.pricemin},${payload.pricemax}`
      }else if(payload.pricemin){
        price = `0,${payload.pricemin}`
      }else if(payload.pricemax){
        price = `0,${payload.pricemax}`
      }

    return await axiosInstance.get('/api/commodity/searchs', {
      params: {
        id: payload.id,
        commodityId: payload.commodityId,
        sellerId: payload.sellerId,
        name: payload.name,
        price: price,

        colors: payload.color ? payload.color.toString() : '',

        categorys: payload.category ? payload.category.toString() : '',
        classifications: payload.classification ? payload.classification.toString() : '',
        materials: payload.material ? payload.material.toString() : '',
        models: payload.model ? payload.model.toString() : '',
        places: payload.place ? payload.place.toString() : '',
        ruiwus: payload.ruiwu ? payload.ruiwu.toString() : '',
        shapes: payload.shape ? payload.shape.toString() : '',
        specifications: payload.specification ? payload.specification.toString() : '',
        styles: payload.style ? payload.style.toString() : '',
        techniques: payload.technique ? payload.technique.toString() : '',
        themes: payload.theme ? payload.theme.toString() : '',
        types: payload.type ? payload.type.toString() : '',
        uses: payload.use ? payload.use.toString() : '',

        news: payload.news,

        pageSize: payload.pageSize,
        currentPage: payload.currentPage,


        // ...search,
        // categorys: JSON.stringify(category),
        // classifications: JSON.stringify(classification),
        // materials: JSON.stringify(material),
        // models: JSON.stringify(model),
        // places: JSON.stringify(place),
        // ruiwus: JSON.stringify(ruiwu),
        // shapes: JSON.stringify(shape),
        // specifications: JSON.stringify(specification),
        // styles: JSON.stringify(style),
        // techniques: JSON.stringify(technique),
        // themes: JSON.stringify(theme),
        // types: JSON.stringify(type),
        // uses: JSON.stringify(use),

      }
    }).then(response => {
      // const { total, currentPage, pageSize, list } = response.data.data;
      // commit('setSearchData', list)
      // commit('setPagination', { total, currentPage, pageSize })
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async getArtwork ({ commit }, payload) {
    return await axiosInstance.get('/api/BFF/commodity', {
      params: {
        locale: payload.locale,
        commodityId: payload.artworkId
      }
    }).then(response => {
      const { data } = response.data;
      commit('setData', data)
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async getArtworkOptions({ commit }, payload) {
    return await axiosInstance.get('/api/BFF/artwork/options', {
      params: {
        locale: payload.locale
      }
    })
    .then(response => {
      return response.data;

    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async sendEmailBid({ commit }, payload) {
    return await axiosInstance.post('/api/email/bid', {
      email: payload.email,
      currency: payload.currency,
      price: payload.price,
      msg: payload.msg,
    })
    .then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  }

}

export default actions
