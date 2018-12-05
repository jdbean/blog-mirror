document.addEventListener('DOMContentLoaded', function () {
  if (document.readyState == "interactive") {
    /**
     * Notify when site updates
     */
    window.addEventListener('sw.update', function() {
      var updateToast = document.querySelector('.update-toast');
      toggleClass(updateToast, 'show');
    });

    document.querySelector('.update-toast').addEventListener('click', function() {
        window.location.reload();
    });
  }
});

function toggleClass(element, toggleClass){
 var currentClass = element.className;
 var newClass;
 if(currentClass.split(" ").indexOf(toggleClass) > -1){ //has class
    newClass = currentClass.replace(new RegExp('\\b'+toggleClass+'\\b','g'),"")
 }else{
    newClass = currentClass + " " + toggleClass;
 }
 element.className = newClass.trim();
}
