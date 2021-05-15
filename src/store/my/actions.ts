import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { MyStateInterface } from './state'
import { axiosInstance } from 'src/boot/axios'


const actions: ActionTree<MyStateInterface, StateInterface> = {
  /**
   * 我最喜爱的艺术家
   *
   * @param {*} { commit }
   * @param {*} payload
   */
  async getMyArtist({ commit }, payload) {
    return await axiosInstance.get('/api/my/seller', { params: payload }).then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async addMyArtist({ commit }, payload) {
    return await axiosInstance.post('/api/my/seller', {
      userId: payload.userId,
      sellerId: payload.artistId,
    }).then(response => {
      // console.log("addMyArtist response", response.data)
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async delMyArtist({ commit }, payload) {
    return await axiosInstance.post('/api/my/seller/del', {
      userId: payload.userId,
      sellerId: payload.artistId,
    }).then(response => {
      // console.log("delMyArtist response", response.data)
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async hasMyArtist({ commit }, payload) {
    return await axiosInstance.get('/api/my/seller/has', {params: {
      userId: payload.userId,
      sellerId: payload.artistId,
    }}).then(response => {
      // console.log("hasMyArtist response", response.data)
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  /**
   * 我的最爱
   *
   * @param {*} { commit }
   * @param {*} payload
   */
  async getMyWishlist({ commit }, payload) {
    // console.log("getMyWishlist", payload)
    return await axiosInstance.get('/api/my/commodity', { params: payload }).then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async addMyArtwork({ commit }, payload) {
    return await axiosInstance.post('/api/my/commodity', {
      userId: payload.userId,
      commodityId: payload.artworkId,
    }).then(response => {
      // console.log("addMyArtwork response", response.data)

      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async delMyArtwork({ commit }, payload) {
    return await axiosInstance.post('/api/my/commodity/del', {
      userId: payload.userId,
      commodityId: payload.artworkId,
    }).then(response => {
      // console.log("delMyArtwork response", response.data)
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async hasMyArtwork({ commit }, payload) {
    return await axiosInstance.get('/api/my/commodity/has', {params: {
      userId: payload.userId,
      commodityId: payload.artworkId,
    }}).then(response => {
      // console.log("hasMyArtwork response", response.data)
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  /**
   * 我的浏览历史
   *
   * @param {*} { commit }
   * @param {*} payload
   */
  async getMyBrowsingHistory({ commit }, payload) {
    return await axiosInstance.get('/api/my/browsingHistory', { params: payload }).then(response => {
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async addMyBrowsingHistory({ commit }, payload) {
    return await axiosInstance.post('/api/my/browsingHistory', {
      userId: payload.userId,
      commodityId: payload.artworkId,
    }).then(response => {
      // console.log("addMyBrowsingHistory response", response.data)

      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },
  async delMyBrowsingHistory({ commit }, payload) {
    return await axiosInstance.post('/api/my/browsingHistory/del', {
      userId: payload.userId,
      commodityId: payload.artworkId,
    }).then(response => {
      // console.log("delMyBrowsingHistory response", response.data)
      return response.data;
    }).catch((err) => {
      return {
        success: false,
        message: err.response.data.message
      }
    })
  },

}

export default actions
