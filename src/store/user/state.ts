export interface UserStateInterface {
  info: any;

}

function state (): UserStateInterface {
  return {
    info: null,

  }
}

export default state
