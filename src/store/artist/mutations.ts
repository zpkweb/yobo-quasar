import { MutationTree } from 'vuex'
import { ArtistStateInterface } from './state'

const mutation: MutationTree<ArtistStateInterface> = {
  setPortrait (state, payload) {
    state.portrait = payload;
  },
  setSearch (state, payload) {
    state.search.tag = payload.tag;
    state.search.country = payload.country;
    state.search.surname = payload.surname;
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
