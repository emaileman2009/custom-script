



var extendBody = function adElementToBody(){
  
  this.$getPremium_btn = $([
    "<button data-isPremium='false' class='becomePremium_btn'>",
      "Become Premium",
    "</button>",
  ].join("\n"));
  
  var filterSection = document.getElementsByClassName('col-3 visible-tablet')[0]
  filterSection.appendChild(this.$getPremium_btn[0]);
  
  
  
  this.$payForDetails_popup = $([
      "<div id='payForDetails_popup' class='payForDetails_popup'>",
        "<!-- Modal content -->",
        "<div class='payForDetails_popup_content'>",
         "<span class='payForDetails_popup_close'>&times;</span>",
         "<p>You did not pay yet!</p>",
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
                for(var i = 0; i < items.length; i++)
                {
                    console.log("HIDING ELEMENTS SINCE THE USER DID NOT PAY YET")
                    console.log(items.item(i).setAttribute("hidden",true))
                }
    }



var itemsBringUpAlert = function(){
    var itemTopLayers = document.getElementsByClassName('fluid-thumbnail-grid-image-image-container')
    var itemAdminLayers = document.getElementsByClassName('home-fluid-thumbnail-grid-author')
        for(var i = 0; i < itemTopLayers.length; i++){
          $(itemTopLayers[i]).click(function( event ) {
              event.preventDefault();
              document.getElementById('payForDetails_popup').style.display = "block"              
        });
        $(itemAdminLayers[i]).click(function( event ) {
              event.preventDefault();
              document.getElementById('payForDetails_popup').style.display = "block"
        });
    }    
}

window.addEventListener("DOMContentLoaded", extendBody , false);
window.addEventListener("DOMContentLoaded", anonymize , false);
window.addEventListener("DOMContentLoaded", itemsBringUpAlert , false);

