$(document).ready(function() {

    $(" .header-ham-ico ").click(function(){
        if ( $(" .side-bar-navigation ").hasClass("side-bar-navigation-shrink") ) {
            $(".side-bar-navigation").removeClass( "side-bar-navigation-shrink" );
            $(".row-liner").removeClass( "padding-shrinker-row-liner" );
            $(".main-content").removeClass( "padding-shrinker-main-content" );
          }
        else{
            $(".side-bar-navigation").addClass( "side-bar-navigation-shrink" );
            $(".row-liner").addClass( "padding-shrinker-row-liner" );
            $(".main-content").addClass( "padding-shrinker-main-content" );
        }
      });
    
    $(" .mobile-ham-ico ").click(function(){
        if ( $(" .side-bar-navigation ").hasClass("sidebar-nav-show") ) {
            $(".side-bar-navigation").removeClass( "sidebar-nav-show" );
            }
        else{
            $(".side-bar-navigation").addClass( "sidebar-nav-show" );
        }
    });
    $(" .close-ico ").click(function(){
        if ( $(" .side-bar-navigation ").hasClass("sidebar-nav-show") ) {
            $(".side-bar-navigation").removeClass( "sidebar-nav-show" );
            }
    });

});