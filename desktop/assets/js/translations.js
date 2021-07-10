window.localization = window.localization || {},
function(n) {
    localization.translate = {

      menu: function() {
        $('#welcome-menu').text(i18n.__('Getting Started'));
        $('#whoweare-menu').text(i18n.__('Who we are'));
        $('#whatwedo-menu').text(i18n.__('What we do'));
        $('#getintouch-menu').text(i18n.__('Need help!'));

      },

      welcome: function() {
        $('#welcome .inner p').text(i18n.__('The best platform to manage and track the workloads'));
        $('#learn-more-button').text(i18n.__('Getting Started'));
      },

      init: function() {
        this.welcome();
        this.menu();
      }
    };

    n(function() {
        localization.translate.init();
    })

}(jQuery);
