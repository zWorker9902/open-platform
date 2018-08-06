import  $ from 'jquery';
import  'bootstrap'
import '../common'
import '../style/common.less'
import '../style/onlinedb.less'
import Header from '../tpl/Header/header'
import Tips from '../tpl/Tips/tips'
import { PageIndex, getQueryString} from '../common'

class OnlinedbPage {
  constructor(document){
    this.document = document
    this.initialPage()
  }

  initialPage(){
    this.header = new Header($(this.document).find('.header'), PageIndex.ONLINEDB)
    this.tips = new Tips($(this.document).find('.help-tips'))

    this.$submit = $(this.document).find('#submit')
    this.$gateway = $(this.document).find('#gateway')
    this.$apiId = $(this.document).find('#apiId')
    this.$version = $(this.document).find('#version')
    this.$appKey = $(this.document).find('#appKey')
    this.$method = $(this.document).find('#method')
    this.$rsaPrivateKey = $(this.document).find('#rsaPrivateKey')
    this.$data = $(this.document).find('#data')
    this.$apiResponse = $(this.document).find('#apiResponse')

    this.bindEvent()
  }

  bindEvent(){
    let self = this;

    self.tips.onShow(true)

    const url = self.gethostUrl()
    console.log(url)

    self.$submit.on('click', () => {
      self.$apiResponse.text('等待返回结果>>>>>>>')
      let apiId = self.$apiId.val()
      if(apiId === null || apiId === "") {
        self.$apiResponse.text("API名称(API Name) 不能为空!")
        return false
      }

      let version = self.$version.val()
      if( version === null || version === "" ) {
        self.$apiResponse.text("API 版本(version) 不能为空!")
        return false
      }

      let gateway = self.$gateway.val()
      if( gateway === null || gateway === "" ) {
        self.$apiResponse.text("网关地址(Gateway url) 不能为空!")
        return false
      }

      let appKey = self.$appKey.val()
      if( appKey === null || appKey === "" ) {
        self.$apiResponse.text('AppKey 不能为空!')
        return false
      }

      let rsaPrivateKey = self.$rsaPrivateKey.val()
      if( rsaPrivateKey === null || rsaPrivateKey === "" ) {
        self.$apiResponse.text("RSA PrivateKey 不能为空!")
        return false
      }

      let method = self.$method.find("input[name='httpMethod']:checked").val()
      let data = self.$data.val()

      $.ajax({
        async : false,
        type: "POST",
        url: url+"/tools/api/open/callJwt",
        data : {
          apiId : apiId,
          version: version,
          gateway : gateway,
          method : method,
          appKey : appKey,
          pkcs8Type : true,
          rsaPrivateKey : rsaPrivateKey,
          data  : _data_
        },
        dataType : "json",
        success: function($json){
          var resultArr = $json.result.split("\n");
          self.$apiResponse.text(resultArr[resultArr.length-2]);
        },
        error: function($json){
          //请求出错处理
          self.$apiResponse.text($json.result);
        }
      });
    })
  }

  gethostUrl(){
    let __url__ = window.location.protocol + "//" ;
    __url__ += window.location.hostname ;
    __url__ += !!window.location.port ? ":"+ window.location.port : "";
    __url__ += "";
    return __url__;
  }
}

$(()=>{
  new OnlinedbPage(document)
});
