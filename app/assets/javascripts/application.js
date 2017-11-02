// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require jquery-ui/autocomplete
//= require tether.min
// require bootstrap.min
//= require autocomplete_sidebar_links


$(document).ready(function(){
  var pushLeft = new Menu({
    wrapper: '#o-wrapper',
    type: 'push-left',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
  });

  var pushLeftBtn = document.querySelector('#c-button--push-left');

  pushLeftBtn.addEventListener('click', function (e) {
    e.preventDefault;
    pushLeft.open();
  });

  var super_admin_links = $(".super-admin-links");

  i = 0;
  while(i < super_admin_links.length){
    var element_id = super_admin_links[i].id;
    if(element_id == "developer-link"){
      super_admin_links[i].href = "/users/developer";
    }else if(element_id == "manager-link"){
      super_admin_links[i].href = "/users/manager";
    }else if(element_id == "admin-link"){
      super_admin_links[i].href = "/users/admin";
    }
    i++;
  }

  var jekyll_links = $(".riversand-doc").find('a')
  i = 0;
  while(i < jekyll_links.length){
    var link_url = jekyll_links[i].href
    if(link_url.indexOf("/docs") > 0 && link_url.indexOf("http://") == 0)
    {
      var new_link_url = link_url.split("/docs/").pop();
      jekyll_links[i].href = "/docs?page=" + new_link_url
    }
    i++ ;
  }
});