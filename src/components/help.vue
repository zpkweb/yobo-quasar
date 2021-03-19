<template>
    <q-card class="column full-height help-card" style="width: 420px">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="help-header bg-white">
          <q-toolbar>
            <q-toolbar-title>推荐帮助</q-toolbar-title>
            <q-btn class="icon-close" flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-footer class="help-footer bg-white text-brand">
            <div class="help-footer-btn">联系客服</div>
        </q-footer>


        <q-page-container>
          <q-page padding class="help-page">
            <div class="help-page-search">
              <q-img class="help-page-search-icon" src="~assets/images/help-search.png" width="16px" height="15px" />
              <input class="help-page-search-input" type="text" placeholder="如何私人定制" />
            </div>
            <div class="help-page-content">
              <div class="help-page-list">
                <div class="help-page-list-title">
                  1.你们是如何选择可供销售的艺术品的呢？
                </div>
                <div class="help-page-list-content">
                  在YOBO，我们精心遴选艺术家，而艺术家们选择他们要销售的作品。我们保留修订网站内容的权利，当一件艺术品的真实性受到质疑时，我们有权利将其下架。
                </div>
              </div>
              <div class="help-page-list">
                <div class="help-page-list-title">
                  2.谁可以在YOBO销售自己的作品？
                </div>
                <div class="help-page-list-content">
                  我们所有的艺术家都在当地享有名望。我们在世界各地找到这些艺术家，以图为您提供国际化，高品质的多样选择。 click here!<br/>你是一个艺术家么，请通过 联系我们 page. 我们会对所有的申请作出回应。
                </div>
              </div>
              <div class="help-page-list">
                <div class="help-page-list-title">
                  3.艺术品可供复印么？
                </div>
                <div class="help-page-list-content">
                  YOBO的所有作品均系原创；这些作品都是孤版，不会出现延伸系列或重新发表的状况
                </div>
              </div>
              <div class="help-page-list">
                <div class="help-page-list-title">
                  4.我心仪的作品已经售出 - 我可以委托艺术家重新创作一份么？
                </div>
                <div class="help-page-list-content">
                  一些我们的艺术家接受客户委托，当您心仪的作品售出时，您可以联系我们，我们会联系艺术家重新创作！
                </div>
              </div>
              <div class="help-page-list">
                <div class="help-page-list-title">
                  5.YOBO的所有作品都是可以购买的么？
                </div>
                <div class="help-page-list-content">
                  这要看情况。通常当一件作品已经售出时，您可以联系我们，我们可以为您推荐该艺术家的其他作品（包括还未上线的作品）。同时也有一些艺术家接受客户委托进行创作！
                </div>
              </div>
              <div class="help-page-list">
                <div class="help-page-list-title">
                  6.我可以取消订单么？
                </div>
                <div class="help-page-list-content">
                  当然。在作品邮送前，您可以通过发送邮件取消订单。当作品邮送后，您可在收到作品的14天内取消订单。在作品邮送后，我们会在确认作品完好无损的邮回给艺术家时为您办理退款。
                </div>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-card>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.help-card{
  box-shadow: 0 0 20px rgba(0,0,0,.2);
}
.help-header {
  color: #152c2b;
  border-bottom: 1px solid #f2f1f1;
  text-align: center;
}
.help-footer {
  padding: 20px;
  border-top: 1px solid #f2f1f1;
  .help-footer-btn {
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    color: #d6d7c5;
    font-size: 14px;
    font-weight: bold;
    background-color: #152c2b;
    cursor: pointer;
  }
}
.help-page {
  .help-page-search {
    display: flex;
    width: 100%;
    height: 48px;
    padding: 10px;
    color: #999999;
    border: 1px solid #b8bfbf;
    overflow: hidden;
    .help-page-search-icon{
      margin: 5px 10px 0 15px;
    }
    .help-page-search-input{
      flex: 1;
      outline: none;
      border: 0;
    }
  }

  .help-page-list {
    margin-top: 10px;
    font-size: 14px;
    cursor: pointer;
    .help-page-list-title {
      color: #333;
      font-weight: bold;
    }
    .help-page-list-content{
      padding: 10px;
      color: #999;
    }
  }
  .help-page-list:hover{

    .help-page-list-title {
      color: #333;
    }
    .help-page-list-content{
      color: #152c2b;
      background-color: #d6d7c5;
    }
  }

}
</style>
