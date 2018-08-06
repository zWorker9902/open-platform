export const PageIndex = { INDEX: 0, INTRODUCTION: 1, API: 2, DOWNLOAD: 3, ONLINEDB: 4, HELP: 4 };

export function getQueryString(name) {
  const regExp = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const result = decodeURI(window.location.search).substr(1).match(regExp);
  if (result !== null) {
    return unescape(result[2]);
  }
  return null;
}

export function getLength(str) {
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}


export function getChangeSize(size){
  let tranSize = size/1000/1000
  return tranSize.toFixed(1)
}