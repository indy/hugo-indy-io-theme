(function() {
  'use strict';

  // Open and close the sidebar by swiping the sidebar and the blog and vice versa

  /**
   * Sidebar
   * @constructor
   */
  var Sidebar = function() {
    this.sidebar = document.getElementById('sidebar');
    this.openBtn = document.getElementById('btn-open-sidebar');
    // this.blog == header + main
    this.header = document.getElementById('header');
    this.main = document.getElementById('main');
    this.body = document.body;

    this.mediumScreenWidth = 768;
  };

  Sidebar.prototype = {
    /**
     * Run Sidebar feature
     * @return {void}
     */
    run: function() {
      var self = this;

      this.openBtn.addEventListener('click', function() {
        // toggle open/close
        if (self.sidebar.classList.contains('pushed')) {
          self.closeSidebar();
        } else {
          self.openSidebar();
        }
      });

      // Detect resize of the windows
      window.addEventListener('resize', function() {
        // Check if the window is larger than the minimal medium screen value
        if (window.innerWidth > self.mediumScreenWidth) {
          self.resetSidebarPosition();
          self.resetBlogPosition();
        } else {
          self.closeSidebar();
        }
      });
    },

    /**
     * Open the sidebar by swiping to the right the sidebar and the blog
     * @return {void}
     */
    openSidebar: function() {
      this.swipeBlogToRight();
      this.swipeSidebarToRight();
    },

    /**
     * Close the sidebar by swiping to the left the sidebar and the blog
     * @return {void}
     */
    closeSidebar: function() {
      this.swipeSidebarToLeft();
      this.swipeBlogToLeft();
    },

    /**
     * Reset sidebar position
     * @return {void}
     */
    resetSidebarPosition: function() {
      this.sidebar.classList.remove('pushed');
    },

    /**
     * Reset blog position
     * @return {void}
     */
    resetBlogPosition: function() {
      this.header.classList.remove('pushed');
      this.main.classList.remove('pushed');
    },

    /**
     * Swipe the sidebar to the right
     * @return {void}
     */
    swipeSidebarToRight: function() {
      var self = this;
      // Check if the sidebar isn't swiped
      // and prevent multiple click on the open button with `.processing` class
      if (!this.sidebar.classList.contains('pushed') &&
          !this.sidebar.classList.contains('processing')) {
        // Swipe the sidebar to the right
        this.sidebar.classList.add('processing', 'pushed');
        // add overflow on body to remove horizontal scroll

        this.body.style.overflowX = 'hidden';

        setTimeout(function() {
          self.sidebar.classList.remove('processing');
        }, 250);
      }
    },

    /**
     * Swipe the sidebar to the left
     * @return {void}
     */
    swipeSidebarToLeft: function() {
      // Check if the sidebar is swiped
      // and prevent multiple click on the close button with `.processing` class
      if (this.sidebar.classList.contains('pushed') &&
          !this.sidebar.classList.contains('processing')) {
        // Swipe the sidebar to the left
        this.sidebar.classList.add('processing');
        this.sidebar.classList.remove('pushed', 'processing');
        // go back to the default overflow
        this.body.style.overflowX = 'auto';
      }
    },

    /**
     * Swipe the blog to the right
     * @return {void}
     */
    swipeBlogToRight: function() {
      var self = this;

      var blogHasPushed = self.header.classList.contains('pushed') &&
          self.main.classList.contains('pushed');
      var blogHasProcessing = self.header.classList.contains('processing') &&
          self.main.classList.contains('processing');

      // Check if the blog isn't swiped
      // and prevent multiple click on the open button with `.processing` class
      if (!blogHasPushed && !blogHasProcessing) {
        // Swipe the blog to the right
        this.header.classList.add('processing', 'pushed');
        this.main.classList.add('processing', 'pushed');

        setTimeout(function() {
          self.header.classList.remove('processing');
          self.main.classList.remove('processing');
        }, 250);
      }
    },

    /**
     * Swipe the blog to the left
     * @return {void}
     */
    swipeBlogToLeft: function() {
      var self = this;

      var blogHasPushed = self.header.classList.contains('pushed') &&
          self.main.classList.contains('pushed');
      var blogHasProcessing = self.header.classList.contains('processing') &&
          self.main.classList.contains('processing');

      // Check if the blog is swiped
      // and prevent multiple click on the close button with `.processing` class
      if (blogHasPushed && !blogHasProcessing) {
        // Swipe the blog to the left
        this.header.classList.add('processing');
        this.main.classList.add('processing');
        this.header.classList.remove('pushed');
        this.main.classList.remove('pushed');

        setTimeout(function() {
          self.header.classList.remove('processing');
          self.main.classList.remove('processing');
        }, 250);
      }
    }
  };

  if (document.readyState === 'complete' ||
      document.readyState === 'loaded' ||
      document.readyState === 'interactive') {
    // the async loading of this script occured after the DOMContentLoaded even was fired
    var sidebar = new Sidebar();
    sidebar.run();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      var sidebar = new Sidebar();
      sidebar.run();
    });
  }
})();
