import { MutationTree } from 'vuex'
import { ArtworkStateInterface } from './state'

const mutation: MutationTree<ArtworkStateInterface> = {

  setSearch (state, payload) {
    const { shape, pricemin, pricemax, color, theme } = payload;
    console.log(shape,pricemin,pricemax,color, theme)
    state.search.shape = shape;
    state.search.pricemin = pricemin;
    state.search.pricemax = pricemax;
    state.search.color = color;
    state.search.theme = theme;

  },
  setSearchData (state, payload) {
    state.searchData = payload;
  },
  setPagination (state, payload) {
    state.pagination.total = payload.total;
    state.pagination.currentPage = payload.currentPage;
    state.pagination.pageSize = payload.pageSize;
  }
}

export default mutation
