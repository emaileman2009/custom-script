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
                    console.log("HIDING ELEMENTS SINCE THE USE DID NOT PAIED YET")
                    console.log(items.item(i).setAttribute("hidden",true))

                }
    }


var notPaidAler= "You did not paid yet!";
var itemsBringUpAlert = function(){
    var itemTopLayers = document.getElementsByClassName('fluid-thumbnail-grid-image-image-container')
    var itemAdminLayers = document.getElementsByClassName('home-fluid-thumbnail-grid-author')
        for(var i = 0; i < itemTopLayers.length; i++){
          $(itemTopLayers[i]).click(function( event ) {
              event.preventDefault();
              alert(notPaidAler);
        });
        $(itemAdminLayers[i]).click(function( event ) {
              event.preventDefault();
              alert(notPaidAler);
        });
    }    
}

window.addEventListener("DOMContentLoaded", itemsBringUpAlert , false);
window.addEventListener("DOMContentLoaded", anonymize , false);
