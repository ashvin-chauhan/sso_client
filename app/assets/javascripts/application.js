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
//= require custom


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
});