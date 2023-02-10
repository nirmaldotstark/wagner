
$(function() {
    $('.lazy').Lazy();
});

$(window).on('load', function() {
    $('#onload-popup').modal('show');
});
var mybutton = document.getElementById("ontopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* Megadrop scripts */
function closeMegadrop(type) {
  var target = $(type.target),
      area = $('.nav-link.hover').parent('.dropdown-hover');

  if (target.closest(area).length === 0) {
      $('.nav-link.hover').removeClass('hover').parent('.dropdown-hover').trigger('mouseleave');
      $(document).off('click', 'body', closeMegadrop);
      return false;
  }
}
$('.dropdown-hover').each(function () {
  var $this = $(this),
      menuTimeoutShow,
      menuTimeoutHide;
  // Click on Mainnav menu items
  if ($this.find('.mega-menu').length) {
      if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) { // Simulate mouseenter on mobile devices with ontouchstart support
          $this.find('.nav-link').on('click', function (e) {
              e.stopPropagation();
              var link = $(this);
              if (link.hasClass('hover')) {
                  return true;
              }
              if ($('.nav-link.hover').length) {
                  $('.nav-link.hover').removeClass('hover').parent('.dropdown-hover').trigger('mouseleave');
                  $(document).off('click', 'body', closeMegadrop);
              }
              link.addClass('hover').parent('.dropdown-hover').trigger('mouseenter');
              $(document).on('click', 'body', closeMegadrop);
              return false;
          });
      }
      $this.on('mouseenter', function () {
        $(".rolex-product-slider").slick("refresh");
          clearTimeout(menuTimeoutShow);
          clearTimeout(menuTimeoutHide);
          menuTimeoutShow = setTimeout(function () {
              $this.addClass('in');
              if ($this.hasClass('in')) {
                  $this.find('.mega-menu').stop().css('visibility', 'visible').animate({
                      opacity: 1,
                      transition : '0.1s ease-in-out',
                  }, 300);
                  $(".rolex-product-slider").slick("refresh");
              }
              $('body').addClass("megamenu-overlay"); 
          }, 200);
      }).on('mouseleave', function () {
        $(".rolex-product-slider").slick("refresh");
          clearTimeout(menuTimeoutShow);
          clearTimeout(menuTimeoutHide);
          menuTimeoutHide = setTimeout(function () {
              $this.removeClass('in');
              if (!$this.hasClass('in')) {
                  $this.find('.mega-menu').css({
                      opacity: 0,
                      visibility: 'hidden',
                      transition : '0.1s ease-in-out'
                  });
                  $('body').removeClass("megamenu-overlay");
              }
          }, 200);
         
      });
  }
});
$('#newsletter-email').on({
  focus: function() {
    $('body').addClass('new-newsletter-form');
  },
  blur: function() {
    $('body').addClass('new-newsletter-form');
  }
});
$('#newsletter-check').change(function(){
if(this.checked)
$('#printnewsletter-form').fadeIn('slow');
else
$('#printnewsletter-form').fadeOut('slow');
});
$('#newsletter-check-page').change(function(){
  if(this.checked)
  $('#printnewsletter-form-page').fadeIn('slow');
  else
  $('#printnewsletter-form-page').fadeOut('slow');
  });
$('#termin-check').change(function(){
  if(this.checked)
  $('#termin-form').fadeIn('slow');
  else
  $('#termin-form').fadeOut('fast');
  });

$('#checkbox3').change(function(){
  if(this.checked)
  $('#add-notes').fadeIn('slow');
  else
  $('#add-notes').fadeOut('slow');
  });

var within_first_modal = false;
$('.btn-second-modal').on('click', function() {
  if ($(this).hasClass('within-first-modal')) {
    within_first_modal = true;
    $('#sidebar-product-list').modal('hide');
  }
  $('#sidebar-right').modal('show');
});

$('.btn-second-modal-close').on('click', function() {
  $('#sidebar-right').modal('hide');
  if (within_first_modal) {
    $('#sidebar-product-list').modal('show');
    within_first_modal = true;
  }
});
$('#close-filter').on('click', function(){
  $('#filtermenu').removeClass('show');
});
/*---checkout-functionality---*/
$('#versandart-form').hide();
$('input[name=User_Email]').keyup(function(){
    var isValid = $(this).is(':valid') && validateEmail($(this).val());
    if (isValid){
      $('#versandart-form').show();
      $('#checkout-step2').addClass('active');
    }
    else{
      $('#versandart-form').hide();
      $('.checkout-other-form-steps').removeClass('active');
      $('#checkout-step2').removeClass('active');
    }
     
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const $checkoutSelection = $('[name="checkout-details-step"]');
$checkoutSelection.on("change", function() {
  $checkoutSelection.each(function() {
    $(this).closest('.checkout-step2-info-m').toggleClass('active', this.checked);
    $('.checkout-other-form-steps').addClass('active');
    $('.checkout-main-left').addClass('active');
  });
});

document.querySelectorAll(".close-pop").forEach(item => {
  item.addEventListener('click', event => {
    document
      .querySelectorAll(".cart-popup-msg")
      .forEach(popup => popup.classList.remove('visible'));
    const parentContainer = event
      .currentTarget
      .parentElement;
    const siblingPopup = parentContainer
      .querySelector('.cart-popup-msg');
    siblingPopup
      .classList
      .add("visible");
  })
});
document.querySelectorAll(".next-cart-pop").forEach(item => {
  item.addEventListener('click', event => {
    document
      .querySelectorAll(".cart-popup-msg")
      .forEach(popup => popup.classList.remove('visible'));
    const parentContainer = event
      .currentTarget
      .parentElement.parentElement.parentElement.parentElement;
      const siblingPopup = parentContainer
      .querySelector('.cart-success-msg');
    siblingPopup
      .classList
      .add("visible");
      const cartPopRemove = parentContainer
      .querySelector('.cart-popup-msg');
      cartPopRemove
      .classList
      .remove("visible");
      const parentContainerMain = event
      .currentTarget
      .parentElement.parentElement.parentElement.parentElement.parentElement;
      setTimeout(function() {
        $(parentContainerMain).remove()}, 3000);
})
});
document.querySelectorAll(".cart-delete-pop a").forEach(item => {
  item.addEventListener('click', event => {
    const cartContainerMain = event
      .currentTarget
      .parentElement.parentElement.parentElement;
      setTimeout(function() {
        $(cartContainerMain).remove()}, 500);
  })
});
document.querySelectorAll(".wishlist-close-icon a").forEach(item => {
  item.addEventListener('click', event => {
    const cartContainerMain = event
      .currentTarget
      .parentElement.parentElement;
      setTimeout(function() {
        $(cartContainerMain).remove()}, 500);
  })
});
$(function($) {
  $("#checkoutform").validate({
    // Specify validation rules
    rules: {
      firstname: {
        required:true,
        minlength:3
      },
      lastname: {
        required:true,
        minlength:4
      },
      User_Email: {
        required: true,
        email: true
      },      
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
      Strasse:{
        required:true,
        minlength:4
      }
    },
    messages: {
      firstname: {
      required: "Bitte geben Sie einen gültigen Vornamen ein",
      minlength: "Bitte geben Sie einen gültigen Vornamen ein",
     },      
     lastname: {
      required: "Bitte geben Sie einen gültigen Nachnamen ein",
      minlength: "Bitte geben Sie einen gültigen Nachnamen ein",
     }, 
     Strasse: {
      required: "Bitte geben Sie einen gültige Straße und Hausnummer ein.",
     },     
     phone: {
      required: "Please enter phone number",
      digits: "Please enter valid phone number",
      minlength: "Phone number field accept only 10 digits",
      maxlength: "Phone number field accept only 10 digits",
     },     
     User_Email: {
      required: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
     },
    }
  });
});

$(document).ready(function () {
 
  $("#newsletter-form").submit(function() { 
  
  
  
  $("#newsletter-form").validate({
    // Specify validation rules
    rules: {
      email: {
        required: true,
        email: true
      },
      firstname: {
        required:true,
        minlength:4
      },
      lastname: {
        required:true,
        minlength:4
      },
      street: {
        required:true,
        minlength:4
      },
      postalcode: {
        required:true,
        minlength:2
      },
      ort: {
        required:true,
        minlength:2
      },
      anrede: {
        required:true,
        minlength:1
      },
      privacy_checkbox: {
        required:true 
      },
      
    },
    messages: {    

      email: {
      required: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
     },
     firstname: {
      required: "Bitte geben Sie einen Vornamen an.",
      minlength: "Bitte geben Sie einen Vornamen an.",
     },
     lastname: {
      required: "Bitte geben Sie einen Nachnamen an.",
      minlength: "Bitte geben Sie einen Nachnamen an.",
     },
     street: {
      required: "Bitte geben Sie eine Adresse an.",
      minlength: "Bitte geben Sie eine Adresse an.",
     },
     postalcode: {
      required: "Bitte geben Sie eine PLZ an",
      minlength: "Bitte geben Sie eine PLZ an",
     },
     ort: {
      required: "Bitte geben Sie einen Ort an",
      minlength: "Bitte geben Sie einen Ort an",
     },
     anrede: {
      required: "Bitte geben Sie eine Anrede an.",
      minlength: "Bitte geben Sie eine Anrede an.",
     },
     privacy_checkbox: {
      required: ""
     }
    }
  }); 

  
  
  });
});
$(function($) {
  $("#contactForm").validate({
    // Specify validation rules
    rules: {
      email: {
        required: true,
        email: true
      },
      firstname: {
        required:true,
        minlength:4
      },
      lastname: {
        required:true,
        minlength:4
      },
      anrede: {
        required:true,
        minlength:1
      },
      message: {
        required:true,
        minlength:4
      },
    },
    messages: {    

      email: {
      required: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
     },
     firstname: {
      required: "Bitte geben Sie einen Vornamen an.",
      minlength: "Bitte geben Sie einen Vornamen an.",
     },
     lastname: {
      required: "Bitte geben Sie einen Nachnamen an.",
      minlength: "Bitte geben Sie einen Nachnamen an.",
     },
     anrede: {
      required: "Bitte geben Sie eine Anrede an.",
      minlength: "Bitte geben Sie eine Anrede an.",
     },
     message: {
      required: "Bitte geben Sie eine Nachricht ein.",
      minlength: "Bitte geben Sie eine Nachricht ein.",
     },
    }
  });
});
$(function($) {
  $("#terminForm").validate({
    // Specify validation rules
    rules: {
      email: {
        required: true,
        email: true
      },
      firstname: {
        required:true,
        minlength:4
      },
      lastname: {
        required:true,
        minlength:4
      },
      anrede: {
        required:true,
        minlength:1
      },
      wahlen: {
        required:true,
        minlength:1
      },
      message: {
        required: true,
        minlength: 4
       },
       terminDate: {
        required: true,
        minlength: 1
       },
       time: {
        required: true
       }
    },
    messages: {    
      email: {
      required: "Bitte geben Sie eine E-Mail Adresse an.",
      email: "Bitte geben Sie eine E-Mail Adresse an.",
     },
     firstname: {
      required: "Bitte geben Sie einen Vornamen an.",
      minlength: "Bitte geben Sie einen Vornamen an.",
     },
     lastname: {
      required: "Bitte geben Sie einen Nachnamen an.",
      minlength: "Bitte geben Sie einen Nachnamen an.",
     },
     wahlen:{
      required: "Bitte wählen Sie ein Geschäft.",
      minlength: "Bitte wählen Sie ein Geschäft.",
     },
     anrede: {
      required: "Bitte geben Sie eine Anrede an.",
      minlength: "Bitte geben Sie eine Anrede an.",
     },
     message: {
      required: "Bitte geben Sie eine Nachricht ein.",
      minlength: "Bitte geben Sie eine Nachricht ein.",
     },
     terminDate: {
      required: "Bitte geben Sie ein Datum ein",
      minlength:"Bitte geben Sie ein Datum ein"
     },
     time: {
      required: "Bitte wählen Sie eine Uhrzeit",
     }
    }
  });
}); 
$('.next').on('click',function(e) {
  if ($('#checkoutform').valid()) {
    $($(this).attr('href')).addClass('checkout-responsive-show');
    $(this).closest('.tab').addClass('checkout-responsive-hide');
    $(this).closest('.tab').removeClass('checkout-responsive-show');
  }
});
function mam_set_auto_height() {
    // reset sh-active class
    $('.sh-active').css('height', 'auto');
    $('.sh-active').removeClass('sh-active');
    // get all elemets with same height data
    $ashElements = $("[data-same-height]");
    // loop through the elements
    $ashElements.each(function () {
        $element = $(this);
        // skip if it's been configured already or not
        if ($element.hasClass('sh-active')) {
            return true;
        }
        // get group to set same height
        var _group = $element.attr('data-same-height');
        // get group elements
        $groupElements = $('[data-same-height="' + _group + '"]');
        // Cache the highest
        var highestBox = 0;
        // loop throgh the group elements
        $groupElements.each(function () {
            // If this box is higher than the cached highest then store it
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        // Set the height of all those children to whichever was highest
        $groupElements.addClass('sh-active').height(highestBox);
    });
}
$(function ($) {
    $(window).on('load',function () {
        mam_set_auto_height();
    });
    $(window).on('resize',function () {
        mam_set_auto_height();
    });
    mam_set_auto_height();
});
var $menuTrigger = $('.js-menuToggle');
  var $topNav = $('.js-topPushNav');
  var $openLevel = $('.js-openLevel');
  var $closeLevel = $('.js-closeLevel');
  var $closeLevelTop = $('.js-closeLevelTop');
  var $navLevel = $('.js-pushNavLevel');
  function openPushNav() {
    $topNav.addClass('isOpen');
    $('body').addClass('pushNavIsOpen');
    $('.menu-blog-slider').slick('refresh');
      $('.menu-blog-slider').slick('resize');
  }
  function closePushNav() {
    $topNav.removeClass('isOpen');
    $openLevel.siblings().removeClass('isOpen');
    $('body').removeClass('pushNavIsOpen');
  }
  $menuTrigger.on('click', function(e) {
    e.preventDefault();
    if ($topNav.hasClass('isOpen')) {
      closePushNav();
      $('.menu-blog-slider').slick('refresh');
      $('.menu-blog-slider').slick('resize');
    } else {
      openPushNav();
    }
  });
  $openLevel.on('click', function(){
    $(this).next($navLevel).addClass('isOpen');
    $('.menu-blog-slider').slick('refresh');
      $('.menu-blog-slider').slick('resize');
  });
  $closeLevel.on('click', function(){
    $(this).closest($navLevel).removeClass('isOpen');
  });
  $closeLevelTop.on('click', function(){
    closePushNav();
  });
  $('.selected-filter ul.small-link-icon, .clear-filter').addClass('d-none');
  $('.chkbx').off().on('click', function(e) {
    let id = $(this).attr('id');
    data = $(this).next('span').text().trim();
    input_value = data.split(' ').join(',');
    $(this).toggleClass('active');
    if ($(this).is(':checked')) {
        passed_value = $(`<div data-id=${id}><span>` + data +
                `</span><img src="../../assets/images/close-wishlist-icon.svg" alt="close-wishlist-icon" class="btnCross"></div>`)
            .prop('title',
                data);
        $('.result-filter').append(passed_value).css('cursor', 'default');
        $('.remove-all-filters').addClass('d-flex');
        $('.selected-filter ul, .clear-filter').removeClass('d-none');
    } else {
        $(`div[data-id="${id}"]`).remove();
    }
    filterLastCheckbox = $('.chkbx:checked').length == 0;
      if(filterLastCheckbox){
        $('.result-filter > div').remove();
        $('.selected-filter ul.small-link-icon, .clear-filter').addClass('d-none');
      }
    eventListener();
});
function eventListener() {
    $('.btnCross').off().on('click', function(e) {
        let $this = $(this);
        let targetEle = $this.parent().attr('data-id');
        filterLastItem = $('.result-filter div ').length == 1;
        if(filterLastItem){
          $('.chkbx').prop('checked', false);
          $('.result-filter > div').remove();
          $('.selected-filter ul.small-link-icon, .clear-filter').addClass('d-none');
        }
        $this.parent().remove();
        $(`#${targetEle}`).prop('checked', false);
    })
    $('.remove-all-filters').on('click', function() {
      $('.chkbx').prop('checked', false);
      $('.result-filter > div').remove();
      $('.selected-filter ul.small-link-icon, .clear-filter').addClass('d-none');
    });

}
$('.select-control').on('focus blur change', function (e) {
	var $currEl = $(this);
  if($currEl.is('select')) {
  	if($currEl.val() === $("option:first", $currEl).val()) {
    	$('.control-label', $currEl.parent()).animate({opacity: 0}, 240);
      $currEl.parent().removeClass('focused');
    } else {
    	$('.control-label', $currEl.parent()).css({opacity: 1});
    	$currEl.parents('.select-group').toggleClass('focused', ((e.type === 'focus' || this.value.length > 0) && ($currEl.val() !== $("option:first", $currEl).val())));
    }
  } else {
  	$currEl.parents('.select-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  }
}).trigger('blur');
$('.filter-new-open select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));         
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });
});

$('input[name=privacy_checkbox]').change(function(){   
  if(this.checked) {
    $(".privacy-checkbox-error").css("display","none");
    $("#privacy_checkbox_text").css("border-bottom","none"); 
  }
  else {
    $(".privacy-checkbox-error").css("display","block"); 
    $("#privacy_checkbox_text").css("border-bottom","1px solid #CE5C4F"); 
  }
  });






  





  
  

