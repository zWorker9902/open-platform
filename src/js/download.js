import  $ from 'jquery';
import '../common'
import '../style/common.less'
import '../style/download.less'
import Header from '../tpl/Header/header'
import Tips from '../tpl/Tips/tips'
import {PageIndex, getLength, getChangeSize} from '../common'

class DownloadPage {
  constructor(document){
    this.document = document
    this.initialPage()
  }

  initialPage(){
    this.header = new Header($(this.document).find('.header'), PageIndex.DOWNLOAD)
    this.tips = new Tips($(this.document).find('.help-tips'))
    this.$tableTbody = $(this.document).find('.dw-content tbody')
    this.$dwlist     = $(this.document).find('.dw-list')

    this.bindEvent()
  }

  bindEvent(){
    let self = this;

    self.tips.onShow(true)

    // 初始化获取sdk下载列表
    self.onQueryList()

    self.$dwlist.on('click', 'li', function(){
      $(this).addClass('active').siblings().removeClass('active')
      // 过滤sdk
      self.onFilterList($(this).find('a').data('sdk-filter').toLowerCase())
    })
  }

  onQueryList(){
    let self = this
    self.$tableTbody.empty()

    fetch('/operation/partners/sdk/list')
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        if(res.success == true){
          let totalNum = res.result.totalNum;
          if(totalNum > 0){
            res.result.sdkInfos.map(function(item){
              self.onAddItem(item.name, item.language, item.downloadUrl, item.version, getChangeSize(item.size), item.description)
            })
          }else{
            // sdk列表为空
          }
        }
      })
  }

  onFilterList(key){
    let self = this
    console.log(key+" " + key)
    if(key){
      self.$tableTbody.find('tr').each(function(){
        $(this).data('sdk-name').toLowerCase().includes(key)?$(this).show():$(this).hide()
      })
    }else{
      self.$tableTbody.find('tr').show()
    }
  }

  onAddItem(name, language, url, version, size, description){
    let self = this

    self.$tableTbody.append(`<tr data-sdk-name="${language}">
          <td>
            <a href="${url}">${name}</a>
          </td>
          <td>${version}</td>
          <td>${size}M</td>
          <td title="${description}">${description}</td>
        </tr>`)

    if(getLength(description)>32){
      // self.$tableTbody.find('tr:last-of-type').find('[title]').poshytip({
      //     className: 'tips'
      // });
    }
  }

  //解绑事件
  unBindEvent(){
  }
}

$(()=>{
  new DownloadPage(document)
});
