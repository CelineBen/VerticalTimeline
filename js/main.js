/*jslint browser: true, indent: 2, nomen: true, plusplus: true, newcap: true, regexp: true, sloppy: true */
/*global $, track, console, define*/

$(document).ready(function ($) {
  var $timeline_block = $('.cd-timeline-block');

  //hide all timeline blocks 
  $timeline_block.each(function () {
    $(this).find('.cd-timeline-content').addClass('is-hidden');
    if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
      $(this).find('.cd-timeline-icon').addClass('is-hidden');
    }
  });
  //show only the first one
  //$('.cd-timeline-block.selected').find('.cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');

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

  //on selecting different report, hide the current one
  $('.cd-timeline-icon').click(function () {
    $('.cd-timeline-block.selected').removeClass('selected');
    $('.cd-timeline-content').addClass('is-hidden').removeClass('bounce-in');
    var $block = $(this).parent();
    $block.addClass('selected');
    $block.find('.cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
  });
});