export interface MyStateInterface {
  wishlist: any;
  myArtist: any;
  browsingHistory: MyBrowsingHistoryStateInterface;
}

export interface MyBrowsingHistoryStateInterface {
  list: any;
  total: number,
  currentPage: number,
  pageSize: number
}


function state (): MyStateInterface {
  return {
    wishlist: null,
    myArtist: null,
    browsingHistory: {
      list: null,
      total: 0,
      currentPage: 0,
      pageSize: 0
    },
  }
}

export default state
