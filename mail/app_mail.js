document.addEventListener('DOMContentLoaded', function() {


  const folderHeaders = document.querySelectorAll('.folder-header');
  let currentlyOpenFolder = null;
  
  folderHeaders.forEach(folderHeader => {
    folderHeader.addEventListener("click", function(event) {
      const folderContent = this.nextElementSibling;
      const isActive = folderContent.getAttribute("active") === "true";
      folderContent.style.maxHeight = isActive ? 0 : `${folderContent.scrollHeight}px`;
      folderContent.setAttribute("active", !isActive);
      
      let currentElement = this.parentElement;
      while (currentElement.classList.contains("folder-content")) {
        if (currentlyOpenFolder && folderContent !== currentlyOpenFolder) {
          currentlyOpenFolder.style.maxHeight = 0;
          currentlyOpenFolder.setAttribute("active", false);
        }
        currentElement.style.maxHeight = isActive
          ? `${currentElement.offsetHeight - folderContent.offsetHeight}px`
          : `${currentElement.offsetHeight + folderContent.offsetHeight}px`;
        currentElement = currentElement.parentElement;
      }
      
      currentlyOpenFolder = isActive ? null : folderContent;
    });
  });




  folderHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  let isResizing = false;
  let startX = 0;

  const side_panel = document.querySelector('#side_panel');
  const resizeHandle = document.querySelector('.resize-handle');

  resizeHandle.addEventListener('mousedown', function (event) {
    isResizing = true;
    startX = event.clientX;
  });
  document.addEventListener('mouseup', function () { isResizing = false; });
  document.addEventListener('mousemove', function (event) {
    if (!isResizing) return;
    side_panel.style.width = (side_panel.offsetWidth + (event.clientX - startX)) + 'px';
    startX = event.clientX;
  });


});