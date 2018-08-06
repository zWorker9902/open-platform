import $ from 'jquery';
import '../../common';

class Header {
    constructor(document, active = 0){
        this.document = document
        this.active = active
        this.isSearch = false
        this.initial()
    }

    initial(){
        this.$menuNav   = $(this.document).find('.menu-nav')
        this.$searchInput= $(this.document).find('.search-input')
        this.$searchKey  = this.$searchInput.find('input')

        this.bindEvent()
    }

    bindEvent(){
      let self = this;
      self.$menuNav.find(`li:eq(${self.active})`).addClass('active').siblings().removeClass('active')

      self.$searchInput.find('i').on('click', (event)=>{
        if(!self.isSearch){
          self.$searchInput.css({
            "background-color":"#253156",
            "border-color":"#fff"
          })
          self.$searchKey.animate({
            width:"180px",
          }, 300).focus();

          event.stopPropagation()
        }
        self.isSearch = !self.isSearch;
      })

      self.$searchKey.on('keypress', (event) =>{
        if(event.keyCode == '13'){
          if(self.$searchKey.val()){
            self.onSearch(self.$searchKey.val())
          }
        }
      })

        self.$searchKey.on('click', (event)=>{
            event.stopPropagation()
        })

        $('body').on('click', (event)=>{
            self.$searchInput.css({
                "background-color":"transparent",
                "border-color":"transparent"
            })
            self.$searchKey.animate({
                width:"0",
            }, 300).val("");
            self.isSearch = false
        })

      self.$menuNav.on('click', () => {
          sessionStorage.clear()
      })
    }

    onSetSearchCb(fncallback){
        let self = this
        self.fncallback = fncallback
    }

    onSearch(searchKey){
        let self = this
        if(self.active != 2) {
            window.location = `api.html?key=${searchKey}`;
        }
        else{
            self.fncallback?self.fncallback(searchKey):null
        }

    }

    //解绑事件
    unBindEvent(){
        this.$menuNav.off('click')
    }
}
export default Header