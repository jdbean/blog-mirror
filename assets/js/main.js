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

// async function addToCache(urls) {
//   const myCache = await window.caches.open('jdbean-html');
//   await myCache.addAll(urls);
// }

// // Call addToCache whenever you'd like. E.g. to add to cache after a page load:
// window.addEventListener('load', () => {
//   // ...determine the list of related URLs for the current page...
//   addToCache(['index.html', '/']);
// });