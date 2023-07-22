// File Upload
// 
function ekUpload(){
    function Init() {
  
      console.log("Upload Initialised");
  
      var fileSelect    = document.getElementById('file-upload'),
          fileDrag      = document.getElementById('file-drag'),
          submitButton  = document.getElementById('submit-button');
  
      fileSelect.addEventListener('change', fileSelectHandler, false);
  
      // Is XHR2 available?
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // File Drop
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }
  
    function fileDragHover(e) {
      var fileDrag = document.getElementById('file-drag');
  
      e.stopPropagation();
      e.preventDefault();
  
      fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }
  
    function fileSelectHandler(e) {
      // Fetch FileList object
      var files = e.target.files || e.dataTransfer.files;
  
      // Cancel event and hover styling
      fileDragHover(e);
  
      // Process all File objects
      for (var i = 0, f; f = files[i]; i++) {
        parseFile(f);
        uploadFile(f);
      }
    }
  
    // Output
    function output(msg) {
      // Response
      var m = document.getElementById('messages');
      m.innerHTML = msg;
    }
  
    function parseFile(file) {
  
      console.log(file.name);
      output(
        '<strong>' + encodeURI(file.name) + '</strong>'
      );
      
      // var fileType = file.type;
      // console.log(fileType);
      var imageName = file.name;
  
      var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
      if (isGood) {
        document.getElementById('start').classList.add("hidden");
        document.getElementById('response').classList.remove("hidden");
        document.getElementById('notimage').classList.add("hidden");
        // Thumbnail Preview
        document.getElementById('file-image').classList.remove("hidden");
        document.getElementById('file-image').src = URL.createObjectURL(file);
      }
      else {
        document.getElementById('file-image').classList.add("hidden");
        document.getElementById('notimage').classList.remove("hidden");
        document.getElementById('start').classList.remove("hidden");
        document.getElementById('response').classList.add("hidden");
        document.getElementById("file-upload-form").reset();
      }
    }
  
    function setProgressMaxValue(e) {
      var pBar = document.getElementById('file-progress');
  
      if (e.lengthComputable) {
        pBar.max = e.total;
      }
    }
  
    function updateFileProgress(e) {
      var pBar = document.getElementById('file-progress');
  
      if (e.lengthComputable) {
        pBar.value = e.loaded;
      }
    }
  
    function uploadFile(file) {
  
      var xhr = new XMLHttpRequest(),
        fileInput = document.getElementById('class-roster-file'),
        pBar = document.getElementById('file-progress'),
        fileSizeLimit = 1024; // In MB
      if (xhr.upload) {
        // Check if file is less than x MB
        if (file.size <= fileSizeLimit * 1024 * 1024) {
          // Progress bar
          pBar.style.display = 'inline';
          xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
          xhr.upload.addEventListener('progress', updateFileProgress, false);
  
          // File received / failed
          xhr.onreadystatechange = function(e) {
            if (xhr.readyState == 4) {
              // Everything is good!
  
              // progress.className = (xhr.status == 200 ? "success" : "failure");
              // document.location.reload(true);
            }
          };
  
          // Start upload
          xhr.open('POST', document.getElementById('file-upload-form').action, true);
          xhr.setRequestHeader('X-File-Name', file.name);
          xhr.setRequestHeader('X-File-Size', file.size);
          xhr.setRequestHeader('Content-Type', 'multipart/form-data');
          xhr.send(file);
        } else {
          output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
        }
      }
    }
  
    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
      Init();
    } else {
      document.getElementById('file-drag').style.display = 'none';
    }
  }
  ekUpload();

  // File Upload
// 
function ekUpload2(){
  function Init() {

    console.log("Upload Initialised");

    var fileSelect2    = document.getElementById('file-upload2'),
        fileDrag2      = document.getElementById('file-drag2'),
        submitButton2  = document.getElementById('submit-button2');

    fileSelect2.addEventListener('change', fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag2.addEventListener('dragover', fileDragHover, false);
      fileDrag2.addEventListener('dragleave', fileDragHover, false);
      fileDrag2.addEventListener('drop', fileSelectHandler, false);
    }
  }

  function fileDragHover(e) {
    var fileDrag2 = document.getElementById('file-drag2');

    e.stopPropagation();
    e.preventDefault();

    fileDrag2.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload2');
  }

  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
      uploadFile(f);
    }
  }

  // Output
  function output(msg) {
    // Response
    var m = document.getElementById('messages2');
    m.innerHTML = msg;
  }

  function parseFile(file) {

    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );
    
    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start2').classList.add("hidden");
      document.getElementById('response2').classList.remove("hidden");
      document.getElementById('notimage2').classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image2').classList.remove("hidden");
      document.getElementById('file-image2').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image2').classList.add("hidden");
      document.getElementById('notimage2').classList.remove("hidden");
      document.getElementById('start2').classList.remove("hidden");
      document.getElementById('response2').classList.add("hidden");
      document.getElementById("file-upload-form2").reset();
    }
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById('file-progress2');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById('file-progress2');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  function uploadFile(file) {

    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById('class-roster-file'),
      pBar = document.getElementById('file-progress2'),
      fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
      // Check if file is less than x MB
      if (file.size <= fileSizeLimit * 1024 * 1024) {
        // Progress bar
        pBar.style.display = 'inline';
        xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
        xhr.upload.addEventListener('progress', updateFileProgress, false);

        // File received / failed
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4) {
            // Everything is good!

            // progress.className = (xhr.status == 200 ? "success" : "failure");
            // document.location.reload(true);
          }
        };

        // Start upload
        xhr.open('POST', document.getElementById('file-upload-form').action, true);
        xhr.setRequestHeader('X-File-Name', file.name);
        xhr.setRequestHeader('X-File-Size', file.size);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(file);
      } else {
        output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
      }
    }
  }

  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById('file-drag').style.display = 'none';
  }
}
ekUpload2();

  // File Upload
// 
function ekUpload3(){
  function Init() {

    console.log("Upload Initialised");

    var fileSelect3    = document.getElementById('file-upload3'),
        fileDrag3      = document.getElementById('file-drag3'),
        submitButton3  = document.getElementById('submit-button3');

    fileSelect3.addEventListener('change', fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag3.addEventListener('dragover', fileDragHover, false);
      fileDrag3.addEventListener('dragleave', fileDragHover, false);
      fileDrag3.addEventListener('drop', fileSelectHandler, false);
    }
  }

  function fileDragHover(e) {
    var fileDrag3 = document.getElementById('file-drag3');

    e.stopPropagation();
    e.preventDefault();

    fileDrag3.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload3');
  }

  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
      uploadFile(f);
    }
  }

  // Output
  function output(msg) {
    // Response
    var m = document.getElementById('messages3');
    m.innerHTML = msg;
  }

  function parseFile(file) {

    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );
    
    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start3').classList.add("hidden");
      document.getElementById('response3').classList.remove("hidden");
      document.getElementById('notimage3').classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image3').classList.remove("hidden");
      document.getElementById('file-image3').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image3').classList.add("hidden");
      document.getElementById('notimage3').classList.remove("hidden");
      document.getElementById('start3').classList.remove("hidden");
      document.getElementById('response3').classList.add("hidden");
      document.getElementById("file-upload-form3").reset();
    }
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById('file-progress3');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById('file-progress3');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  function uploadFile(file) {

    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById('class-roster-file'),
      pBar = document.getElementById('file-progress3'),
      fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
      // Check if file is less than x MB
      if (file.size <= fileSizeLimit * 1024 * 1024) {
        // Progress bar
        pBar.style.display = 'inline';
        xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
        xhr.upload.addEventListener('progress', updateFileProgress, false);

        // File received / failed
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4) {
            // Everything is good!

            // progress.className = (xhr.status == 200 ? "success" : "failure");
            // document.location.reload(true);
          }
        };

        // Start upload
        xhr.open('POST', document.getElementById('file-upload-form').action, true);
        xhr.setRequestHeader('X-File-Name', file.name);
        xhr.setRequestHeader('X-File-Size', file.size);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(file);
      } else {
        output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
      }
    }
  }

  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById('file-drag').style.display = 'none';
  }
}
ekUpload3();