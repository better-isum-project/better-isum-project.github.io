document.addEventListener('DOMContentLoaded', function() {


  const folderHeaders = document.querySelectorAll('.folder-header');

  folderHeaders.forEach(folderHeader => {
    folderHeader.addEventListener("click", function() {
      const folderContent = this.nextElementSibling;
      const isActive = folderContent.getAttribute("active") === "true";
      folderContent.style.maxHeight = isActive ? 0 : `${folderContent.scrollHeight}px`;
      folderContent.setAttribute("active", !isActive);
      
      let parent = folderHeader.parentElement.parentElement;
      while (parent) {
        parent.style.maxHeight = 'initial';
        parent = parent.parentElement.parentElement;
      }
    });
  });



  // toggle active attribute on a folder-header button click

  folderHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });



  // a resizable sidebar

  let isResizing = false;
  let startX = 0;

  const side_panel = document.querySelector('#side_panel');
  const resizeHandle = document.querySelector('.resize-handle');

  resizeHandle.addEventListener('mousedown', function (event) {
    isResizing = true;
    startX = event.clientX;
    console.log(scrollableDiv.scrollHeight);
    console.log(scrollableDiv.offsetHeight);
  });
  document.addEventListener('mouseup', function () { isResizing = false; });
  document.addEventListener('mousemove', function (event) {
    if (!isResizing) return;
    side_panel.style.width = (side_panel.offsetWidth + (event.clientX - startX)) + 'px';
    startX = event.clientX;
  });



  // disable scroll bar on side bar when content doesnt exceed the height limit

  const scrollableDiv = document.querySelector('#side_panel');
  if (scrollableDiv.scrollHeight < scrollableDiv.offsetHeight) 
    scrollableDiv.style.setProperty('-webkit-box-shadow', '#a0052f40');
  else scrollableDiv.style.setProperty('-webkit-box-shadow', '#a0052fbf');
});