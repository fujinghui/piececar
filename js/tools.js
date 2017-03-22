function FAjax(){
	this.xmlhttp;
	this.func;
	this.text;
	this.init = function(){
		if(window.XMLHttpRequest)
		{
			this.xmlhttp = new XMLHttpRequest();
		}
		else
		{
			this.xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
		}
	}
	this.reader = function(url,text, onfunc, mode){
		this.func = onfunc;
		var xmlhttp;
		if(window.XMLHttpRequest)
		{
			xmlhttp = new XMLHttpRequest();
		}
		else
		{
			xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status==200)
			{
				onfunc(xmlhttp.responseText);
			}
			else
			{
				
			}
		};
		
		if(mode == "POST")
		{
			xmlhttp.open("POST", url, true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(text);
		}
		else if(mode == "GET")
		{
			xmlhttp.open("GET", url, true);
			//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send(null);
		}
	}
	this.onCompletion = function(){
		if(this.xmlhttp.readyState == 4 && this.xmlhttp.status==200)
		{
			
		}
		else
		{
			
		}
	}
}
