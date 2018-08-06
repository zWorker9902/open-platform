import $ from 'jquery';

export const preOpen = function (data) {
  return $.ajax({
    url: '/test',
    type: 'post',
    data,
  });
};
