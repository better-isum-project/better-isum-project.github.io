$(document).ready(function() {
  // dropdown folders
  $('.folder-header').click(function() {
    var folderContent = $(this).next();
    var isActive = folderContent.attr("active") === "true";
    folderContent.css('max-height', isActive ? 0 : folderContent[0].scrollHeight + 'px');
    folderContent.attr("active", !isActive);
    
    $(this).parents().css('max-height', 'initial');
  });

  // toggle active attribute on a folder-header button click
  $('.folder-header').click(function() {
    $(this).toggleClass('active');
  });

  // a resizable sidebar
  var $sidePanel = $("#side_panel");
  var $resizeHandle = $(".resize-handle");
  var sidePanelWidth;
  $resizeHandle.on("mousedown", function() {
    sidePanelWidth = $sidePanel.width();
    $(document).on("mousemove", function(e) {
      $sidePanel.width(e.clientX);
    });
  });
  $(document).on("mouseup", function(e) {
    $(document).off("mousemove");
  });

  // disable scroll bar on side bar when content doesnt exceed the height limit
  const scrollableDiv = $('#side_panel');
  if (scrollableDiv.prop('scrollHeight') > scrollableDiv.outerHeight())
    scrollableDiv.toggleClass('show-scrollbar');
  else scrollableDiv.css({overflowX: 'hidden'});

  preventTextSelection(['side_panel']);
});

function preventTextSelection(elementIds) {
  elementIds.forEach(id => {
    $(`#${id}`).css({
      'user-select': 'none',
      '-webkit-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none'
    });
  });
}