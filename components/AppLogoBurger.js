import React from "react";
import Link from "next/link";
const AppLogoBurger = () => {
  const handleBurgerClick = () => {
    console.log("clicked burger");
    $("#project").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#offices").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#about").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#brand_partners").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#serviceNav").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#news").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#career").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#contact").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#language_menu").removeClass("animated fadeOutUp1").css("opacity", "0");
    $(".topBar").slideDown(400);
    $("#burgernavbar").hide(1000);
    $("#burgernavbarcancel").show(1000);
    $("#home-bg-img-inner").css("opacity", "1");
    $("#home-bg-img-inner").removeClass("animated fadeIn");
    setTimeout(function () {
      $("#project").addClass("animated fadeInDown1").css("opacity", "0");
    }, 100); //200
    setTimeout(function () {
      $("#offices").addClass("animated fadeInDown1").css("opacity", "0");
    }, 200); //400
    setTimeout(function () {
      $("#about").addClass("animated fadeInDown1").css("opacity", "0");
    }, 300); //600
    setTimeout(function () {
      $("#brand_partners").addClass("animated fadeInDown1").css("opacity", "0");
    }, 400); //600
    setTimeout(function () {
      $("#serviceNav").addClass("animated fadeInDown1").css("opacity", "0");
    }, 500); //800
    setTimeout(function () {
      $("#news").addClass("animated fadeInDown1").css("opacity", "0");
    }, 600); //1000
    setTimeout(function () {
      $("#career").addClass("animated fadeInDown1").css("opacity", "0");
    }, 700); //1200
    setTimeout(function () {
      $("#contact").addClass("animated fadeInDown1").css("opacity", "0");
    }, 800); //300
    setTimeout(function () {
      $("#language_menu").addClass("animated fadeInDown1").css("opacity", "0");
    }, 150); //300
  };

  const handleBurgerCancelClick = () => {
    $("#project").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#offices").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#about").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#brand_partners")
      .removeClass("animated fadeInDown1")
      .css("opacity", "1");
    $("#serviceNav").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#news").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#career").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#contact").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#language_menu").removeClass("animated fadeInDown1").css("opacity", "1");

    setTimeout(function () {
      $("#project").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 900); //1400
    setTimeout(function () {
      $("#offices").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 800); //1200
    setTimeout(function () {
      $("#about").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 700); //1000
    setTimeout(function () {
      $("#brand_partners").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 600); //1000
    setTimeout(function () {
      $("#serviceNav").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 500); //800
    setTimeout(function () {
      $("#news").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 400); //600
    setTimeout(function () {
      $("#career").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 300); //400
    setTimeout(function () {
      $("#contact").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 200); //200

    setTimeout(function () {
      $("#language_menu").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 100); //200

    setTimeout(function () {
      $(".topBar").slideUp(400); //400
      // showServiceImageDiv(1);
      jQuery(".logo1").removeClass("select");
      jQuery(".logo2").removeClass("select");
      jQuery(".logo3").removeClass("select");
      jQuery(".logo4").removeClass("select");
      jQuery(".logo5").removeClass("select");
      jQuery(".logo6").removeClass("select");
      jQuery(".logo7").removeClass("select");
      jQuery(".logo8").removeClass("select");
      jQuery(".logo9").addClass("select");
      jQuery(".service-description-popup").css("display", "none");
      jQuery(".list-9-div").css("display", "block");

      // $("#burgernavbar").show(1000);
      //$("#burgernavbarcancel").hide(1000);
    }, 1200); //1800

    setTimeout(function () {
      //$(".topBar").slideUp(400);
      $("#burgernavbar").show(800); //800
      $("#burgernavbarcancel").hide(800); //800
    }, 575); //1150

    //$('#slideImg').removeAttr('class');
    //$('#slideImg').addClass('listMainImg navHover list-1');
    $("body").css("overflow-y", "auto");
    /*
      if($('.leftBar').is(':visible') ) {
          // $('.leftBar').animate({ 'width': '0px' }, 'slow', function(){
          //     $('.leftBar').hide();
        // });
        $('.leftBar, .bgLeft, .listMainImg').removeAttr('style');
        $('.bgLeft').fadeOut();
      $('#main_container').animate({ 'margin-left': '0px' }, 'slow');
     }
     */
    /*
      if($('.leftBar, .listMainImg').hasClass('leftActive')){
        $('.leftBar, .bgLeft, .listMainImg').removeAttr('style').removeClass('leftActive');
        $('.bgLeft').fadeOut();
     $('body').css('overflow-y','auto');
$('#innerpagesoverflowdiv').css('height',pagebannerheight);		   
       $('#serviceNav span').addClass('arrow-down_office');  
      $('#serviceNav span').removeClass('arrow-up_office'); 
      }
      */

    if ($(window).width() < 768) {
      $("#project_filter").hide();
      $("#search_project").hide();
    }
    $(document).on("click", "#project_arrow", function () {
      $("#project_filter").toggle();
      $("#search_project").toggle();
    });
  };

  return (
    <>
      <div className="row topHeader">
        <div
          className="col-md-6 main-logo"
          style={{ opacity: 1, zIndex: 56 }}
          id="main-logo"
        >
          <Link href={"/"}>
            <a href="#">
              <img src="/images/HBA-Logo-Illuminate-White.svg" />
            </a>
          </Link>
        </div>

        <div className="col-md-6 nav-bar" style={{ padding: 0, zIndex: 65 }}>
          <div
            id="burgernavbar"
            onClick={() => {
              handleBurgerClick();
            }}
          >
            <div className="nav-bar1 hamburger1" style={{ opacity: 1 }}></div>
            <div className="nav-bar2 hamburger2" style={{ opacity: 1 }}></div>
            <div className="nav-bar3 hamburger3" style={{ opacity: 1 }}></div>
          </div>
          <div
            id="burgernavbarcancel"
            style={{
              display: "none",
              zIndex: 3,
              top: "-20px",
              position: "absolute",
            }}
            className="navCanel"
          >
            <a
              onClick={() => {
                handleBurgerCancelClick();
              }}
              className="iconCancel"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLogoBurger;
