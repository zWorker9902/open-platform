import $ from 'jquery';
import '../style/api.less';
import Header from '../tpl/Header/header';
import Tips from '../tpl/Tips/tips';
import { PageIndex, getQueryString } from '../common';

class ApiPage {
  constructor(document) {
    this.document = document;
    this.$iframe = $(this.document).find('iframe');
    this.initialPage();
  }

  initialPage() {
    this.header = new Header($(this.document).find('.header'), PageIndex.API);
    this.tips = new Tips($(this.document).find('.help-tips'))
    this.bindEvent();
  }

  bindEvent() {
    const self = this;

    self.tips.onShow(true)

    const searchKey = getQueryString('key');
    if (searchKey) {
      self.$iframe.attr('src', `https://gw-docs.zcy.gov.cn/?q=${searchKey}`);
    }

    self.header.onSetSearchCb((key) => {
      self.$iframe.attr('src', `https://gw-docs.zcy.gov.cn/?q=${key}`);
    });
  }
}

$(() => {
  const page = new ApiPage(document);
});