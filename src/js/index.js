import $ from 'jquery';
import '../common';
import '../style/index.less';
import 'bootstrap';
import Header from '../tpl/Header/header';
import Tips from '../tpl/Tips/tips';
import Parallax from '../common/parallax';

class IndexPage {
  constructor(document) {
    this.document = document
    this.initialPage();
  }

  initialPage(){
    this.header = new Header($(this.document).find('.header'))
    this.tips = new Tips($(this.document).find('.help-tips'))

    this.$main      = $(this.document).find('.main')
    this.$subframe  = $(this.document).find('.subframe')
    this.$carousel  = $(this.document).find('.carousel')
    this.$search    = $(this.document).find('.search')
    this.$searchInput  = $(this.document).find('.search-input')
    this.$searchKey = $(this.document).find('.search-input input')
    this.$helpTips  = $(this.document).find('.help-tips')
    this.$areasWrap = $(this.document).find('.areas-wrap')

    this.$backTop = $(this.document).find('.back-top')

    // 数据定义
    this.topsTop = $(window).height() * 0.4;

    this.bindEvent();
  }

  bindEvent() {
    let self = this;

    let useragent = navigator.userAgent.toLowerCase();
    if(useragent.indexOf('windows') > -1) {
      self.$main.find('#adaptText').css('margin-left', '-4px')
    }

    /* 轮播 */
    self.$carousel.carousel({
      interval: 3000,
      pause: "hover"
    })

    /* 相对运动 */
    self.$carousel.find('.scene').each(function(){
      new Parallax(this)
    })

    let height = this.$carousel.height()

    self.tips.onSetShowBack(height)

    self.$helpTips.css('top', height+20).show()
    $(window).scroll(()=>{
      var toTop = height+20 - $(window).scrollTop()
      self.$helpTips.css('top', toTop > this.topsTop? toTop : this.topsTop)
    });

    self.$areasWrap.on('click', '.area', function() {
      // console.log($(this).parent().find(".title").text())
      let searchKey = $(this).find(".title").text();

      // window.location = `api.html?key=${searchKey}`;
    })
  }


  //解绑事件
  unBindEvent(){

  }
}

$(()=>{
  new IndexPage(document)
});
