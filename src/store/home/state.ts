export interface IndexStateInterface {
  banner: any;
  commentCommodity: any;
  gallerySeller: any;
  hotSaleSeller: any;
  latestCommodity: any;
  lookWorld: any;
}

function state (): IndexStateInterface {
  return {
    banner: null,
    commentCommodity: null,
    gallerySeller: null,
    hotSaleSeller: null,
    latestCommodity: null,
    lookWorld: null,
  }
}

export default state
