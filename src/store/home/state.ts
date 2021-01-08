export interface HomeStateInterface {
  banner: any;
  commentCommodity: any;
  gallerySeller: any;
  hotSaleSeller: any;
  latestCommodity: any;
  lookWorld: any;
}

function state (): HomeStateInterface {
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
