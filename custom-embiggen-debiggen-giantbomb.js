// ==UserScript==
// @name         Add Embiggen Button to GiantBomb Videos
// @namespace    http://sneterz.com/
// @version      0.1
// @description  Adds a button to add a fake embiggen mode to GiantBomb videos
// @author       snetErz
// @match        https://www.giantbomb.com/shows/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(jQuery) {
        if ( $(window).width() <= 1023 ) return;

        var expand_svg = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand-arrows-alt" class="symbol svg-inline--fa fa-expand-arrows-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"></path></svg>';
        var compress_svg = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="compress-arrows-alt" class="symbol svg-inline--fa fa-compress-arrows-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z"></path></svg>';
        var episodes_button_container = $('.show-episode-buttons .site-container');
        var episode_video_container = $('.episode-video-player');
        var old_video_height = episode_video_container.css('max-height');
        var episode_content_container = $('.episode-content-container');
        var old_content_width = episode_content_container.css('width');
        var button = '<div class="horizontal-spacing-between custom-video-embiggen"><div class="set-width text-small"><div class="dropdown-selected dropdown-select-background" style="padding: 10px 15px; background-image: none;"><i>' + expand_svg + ' </i><span class="hide-mobile custom-video-embiggen-text-state">Embiggen</span></div></div></div>';

        if ( episodes_button_container.length <= 0 ) return;

        episodes_button_container.prepend(button);

        $('.custom-video-embiggen').on('click', function(e) {
            e.preventDefault();
            var self = $(this);
            var icon = self.find('i');
            var button_text = self.find('.custom-video-embiggen-text-state');

            if ( self.hasClass('embiggened') ) {
                self.removeClass('embiggened');
                button_text.text('Embiggen');
                icon.html(expand_svg);

                episode_content_container.css('width', old_content_width);
                episode_video_container.css('max-height', old_video_height);
            } else {
                self.addClass('embiggened');
                button_text.text('Debiggen');
                icon.html(compress_svg);
                episode_content_container.css('width', '0');
                episode_video_container.css('max-height', '747px');
            }

        });
    };
})();
