export interface ArtistStateInterface {
  search: ArtistSearchStateInterface;
  searchData: any;
  portrait: any;
  pagination: ArtistPaginationStateInterface;
}
export interface ArtistSearchStateInterface {
  tag: string;
  country: string;
  surname: string;
}
export interface ArtistPaginationStateInterface {
  total: number,
  currentPage: number,
  pageSize: number
}

function state (): ArtistStateInterface {
  return {
    search: {
      tag: '',
      country: '',
      surname: ''
    },
    searchData: null,
    portrait: null,
    pagination: {
      total: 0,
      currentPage: 1,
      pageSize: 10
    }
  }
}

export default state
