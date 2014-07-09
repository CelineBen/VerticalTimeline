/*jslint browser: true, indent: 2, nomen: true, plusplus: true, newcap: true, regexp: true, sloppy: true */
/*global $, track, console, define*/

$(document).ready(function ($) {
  var $timeline_block = $('.cd-timeline-block');

  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function () {
    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
      $(this).find('.cd-timeline-icon, .cd-timeline-content').addClass('is-hidden');
    }
  });

  //on scolling, show/animate timeline blocks when enter the viewport 
  //Change: On scrolling, only show the details for the last date
  $(window).on('scroll', function () {
    var $first = $($timeline_block[1]);
    if ($first.offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $first.find('.cd-timeline-icon').hasClass('is-hidden')) {
      $first.find('.cd-timeline-icon, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    }

    $timeline_block.each(function () {
      if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-icon').hasClass('is-hidden')) {
        $(this).find('.cd-timeline-icon').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
});