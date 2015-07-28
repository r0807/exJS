///////////////////////////////////
///	Ex.ua remeber button.	    ///
///	version 1.0.3		        ///
///	July 2015.	            	///
///////////////////////////////////

document.body.onload = function(){
	var a = document.getElementsByTagName('small'), 
		b = 0, 
		c, 
		d, 
		e, 
		f, 
		g, 
		j = window.location.pathname;

	if(a.length !== 0 && /\w+/.exec(j)[0] !== 'view_comments'){ 		// find valid URL
		while(b<a.length){ 						                        // add buttons for each topic
			c = document.createElement('div'); 		                	// create new div block
			c.setAttribute('class', 'r_button'); 			            // use standart button class
			c.setAttribute('style', 'margin-top:5px;'); 		        // some visual sugar
				if (/\w+/.exec(j)[0] === 'user'){ 	                	// check for valid URL
					d = a[b].parentNode.childNodes[1].href;
				} else {		
					d = a[b].parentNode.firstChild.href;
				}
			e = /\d+/.exec(d); 				                        	// find ID of topic
			f = document.createElement('a'); 		                	// create link
			f.setAttribute('href', '/add_link/'+ e + '?link_id=4');
			f.innerHTML = 'Запомнить'; 			                    	// print some text
			c.appendChild(f);
			a[b].parentNode.appendChild(c); 		                	// add buttons
			b++;
		}
	} else {
		return;
	}
}
