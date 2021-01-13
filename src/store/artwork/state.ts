export interface ArtworkStateInterface {
  search: ArtworkSearchStateInterface;
  searchData: any;
  pagination: ArtworkPaginationStateInterface;
  data: any;
}
export interface ArtworkSearchStateInterface {
  shape: string;
  pricemin: string;
  pricemax: string;
  color: string;
  theme: string;
}
export interface ArtworkPaginationStateInterface {
  total: number,
  currentPage: number,
  pageSize: number
}

function state (): ArtworkStateInterface {
  return {
    search: {
      shape: '',
      pricemin: '',
      pricemax: '',
      color: '',
      theme: ''
    },
    searchData: null,
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 9
    },
    data: null,
  }
}

export default state
