document.addEventListener 'turbolinks:load', ->
  #//////////////////
  console.log('turbolinks:load');

  ###$('#desktopnemu').meanmenu({
  meanScreenWidth     : "800",
  meanMenuContainer   : '#hand-over'
  });
  ###

  ###$('.color-left-scroller').scrollToFixed({
  marginTop: 0,
  //limit:3000,
  limit: function() {
  var limit = $('.footer-sp').offset().top - $(this).outerHeight(true) - 10;
  console.log(limit);
  return limit;
  },
  zIndex: 999
  //preFixed: function() { $(this).css('color', 'blue'); },
  //postFixed: function() { $(this).css('color', ''); }
  });
  ###

  ###$('#developers-users ul li').matchHeight({
  target: $(this).find('.link-box')
  });
  ###

  #

  makeSameHeight = (getele) ->
    spDivH = 0
    $(getele).each (index) ->
      console.log index + ': ' + $(this).text()
      th = $(this).height()
      if th > spDivH
        spDivH = th
      return
    spDivH

  $('#docHorizontalTab').easyResponsiveTabs
    type: 'default'
    width: 'auto'
    fit: true
    tabidentify: 'hor_1'
    activate: (event) ->
      # Callback function if tab is switched

      ###var $tab = $(this);
      var $info = $('#nested-tabInfo');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
      ###

      return
  getHH = makeSameHeight('#developers-users ul li')
  $('#developers-users ul li .link-box').css 'min-height': getHH
  #/////
  $('#cookie-notice .button.bootstrap').click (event) ->
    event.preventDefault()
    $('#cookie-notice').fadeOut 'fast'
    return
  #/////
  #side-nav
  getSNH = $('.page-wapper').height()
  #alert(getSNH);
  if $(window).width() > 768
    $('.side-nav').css({'min-height':0});
  else
  #
  $('select').selectric()
  #
  $('#paragraphs').cascadingDivs()
  sph = 0
  $('.nav-content-holder > div').each (index) ->
    console.log index + ': ' + $(this).text()
    th = $(this).outerHeight()
    if th > sph
      sph = th
    return
  $('.nav-content-holder > div').css 'position': 'absolute'
  $('.nav-content-holder').css 'min-height': sph
  $('#paragraphs > div').click ->
    getid = $(this).attr('data-id')
    #alert(getid);
    $('.nav-content-holder > div').fadeOut 'fast', ->
      $('.nav-content-holder > div#' + getid).fadeIn 'fast'
      #alert(getid);
      getHH_two = makeSameHeight('#' + getid + ' ul li')
      #alert(getHH_two);
      #$('.nav-content-holder > div#'+getid).find('.link-box').css({'min-height':getHH_two});
      return
    return
  #///
  return
$(window).load ->
  console.log('in load');
  getdocH = $(document).height()
  getwinH = $(window).height()
  getwinW = $(window).width()
  #alert(getdocH+', '+getwinH);
  getHeaderH = $('header').outerHeight()
  getLinkH = $('.link-block').outerHeight()
  getPaddingH = getdocH - getLinkH
  maxh = getwinH - getHeaderH
  getPaddingH = (getPaddingH - getHeaderH) / 2
  #if(getwinW > 768){
  #$('.right-panel').css({'padding-top':getHeaderH+20, 'min-height':getdocH});
  #$('.links-massage').css({'padding-top':getPaddingH});
  $('.links-massage').css 'padding-top': '30px'
  $('.right-panel .link-block').css 'max-height': maxh - 150
  $('.right-panel .link-block').mCustomScrollbar()
  #}
  #/
  return
