
export interface ArtworkSearchStateInterface {
  category: Array<String>;
  classification: Array<String>;
  material: Array<String>;
  model: Array<String>;
  place: Array<String>;
  ruiwu: Array<String>;
  shape: Array<String>;
  specification: Array<String>;
  style: Array<String>;
  technique: Array<String>;
  theme: Array<String>;
  type: Array<String>;
  use: Array<String>;
  pricemin: string;
  pricemax: string;
  color: string;
  hots: boolean;
  news: boolean;
}
export interface ArtworkPaginationStateInterface {
  total: number,
  currentPage: number,
  pageSize: number
}

export interface OptionsStateInterface {
  category: Array<StateInterface>;
  classification: Array<StateInterface>;
  material: Array<StateInterface>;
  model: Array<StateInterface>;
  place: Array<StateInterface>;
  ruiwu: Array<StateInterface>;
  shape: Array<StateInterface>;
  specification: Array<StateInterface>;
  style: Array<StateInterface>;
  technique: Array<StateInterface>;
  theme: Array<StateInterface>;
  type: Array<StateInterface>;
  use: Array<StateInterface>;
}

export interface StateInterface {
  label: string;
  value: string;
  checked: boolean;
}

export interface ArtworkStateInterface {
  defaultSearch: ArtworkSearchStateInterface;
  search: ArtworkSearchStateInterface;
  searchData: any;
  pagination: ArtworkPaginationStateInterface;
  data: any;
  options: any;
}


function state(): ArtworkStateInterface {
  return {
    data: null,
    defaultSearch: {
      category: [],
      classification: [],
      material: [],
      model: [],
      place: [],
      ruiwu: [],
      shape: [],
      specification: [],
      style: [],
      technique: [],
      theme: [],
      type: [],
      use: [],
      pricemin: '',
      pricemax: '',
      color: '',
      hots: false,
      news: false
    },
    search: {
      category: [],
      classification: [],
      material: [],
      model: [],
      place: [],
      ruiwu: [],
      shape: [],
      specification: [],
      style: [],
      technique: [],
      theme: [],
      type: [],
      use: [],
      pricemin: '',
      pricemax: '',
      color: '',
      hots: false,
      news: false
    },
    searchData: null,
    options: {
      shape: [],

      color: [
        {
          name: "ffc0cb"
        },
        {
          name: "feff00"
        },
        {
          name: "048004"
        },
        {
          name: "ffa500"
        },
        {
          name: "1601ff"
        },
        {
          name: "800180"
        },
        {
          name: "abcffc"
        },
        {
          name: "ff0102"
        },
        {
          name: "808080"
        },

      ],
      category: [],
      classification: [],
      material: [],
      model: [],
      place: [],
      ruiwu: [],

      specification: [],
      style: [],
      technique: [],
      theme: [],
      type: [],
      use: [],
    },
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 9
    },
  }
}

export default state
