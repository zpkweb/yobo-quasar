import { MutationTree } from 'vuex'
import { ArtworkStateInterface } from './state'

const mutation: MutationTree<ArtworkStateInterface> = {

  setSearch (state, payload) {
    const { shape, pricemin, pricemax, color, theme } = payload;
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
  },
  setData (state, payload) {
    state.data = payload;
  },
  setOptins(state, payload) {
    state.options = Object.assign({}, state.options, payload);
  },
  setOptinsItem(state, payload) {
    console.log("setOptinsItem", payload)
    if(payload.index != undefined){
      state.options[payload.option][payload.index].checked = !payload.checked;
    }else{
      for(let i in state.options[payload.option]){
        state.options[payload.option][i].checked = !payload.checked;
      }
    }

  },
  setOptionsShape(state, payload) {
    state.options.shape = payload;
  },
  setOptionsTheme(state, payload) {
    state.options.theme = payload;
  },
  setOptionsCategory(state, payload) {
    state.options.category = payload;
  },
  setOptionsTechnique(state, payload) {
    state.options.technique = payload;
  }


}

export default mutation
