import $ from 'jquery';
import '../../common';

class Tips {
  constructor(document){
    this.document = document
    this.showHeight = 294
    this.initial()
  }

  initial(){
    this.$phone = $(this.document).find('.phone')
    this.$tipsPhone = $(this.document).find('#tips-phone')
    this.$backTop = $(this.document).find(".back-top")

    this.bindEvent()
  }

  bindEvent(){
    let self = this;

    self.$backTop.on('click', ()=>{
      $('body,html').animate({scrollTop:0}, 300);
    })

    $(window).scroll(()=>{
      $(window).scrollTop() >= self.showHeight ? self.$backTop.show(): self.$backTop.hide()
    });

    let useragent = navigator.userAgent.toLowerCase();
    if(useragent.indexOf('windows') > -1) {
      self.document.find('i').parent().css('padding-top', '2px')
    }
  }

  onShow(show){
    show?this.$phone.parent().show():this.$phone.parent().hide()
  }

  onSetShowBack(height){
    let self = this
    self.showHeight = height
  }

  //解绑事件
  unBindEvent(){
  }
}
export default Tips