export interface UserStateInterface {
  info: any;
  wishlist: any;
  like: any;
  browsingHistory: any;
}

function state (): UserStateInterface {
  return {
    info: null,
    wishlist: null,
    like: null,
    browsingHistory: null
  }
}

export default state
