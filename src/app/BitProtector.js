const TILE_H = 15;
const TILE_W = 15;
const MAP_H = 3;
const MAP_W = 3;

function level1(w,h)
{
	if(	(h == 0 && w == 0)
		|| (h == 1 && (w >= 0 && w <= 2))
		|| (h == 2 && w == 2)
		)
	{
		return true;
	}
	return false;
}

function listenEvent(eventTarget,eventType,eventHandler)
{
	if(eventTarget.addEventListener)
	{
		eventTarget.addEventListener(eventType,eventHandler,false);
	}
	else if(eventTarget.attachEvent)
	{
		eventType = "on" + eventType;
		eventTarget.attachEvent(eventType,eventHandler);
	}
	else
	{
		eventTarget["on" + eventType] = eventHandler;
	}
}

function cancelEvent(event)
{
	if(event.preventDefault)
	{
		event.preventDefault();
	}
	else
	{
		event.returnValue = false;
	}
}

function cancelPropogation(event)
{
	if(event.stopPropogation)
	{
		event.stopPropogation();
	}
	else
	{
		event.cancelBubble = true;
	}
}


function drawMap()
{
	// create the map zone
	for(var j = 0; j < MAP_H; j++)
	{
		for(var i = 0; i < MAP_W; i++)
		{
			var mapzone = document.createElement("div");
			mapzone.setAttribute("id","mapzone"+i);
			mapzone.setAttribute("class","mapzone");
			mapzone.style.left = TILE_H*i + "px";
			mapzone.style.top = TILE_W*j + "px";
			if(level1(i,j))
			{
				mapzone.style.backgroundColor = "#1E90FF";
			}
			else
			{
				// if it isn't part of the map, its a drop target for a turret
				listenEvent(mapzone,"dragenter",cancelEvent);
				listenEvent(mapzone,"dragover",dragOver);
				listenEvent(mapzone,"drop",mapDrop(mapzone));
			}
			document.body.appendChild(mapzone);
		}
	}
}
window.onload=function(){
  drawMap();
}
