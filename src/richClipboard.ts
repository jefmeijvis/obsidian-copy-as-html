export function copyFormatted (html : string) 
{
    var container = document.createElement('div')
    container.innerHTML = html
  
    container.style.position = 'fixed'
    container.style.pointerEvents = 'none'
    container.style.opacity = 0 + ''
  
    // Detect all style sheets of the page
    var activeSheets = Array.prototype.slice.call(document.styleSheets)
      .filter(function (sheet : any) {
        return !sheet.disabled
      })
  
    // Mount the container to the DOM to make `contentWindow` available
    document.body.appendChild(container)
  
    // Copy to clipboard
    //@ts-ignore
    window.getSelection().removeAllRanges()
  
    var range = document.createRange()
    range.selectNode(container)
    //@ts-ignore
    window.getSelection().addRange(range)
  
    document.execCommand('copy')
  
    for (var i = 0; i < activeSheets.length; i++) 
      activeSheets[i].disabled = true
  
    document.execCommand('copy')
  
    for (var i = 0; i < activeSheets.length; i++)
      activeSheets[i].disabled = false
  
    // Remove the container
    document.body.removeChild(container)
  }