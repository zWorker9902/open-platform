import  $ from 'jquery';
import  'bootstrap'
import '../common'
import '../style/common.less'
import '../style/help.less'
import Header from '../tpl/Header/header'
import Tips from '../tpl/Tips/tips'
import { PageIndex, getQueryString} from '../common'

class HelpPage {
  constructor(document){
    this.document = document
    this.initialPage()
  }

  initialPage(){
    this.header = new Header($(this.document).find('.header'), PageIndex.HELP)
    this.tips = new Tips($(this.document).find('.help-tips'))
    this.$dwlist = $(this.document).find('.dw-list')
    this.$nav = $(this.document).find('.nav')
    this.$stepWrap = $(this.document).find('.step-wrap')
    this.$dwDetail = $(this.document).find('.dw-detail')

    this.$footer = $(this.document).find('.footer')

    this.bindEvent()
  }

  bindEvent(){
    let self = this;

    self.tips.onShow(true)

    self.$nav.affix({
      offset: {
        top: 0,
        bottom: 360
      }
    })

    self.$dwlist.on('click', 'li', function(e){
      const href = $(this).find('a').attr('href')
      if(href){
        let $target = self.$dwDetail.find(href)

        self.onResetHeight($target)
        $target.show().siblings().hide()

        self.$dwDetail.scrollTop(
          self.$dwDetail.find(href).offset().top - self.$dwDetail.offset().top + self.$dwDetail.scrollTop()
        );

        $(this).addClass('active').siblings().removeClass('active')

        $(window).scrollTop(0)
        // 阻止a链接默认行为
        e.preventDefault?e.preventDefault():window.event.returnValue = false
      }
    })

    self.$stepWrap.on('click', 'a', function(e){
      const href = $(this).attr('href')
      $(window).scrollTop(
        self.$dwDetail.find(href).offset().top - self.$dwDetail.offset().top + self.$dwDetail.scrollTop()
      );

      sessionStorage.setItem("tab", "4")
      sessionStorage.setItem("target", $(this).attr('href'))

      // 阻止a链接默认行为
      e.preventDefault?e.preventDefault():window.event.returnValue = false
    })

    // 获取url传递参数
    const tabIndex = getQueryString('tab')
    if(tabIndex){
      self.$dwlist.find(`a[data-tab-index=${tabIndex || 1}]`).parent().click()
    }else{
      // 读取页面跳转记录数据
      let tab = parseInt(sessionStorage.getItem("tab"))
      let target = sessionStorage.getItem("target")
      self.onChangeItem(tab, target)
      sessionStorage.clear()
    }
  }

  // 重设元素高度
  onResetHeight($target){
    let windowHeight = $(window).height()
    const divHeight = $target.height()
    let targetHeight = divHeight >= windowHeight ? divHeight : windowHeight
    $target.height(targetHeight)
  }

  onChangeItem(index, target){
    let self = this
    let $item = self.$dwlist.find(`a[data-tab-index=${index}]`).parent()
    $item.addClass('active').siblings().removeClass('active')
    let $target = self.$dwDetail.find(target)

    if(target && $target){
      if(target || target.includes('process')){
        self.$dwDetail.find("#process").show()
      }
      else {
        self.onResetHeight($target)
      }

      self.$dwDetail.find($item.attr('href')).show()
      $(window).scrollTop(
        $target.offset().top - self.$dwDetail.offset().top + self.$dwDetail.scrollTop()
      );
    }else{
      self.$dwlist.find('li:eq(1)').click()
    }
  }

  //解绑事件
  unBindEvent(){
  }
}

$(()=>{
  new HelpPage(document)
});
