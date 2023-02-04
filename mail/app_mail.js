document.addEventListener('DOMContentLoaded', function() {
  const folderHeaders = document.querySelectorAll('.folder-header');
  folderHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const elem = this.parentElement.querySelector('.folder-content')
      const button_elem = this.parentElement.querySelector('.folder-header')
      //const arrow = this.parentElement.querySelector('.folder-content')
      if (elem.getAttribute("active") == "false")
        elem.setAttribute("active", "true");
      else
        elem.setAttribute("active", "false");
      button_elem.classList.toggle('active');
    });
  });

  const folders_to_add_margin = [...document.querySelectorAll('.folder-header'), ...document.querySelectorAll('.folder')];
  folders_to_add_margin.forEach(folder => {
    const value = 15 * countParentElementsWithClass(folder);
    if (value) folder.style.marginLeft = value + "px";
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

function countParentElementsWithClass(element) {
  let count = 0;
  let parent = element.parentElement;
  while (parent) {
    if (parent.classList.contains("folder-content")) count++;
    parent = parent.parentElement;
  }
  return count;
}

