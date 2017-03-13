(function(global){
  var ajaxUtils = {};

  function getRequestObject(){
    if(window.XMLHttpRequest){
      return (new XMLHttpRequest());
    }
  }
  ajaxUtils.sendGetRequest = function(requestUrl,responseHandler){
    var ajax = getRequestObject();

    ajax.onreadystatechange = function(){
  
      handleResponse(ajax,responseHandler);
    }
    ajax.open('GET', requestUrl, true);
    ajax.send(null);
  }
  function handleResponse(ajax,responseHandler) {

    if(ajax.readyState == 4 && ajax.status == 200){
      responseHandler(ajax);
    }
  }
  global.$ajaxUtils = ajaxUtils;
})(window);
