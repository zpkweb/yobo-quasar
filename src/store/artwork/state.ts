export interface ArtworkStateInterface {
  search: ArtworkSearchStateInterface;
  searchData: any;
  pagination: ArtworkPaginationStateInterface;
  data: any;
  options: OptionsStateInterface;
}
export interface ArtworkSearchStateInterface {
  shape: string;
  pricemin: string;
  pricemax: string;
  color: string;
  theme: string;
  category: string;
  technique: string;
  hots: boolean;
  news: boolean;
}
export interface ArtworkPaginationStateInterface {
  total: number,
  currentPage: number,
  pageSize: number
}

export interface OptionsStateInterface {
  shape: any;
  theme: any;
  category: any;
  technique: any;
}

function state (): ArtworkStateInterface {
  return {
    search: {
      shape: '',
      pricemin: '',
      pricemax: '',
      color: '',
      theme: '',
      category: '',
      technique: '',
      hots: false,
      news: false
    },
    searchData: null,
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 9
    },
    data: null,
    options: {
      shape: null,
      theme: null,
      category: null,
      technique: null
    }
  }
}

export default state
