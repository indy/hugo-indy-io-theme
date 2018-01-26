(function() {
  'use strict';

  // Hide the header when the user scrolls down, and show it when he scrolls up

  /**
   * Header
   * @constructor
   */
  var Header = function() {
    this.header = document.getElementById('header');
    this.headerHeight = this.header.offsetHeight;

    // CSS class located in `source/_css/layout/_header.scss`
    this.headerUpCSSClass = 'header-up';
    this.delta = 5;
    this.lastScrollTop = 0;
  };

  Header.prototype = {

    /**
     * Run Header feature
     * @return {void}
     */
    run: function() {
      var self = this;
      var didScroll;

      // Detect if the user is scrolling
      window.onscroll = function() {
        didScroll = true;
      };

      // Check if the user scrolled every 250 milliseconds
      setInterval(function() {
        if (didScroll) {
          self.animate();
          didScroll = false;
        }
      }, 250);
    },

    /**
     * Animate the header
     * @return {void}
     */
    animate: function() {
      var scrollTop = window.pageYOffset;

      // Check if the user scrolled more than `delta`
      if (Math.abs(this.lastScrollTop - scrollTop) <= this.delta) {
        return;
      }

      var body = document.body,
          html = document.documentElement;

      var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                                html.clientHeight, html.scrollHeight, html.offsetHeight );

      // Checks if the user has scrolled enough down and has past the navbar
      if ((scrollTop > this.lastScrollTop) && (scrollTop > this.headerHeight)) {
        this.header.classList.add(this.headerUpCSSClass);
      }
      else if (scrollTop + window.innerHeight < docHeight) {
        this.header.classList.remove(this.headerUpCSSClass);
      }

      this.lastScrollTop = scrollTop;
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var header = new Header();
    header.run();
  });
})();
