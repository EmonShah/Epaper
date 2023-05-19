$(document).ready(function () {
    var $navigator = $('.navigator');
    var $handle = $navigator.find('.sha-navigatorbtn');
  
    $navigator.draggable({
      handle: $handle,
      stop: function(event, ui) {
        if ($navigator.offset().top < 0) {
          $navigator.animate({top: 0}, 'fast');
        }
      }
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() <= 0) {
        $navigator.draggable('disable');
      } else {
        $navigator.draggable('enable');
      }
    });
  });
  
  
  
  //reset button here


  $(document).ready(function() {
    window.addEventListener("beforeunload", function(e) {
      // Cancel the event
      e.preventDefault();
      // Set the message to be displayed in the popup
      e.returnValue = 'Are you sure you want to leave?';
    });
   
    $('#resetBtn').on('click',function(){
    if(confirm("Are you sure you want to reset the page?")) {
      window.location.href = window.location.href;
    }
  });
  
  });
  
  //button click animation here
  const button = document.querySelector('.sha-formSubmit');

button.addEventListener('click', function() {
  button.classList.add('button-clicked');

  // Remove the animation class after the animation completes
  setTimeout(function() {
    button.classList.remove('button-clicked');
  }, 300); // Set the timeout to match the duration of the animation
});

  
  
  
   //image height width control form zoom in zoom out
   var initialScale = 1;
  var currentScale;
  
  $(document).ready(function() {
    $('.image-container').on('gesturestart', function(e) {
      initialScale = currentScale || 1;
    });
  
    $('.image-container').on('gesturechange', function(e) {
      currentScale = initialScale * e.originalEvent.scale;
      $(this).find('img').css('transform', 'scale(' + currentScale + ')');
    });
  
    $('.image-container').on('gestureend', function(e) {
      if (currentScale < 1) {
        currentScale = 1;
        $(this).find('img').css('transform', 'scale(' + currentScale + ')');
      }
    });
  });
  
     
  
      function navigatorDropdown(selector1, selector2) {
        $(selector1).on('click', function () {
        
         $(selector2).toggle();
    
          if ($(selector2).is(':visible')) {
            $(this).css('transform', 'rotate(0deg)');
            
          } else {
            $(this).css('transform', 'rotate(270deg)');
             
          }
  
        });
      }
    
  
      navigatorDropdown('.sha-contentToggoler svg', '.sha-contentWarp');
      navigatorDropdown('.sha-widthToggoler svg', '.sha-widthWrap');
      navigatorDropdown('.sha-textToggoler svg', '.sha-textAlignVal');
      navigatorDropdown('.sha-colorToggoler svg', '.sha-colorWrap');
      navigatorDropdown('.sha-textColorToggoler svg', '.sha-textColorWrap');
      navigatorDropdown('.sha-sizeToggoler svg', '.sha-fontWrap');
      navigatorDropdown('.sha-familyToggoler svg', '.shah-familyWrap');
  
    
   
      
  
      $(document).on('dblclick touchstart', 'p, img, h1, h2, .sha-divider, .sha_draggable, .sha_htmlContent', function () {
        var $this = $(this);
  
        // toggle "select" class on the clicked element
        $this.toggleClass('select');
        // remove "select" class from all other p and img elements
        $('p.select, img.select, h1.select, h2.select, .sha-divider, div.select').not($this).removeClass('select');
        // clear all input values if a new element is selected
        if ($this.hasClass('select')) {
          $(':input').val('');
        }
        $('.navigator').show();
  
        //docuemtn content get into input 
        if ($this.hasClass('select')) {
          var docHtml = $(this).html();
          $('#sha-htmlContent').val(docHtml);
  
        }
  
        $('.sha-formSubmit').off('click').on('click', function () {
          // only apply changes to the p or img element with the "select" class
          if ($this.hasClass('select')) {
            var htmlContent = $('#sha-htmlContent').val() || '';
            var widthValue = $('#sha_width').val() || '';
            var heightValue = $('#sha_height').val() || '';
            var marginValue = $('#sha_margin').val() || '';
            var paddingValue = $('#sha_padding').val() || '';
            var textIndent = $('#textIndent').val() || '';
            var textAlign = $('#align_select').val() || '';
            var textDecoration = $('#text_decoration').val() || ''; 
            var floatAlign = $('#floatAlign').val() || ''; 
            var bgColor = $('#sha_bg_color').val() || '';
             
            var color = $('#sha_text_color').val() || '';
      
            var borderRadius = $('#sha_border_radius').val() || '';
            var fontSize = $('#sha_fontSize').val() || '';
            var lineHeight = $('#sha_lineHeight').val() || '';
            var gbfontFamily = $('#sha_gbFamily').val() || '';
            var fontFamily = $('#sha_fontFamily').val() || '';
            var fontWeight = $('#sha_fontWeight').val() || '';
  
  
            // Check if any input field has a defined value
            if (htmlContent || widthValue || heightValue || marginValue || paddingValue || textIndent || textAlign || textDecoration || floatAlign || bgColor || color || borderRadius || fontSize || lineHeight || fontFamily || gbfontFamily || fontWeight) {
              // Set CSS styles
              if (htmlContent) $this.html(htmlContent);
              if (widthValue) $this.css('width', widthValue);
              if (heightValue) $this.css('height', heightValue);
              if (marginValue) $this.css('margin', marginValue);
              if (paddingValue) $this.css('padding', paddingValue);
              if (textIndent) $this.css('text-indent', textIndent);
              if (textAlign) { $this.css('text-align', textAlign) };
              if (textDecoration) { $this.css('text-decoration', textDecoration) }; 
              if (floatAlign) { $this.css('float', floatAlign) }; 
              if (bgColor) { $this.css('background-color', bgColor) };
              if (color) { $this.css('color', color) };
              if (borderRadius) { $this.css('border-radius', borderRadius) };
              if (fontSize) { $this.css('font-size', fontSize) };
              if (lineHeight) { $this.css('line-height', lineHeight) };
              if (gbfontFamily) { $('body').css('font-family', gbfontFamily) };
              if (fontFamily) { $this.css('font-family', fontFamily) };
              if (fontWeight) { $this.css('font-weight', fontWeight) };
            }
          }
        });
         
      });
  





      $(document).on('click', '.shaClgBtn', '#saveBtn', function () {
        $('p.select, img.select, h1.select, h2.select, span.select, div').removeClass('select');
        $(':input').val('');
        $('.navigator').hide();
      });
  
  
   
  
   function innerSectinDlt(a,b) {
      $(document).on('contextmenu taphold',a,function(){
    var confirmDelete = confirm(" to delete this element?");
        if (confirmDelete) {
          $(this).parents(b).remove();
        }
   });
    }
  
    innerSectinDlt('.shaClmnDlt','.sha-inner-item');
    innerSectinDlt('.shaInnerClmnDlt','.sha-innerSection');
  
  
  
   //innter section content delete
   $(document).on('contextmenu taphold', 'p, img, h1, h2, .sha-divider, .sha_htmlContent, .sha_draggable', function (e) {
    e.preventDefault();
    var confirmDelete = confirm("Do you want to delete this element?\n\n" + $(this).text());
    if (confirmDelete) {
      $(this).remove();
    }
  });
  
  

  
  //column delete
      $(document).on('click taphold', '.delete-column', function () {
    // Show the alert message
    if (confirm('Are you sure you want to delete this item?')) {
      // If the user confirms the delete action, remove the item
      $(this).parents('.sha_item').remove();
    }
  });
  
  
      function shaClmEditBtn(a, b, c) {
        $(document).on('click', a, function () {
          $(this).siblings(b + ',' + c).toggle();
        });
      }
  
      shaClmEditBtn('.sha-clmEdtBtn', '#sha_columnNumber', '#sha_columnBtn');
      shaClmEditBtn('.sha-clmnEditBtn', '#sha_clmgNumber', '.clmnEditApply');
      shaClmEditBtn('.sha-clmnEditBtn', '#sha_innerclmgNumber', '.innerClmnEditApply');
      shaClmEditBtn('.sha-clmnEditBtn', '#sha_innerclmgwrap', '.innerClmnwrapApply');
  
  
  
  
      function sha_columnEditSection(a, b, c) {
        $(document).on('click', a, function () {
          var columnNmbr = $(b).val();
  
          $(c).css('grid-template-columns',  columnNmbr, ',1fr)');
          $(this).hide();
          $(b).hide();
          columnNmbr = null;
  
        });
      }
  
      sha_columnEditSection('#sha_columnBtn', '#sha_columnNumber', '#capture');
      sha_columnEditSection('.innerClmnwrapApply', '#sha_innerclmgwrap', '.sha-innerSection');
  
      function sha_gridColumnAdd(a, b, c) {
        $(document).on('click', a, function () {
          var gridColumnNmbr = $(this).siblings(b).val();
  
          $(this).parents(c).css('grid-column', gridColumnNmbr);
          $(this).siblings(b).hide();
          $(this).hide();
          gridColumnNmbr = null;
        });
      }
  
      sha_gridColumnAdd('.clmnEditApply', '#sha_clmgNumber', '.sha_item')
      sha_gridColumnAdd('.innerClmnEditApply', '#sha_innerclmgNumber', '.sha-inner-item')
      //column item section 
  
  
      //column content, img, button section
  
      function addButtonsToElement($element) {
        $element.append('<div class="elementBtnWrap"> </div>');
  
        $element.find('.elementBtnWrap').append('<input type="file" name="fileToUpload" id="fileToUpload">');
        $element.find('.elementBtnWrap').append('<label for="fileToUpload" class="sha-elementBtn" id="file-upload-label">Add Image</label>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn sha-add-title">Add Title</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn sha-add-content">Add Content</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn sha-add-innerSection">Inner Section</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn sha-add-divider">Divider</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn duplicate-column">Duplicate</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn overFlow-column">Bullet Point</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn htmlContent-column">Html Content</button>');
        $element.find('.elementBtnWrap').append('<button class="sha-elementBtn delete-column">Delete</button>');
  
  
      }
  
      $(document).on('click', '#file-upload-label', function () {
  
        $(this).parents('.elementBtnWrap').before('<div id="image_container" class="box sha_imgeOverflow"></div>')
  
      });
  
      //image upload and print section;
  
     // attach a change handler to the file input
  $(document).on('change', '#fileToUpload', function () {
    // loop through all the selected files
    for (let i = 0; i < this.files.length; i++) {
      // get the current file object
      const file = this.files[i];
  
      // create a new FileReader object
      const reader = new FileReader();
  
      // define a callback function to run when the FileReader has loaded the file
      reader.onload = function () {
        // encode the file as base64 and store the result in a variable
        const encodedImage = btoa(reader.result);
  
        // update the file name
        const newName = 'new_image_name.png';
  
        // display the image in an <img> element
        const img = $('<img>');
        img.attr('height', 'auto');
        img.attr('width', '100%');
        img.attr('src', 'data:image/png;base64,' + encodedImage);
       
        // append the image element to the container
        
        $('#image_container').append(img);
  
        const containerId = 'image_container_' + Math.floor(Math.random() * 1000); // generate a unique id
        $('#image_container').attr('id', containerId);
        img.parent().addClass('imgLeft');
      };
   
      
      // read the file as a binary string
      reader.readAsBinaryString(file);
    }
  });
  
  
  
   
     $(document).on('click','#file-upload-label',function(){
       $('#fileToUpload').val("");
     });
      
  
  
      //Edit button margin botton here
      function shaBtnMargin(a,b){
        $(a).children().slice(0, b).after('<div class="shaGap"> </div>');
  
      }
   
  $(document).ready(function() {
    shaBtnMargin('.sha_item',10);
  });
  
  
  
      // Function to add buttons to all existing .sha_item elements
      function addButtonsToAllElements() {
        $('.sha_item').each(function () {
          var $this = $(this);
          if (!$this.find('.elementBtnWrap').length) {
            addButtonsToElement($this);
          }
        });
      }
  
      // Call the addButtonsToAllElements function on page load
      $(document).ready(function () {
        addButtonsToAllElements();
      });
  
      // Call the addButtonsToElement function for any new .sha_item elements created via the duplicate button
      $(document).on('click', '.duplicate-column', function () {
        var $newElement = $('<div class="sha_item"><div class="sha-clmnEdit"><span class="sha-clmnEditBtn shaClmnDlt">Edit</span><input style="width:50px;" id="sha_clmgNumber" type="text" placeholder="1/2"> <button class="clmnEditApply">Apply</button></div></div>');
        // ... code to add content to the new element ...
        addButtonsToElement($newElement);
        $("#capture").append($newElement);
      });
  
  
  
      $(document).on('click', '.innerDuplicate ', function () {
        var $newElement = $('<div class="sha-inner-item boxWarp"><div class="sha-clmnEdit"><span class="sha-clmnEditBtn shaClmnDlt">Edit</span><input style="width:50px;" id="sha_clmgNumber" type="text" placeholder="1/2"> <button class="clmnEditApply">Apply</button></div></div>');
        // ... code to add content to the new element ...
  
        $(".sha-innerSection").append($newElement);
      });
  
  
  
  
      // Call the addButtonsToAllElements function when the duplicate button is clicked
      $(document).on('click', '.duplicate-column', function () {
        addButtonsToAllElements();
      });
  
      // title add column
  
      $(document).on('click', '.sha-add-title', function () {
        $(this).parents('.elementBtnWrap').before(' <h2 class="box">Title Content</h2>');
      })
      $(document).on('click', '.sha-add-content', function () {
        $(this).parents('.elementBtnWrap').before('<p class="box">Content</p>');
      })
   
      $(document).on('click', '.sha-add-divider', function () {
        $(this).parents('.elementBtnWrap').before(' <span class="box sha-divider"> </span>');
      })
   
      $(document).on('click', '.overFlow-column', function () {
        $(this).parents('.elementBtnWrap').before('<div class="sha_draggable"> </div>');
      })
   
      $(document).on('click', '.htmlContent-column', function () {
        $(this).parents('.elementBtnWrap').before('<div class="sha_htmlContent boxWarp">Html Code Support</div>');
      })
   
  
      $(document).on('click', '.sha-add-innerSection', function () {
        $(this).parents('.elementBtnWrap').before('<div class="sha-innerSection"><div class="sha-inner-item boxWarp"></div ><div class="sha-inner-item boxWarp"></div></div>');
  
  
        $('.sha-innerSection').append(' <div class="sha-clmnEdit sha-clmnEditWarp"><span class="sha-clmnEditBtn shaInnerClmnDlt">Edit</span><input style="width:50px;" id="sha_innerclmgwrap" type="text" placeholder="Column"> <button class="innerClmnwrapApply d-none">Apply</button></div>');
  
  
        $('.sha-inner-item').append(' <div class="sha-clmnEdit"><span class="sha-clmnEditBtn shaClmnDlt">Edit</span><input style="width:50px;" id="sha_innerclmgNumber" type="text" placeholder="1/2"> <button class="innerClmnEditApply">Apply</button></div>');
  
        $('.sha-inner-item').append('<span class="innerDuplicate sha-elementBtn">Duplicate</span>');
  
      })
  
      $(document).on('click', '.sha-elementBtn', function () {
      $('.sha_draggable').draggable();
      $('.sha_htmlContent').draggable();
    });
   
  
  
      // inner Section drag drop section
       $(document).on('click', '.sha-elementBtn', function () {
        $('.box').draggable({
          revert: 'invalid',
          cursor: 'move',
          start: function (event, ui) {
            $(this).addClass('dragging');
          },
          stop: function (event, ui) {
            $(this).removeClass('dragging');
            $(this).css({ top: 0, left: 0 });
          }
        });
      
        $('.boxWarp').droppable({
          accept: '.box',
          drop: function (event, ui) {
            var droppedElement = ui.draggable;
            var droppedParent = droppedElement.parent('.boxWarp');
            
            // Check if the dropped element is coming from the same container
            if (droppedParent.is($(this))) {
              return; // No need to perform further actions
            }
            
            // Reset the position of the dropped element
            droppedElement.css({ top: 0, left: 0 });
            
            // Detach the dropped element from its current parent
             droppedElement.detach();
            
            // Append the dropped element to the new container
            var findCls = $(this).find('.elementBtnWrap');
            var findClsTitle = $(this).find('.sha-title');
            if(findCls){
              findCls.before(droppedElement);
            } else{
              $(this).append(droppedElement);
            }
           
            
            // Adjust the height of the container if needed
            var boxWarpHeight = $(this).outerHeight();
            var boxHeight = droppedElement.outerHeight();
            if (boxWarpHeight < boxHeight) {
              $(this).css('height', boxHeight);
            }
          }
        });
      });
      
 
      
      // save button action here
  
  
      function saveRestorBtn(a, b, c, d) {
        function toggleBorder(restore) {
          var borderStyle = restore ? b : c;
          $(d).css(a, borderStyle);
        }
  
        // Attach click event handlers to buttons
        $("#saveBtn").click(function () {
          $('p.select, img.select, h1.select, h2.select, span.select').removeClass('select');
          toggleBorder(false); $('.downloadBtn').show();
          $('.navigator').hide();
        });
  
        $("#restoreBtn").click(function () {
          toggleBorder(true); $('.downloadBtn').hide();
        });
      }
  
      saveRestorBtn('border', '3px solid #007bff', 'none', '#capture');
      saveRestorBtn('border', '2px solid #007bff', 'none', '.sha_item');
      saveRestorBtn('border', '2px solid #007bff', 'none', '.sha-inner-item');
      saveRestorBtn('border', '2px solid #007bff', 'none', '.sha-innerSection');
      saveRestorBtn('display', 'block', 'none', '.sha-clmnEdit');
      saveRestorBtn('display', 'block', 'none', '.innerDuplicate');
      saveRestorBtn('display', 'flex', 'none', '.columnEdit');
      saveRestorBtn('display', 'flex', 'none', '.elementBtnWrap');
      saveRestorBtn('display', 'block', 'none', '.shaGap');
  