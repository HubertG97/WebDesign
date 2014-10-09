var zaal = 
	[
	[0,0,3,3,3,3,3,3,3,3,0,0],
	[0,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,0],
	[3,3,3,3,3,2,2,3,3,3,3,3],
	[3,3,3,3,2,2,2,2,3,3,3,3],
	[3,3,3,2,2,1,1,2,2,3,3,3],
	[3,3,3,2,2,1,1,2,2,3,3,3],
	[3,3,3,2,2,1,1,2,2,3,3,3],
	[3,3,3,2,2,1,1,2,2,3,3,3],
	[3,3,3,3,2,2,2,2,3,3,3,3],
	[3,3,3,3,3,2,2,3,3,3,3,3],
	[0,3,3,3,3,3,3,3,3,3,3,0],
	[0,3,3,3,3,3,3,3,3,3,3,0],
	[0,0,3,3,3,3,3,3,3,3,0,0],
	];
	
function plaats_stoelen()
{
	var plaats;
	for(var rn=0; rn < zaal.length; rn++)
	{
		for(var sn=0; sn < zaal[rn].length; sn++)
		{
			switch(zaal[rn][sn])
			{
				case 0: plaats =  maak_leegte(); break;
				case 1: plaats =  maak_stoel(1,rn,sn,13.50); break;
				case 2: plaats =  maak_stoel(2,rn,sn,10.50); break;
				case 3: plaats =  maak_stoel(3,rn,sn,9.00); break;
			}
			document.getElementById("DIV_zaal").appendChild(plaats);
		}
		document.getElementById("DIV_zaal").appendChild(document.createElement("br"));
	}	
}

function maak_leegte()
{
	var plaats = document.createElement("button");
	plaats.type = "button";
	plaats.setAttribute("class", "leeg");
	
	return plaats;
}

function maak_stoel(klasse, rn, sn, prijs)
{
	var plaats= document.createElement("button");
	plaats.type="button";
	plaats.id="stoel_"+rn+"_"+sn;
	plaats.value = prijs;
	
	var Klasse;
	Klasse = "klasse_"+klasse;
	plaats.setAttribute("class",Klasse)
	return plaats;
}