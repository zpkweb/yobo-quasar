export interface MyStateInterface {
  wishlist: any;
  myArtist: any;
  browsingHistory: any;
}

function state (): MyStateInterface {
  return {
    wishlist: null,
    myArtist: null,
    browsingHistory: null,
  }
}

export default state
