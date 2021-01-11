import { MutationTree } from 'vuex'
import { ArtistStateInterface } from './state'

const mutation: MutationTree<ArtistStateInterface> = {
  setPortrait (state, payload) {
    state.portrait = payload;
  },
  setSearch (state, payload) {
    const { tag, country, surname } = payload;
    console.log(tag,country,surname)
    state.search.tag = tag;
    state.search.country = country;
    state.search.surname = surname;

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
