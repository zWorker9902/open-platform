import  $ from 'jquery';
import '../style/common.less'
import '../style/introduction.less'

import Header from '../tpl/Header/header'
import Tips from '../tpl/Tips/tips'
import { PageIndex } from '../common'

class IntroductionPage {
  constructor(document){
    this.document = document
    this.initialPage()
  }

  initialPage(){
    this.header = new Header($(this.document).find('.header'), PageIndex.INTRODUCTION)
    this.tips = new Tips($(this.document).find('.help-tips'))
    this.$stepWrap = $(this.document).find('.step-wrap')

    this.bindEvent()
  }

  bindEvent(){
    let self = this

    self.tips.onShow(true)

    self.$stepWrap.on('click', 'a', function(e){
      // 配置点击时跳转到帮助与说明页面的 用户注册和申请流程
      sessionStorage.setItem("tab", "4")
      let href = $(this).attr('href')
      sessionStorage.setItem("target", href.substr(href.lastIndexOf("#")))

      location.href = 'help.html'

      // 阻止a链接默认行为
      e.preventDefault?e.preventDefault():window.event.returnValue = false
    })
  }
  //解绑事件
  unBindEvent(){
  }
}

$(()=>{
  new IntroductionPage(document)
});
