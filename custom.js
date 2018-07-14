var addGetPremium_btn = function (additionalClass) {
  this.$getPremium_btn;
  if ( sessionStorage.getItem('premiumUser') ){
    $getPremium_btn = $([
      `<button id='getPremium_btn' data-isPremium='true' class='becomePremium_btn ${additionalClass}' >`,
        "Enjoy! You Are Premium",
      "</button>",
    ].join("\n"));    
  }else{
    $getPremium_btn = $([
      "<button id='getPremium_btn' data-isPremium='false' class='becomePremium_btn'>",
        "Become Premium",
      "</button>",
    ].join("\n"));
  }
  
  $(this.$getPremium_btn[0]).click(function( event ) {
              event.preventDefault();
              if(event.currentTarget.getAttribute('data-isPremium') == "true"){
                sessionStorage.removeItem('premiumUser')
              }else{
              sessionStorage.setItem('premiumUser',true)
              }
              location.reload();            
  });
  
  var filterSection = document.getElementsByClassName('col-3 visible-tablet')[0]
  filterSection.appendChild(this.$getPremium_btn[0]);
  
}

var addPayForDetails_popup = function() {
   this.$payForDetails_popup = $([
      "<div id='payForDetails_popup' class='payForDetails_popup'>",
        "<!-- Modal content -->",
        "<div class='payForDetails_popup_content'>",
         "<span class='payForDetails_popup_close'>&times;</span>",
         "<p class='notPaidMsg'>You did not pay yet!</p>",
       "</div>",
      "</div>",
  ].join("\n")); 

  document.body.appendChild(this.$payForDetails_popup[0]);
  
  var popup = document.getElementById('payForDetails_popup')
  
  // When the user clicks on <span> (x), close the modal
  var popup_close_button = popup.getElementsByClassName('payForDetails_popup_close').onclick =
          function(event) {
                popup.style.display = "none"    
          }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == popup) {
          popup.style.display = "none";
      }
  }
}

var extendBody = function adElementToBody(){
  addGetPremium_btn("test2");
  addPayForDetails_popup();
}


var isUserLoggedIn = function () {    
    const userAvatar = document.getElementsByClassName('Avatar Avatar__avatar__Jub8R')
    if (!userAvatar.length == 0){
        console.log("user is logged in")
        return true
    }else{
        console.log("user is not logged In")
        return false
    }

}

var anonymize = function() {
            var items = document.getElementsByClassName('home-fluid-thumbnail-grid-author-avatar')
             if (document.getElementById('getPremium_btn').getAttribute('data-isPremium') == "false" ) {    
                for(var i = 0; i < items.length; i++)
                  {

                      console.log(items.item(i).setAttribute("hidden",true))
                  }
             }
    }



var itemsBringUpAlert = function(){
    var itemTopLayers = document.getElementsByClassName('fluid-thumbnail-grid-image-image-container')
    var itemAdminLayers = document.getElementsByClassName('home-fluid-thumbnail-grid-author')
    
          for(var i = 0; i < itemTopLayers.length; i++){
            $(itemTopLayers[i]).click(function( event ) {
              if (document.getElementById('getPremium_btn').getAttribute('data-isPremium') == "false" ) {
                event.preventDefault();
                document.getElementById('payForDetails_popup').style.display = "block"
              }
          });
          $(itemAdminLayers[i]).click(function( event ) {
            if (document.getElementById('getPremium_btn').getAttribute('data-isPremium') == "false" ) {
                event.preventDefault();
                document.getElementById('payForDetails_popup').style.display = "block"
            }
          });
      }
    
}

window.addEventListener("DOMContentLoaded", extendBody , false);
window.addEventListener("DOMContentLoaded", anonymize , false);
window.addEventListener("DOMContentLoaded", itemsBringUpAlert , false);

