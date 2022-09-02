var scrollableElement = document.body;
scrollableElement.addEventListener('wheel', checkScrollDirection);
var startRow = 2;
var endRow = 3;
var id = 1;

function checkScrollDirection(event) {
    // grab scroller and move it down a row or up a row depending on direction
    
    if (checkScrollDirectionIsUp(event)) {
        if(startRow > 2){
            document.getElementById("picture-"+id.toString()).className="picture none"
            id = id - 1;
            document.getElementById("picture-"+id.toString()).className="picture"
            startRow=startRow-1;
            endRow=endRow-1;
        }
    } else {
        if(startRow < 6){
            document.getElementById("picture-"+id.toString()).className="picture none"
            id = id + 1
            document.getElementById("picture-"+id.toString()).className="picture"
            startRow=startRow+1;
            endRow=endRow+1;
        }
    }
    
    document.getElementById("scroller").style.gridRowStart=startRow.toString();
    document.getElementById("scroller").style.gridRowEnd=endRow.toString();
}
  
function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}