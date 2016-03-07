/*Author Mark Singleton
* created on 2/22/2016*/

/*Create global variables*/
	var vehicle;
	var vehicle_type;
	var water_type;
	var water_preference;
	var vehicle_status;
	var activity_time;
	var group_size;
	var len;

/*Set date and time*/	
	function getMyDate(){
		var day = new Date();
		document.getElementById("current_date").innerHTML = day.toDateString();
	}
	
	function getMyTime(){
		var currentTime = new Date();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		var currentSeconds = currentTime.getSeconds();
		
		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
		
		var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		
		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
				
		document.getElementById("current_time").innerHTML = currentTimeString;
	}

/*Begining process for form evaluation*/
	function checkVehicle(){
		vehicle_type = document.getElementById('vehicle_type').value;
		checkWaterType();
	}

	function checkWaterType(){
		len = document.getElementsByName('water_type').length;
		for(var i = 0; i < len; i++){		
			if(document.getElementsByName('water_type')[i].checked){
				water_type = document.getElementsByName('water_type')[i].value;
				break;
				}
			}
		checkWaterPreference();
	}

	function checkWaterPreference(){
		water_preference = document.getElementById('water_preference').value;
		checkVehicleStatus();		
	}

	function checkVehicleStatus(){
		len = document.getElementsByName('vehicle_status').length;
		for(var i = 0; i < len; i++){		
			if(document.getElementsByName('vehicle_status')[i].checked){
				vehicle_status = document.getElementsByName('vehicle_status')[i].value;
				break;
				}
			}
		checkActivityTime();
	}

	function checkActivityTime(){
		len = document.getElementsByName('activity_time').length;
		for(var i = 0; i < len; i++){		
			if(document.getElementsByName('activity_time')[i].checked){
				activity_time = document.getElementsByName('activity_time')[i].value;
				break;
				}
			}
		checkGroupSize();
	}

	function checkGroupSize(){
		group_size = document.getElementById('party_size').value;
		makeRecommendations();
	}
/*All form info received in assigned to variables*/
	function makeRecommendations(){
	
		switch(vehicle_type) {		
			case 'sailboat':
				 screenInput();
			break;
			case 'speedboat':
				 screenInput();
			break;
			case 'fishing_boat':
				 screenInput();
			break;
			case 'yacht':
				 screenInput();
			break;
			case 'canoe':
				 screenInput();
			break;
			case 'kayak':
				 screenInput();
			break;
			case 'jetski':
				 screenInput();
			break;
			default:
				alert('An error has occured. Please try again.');
			break;
		
		}
	
	}

/*function designed to evaluate variable input*/	
	function screenInput() {
		var choice;
		switch(water_type) {
				case 'salt':
					switch(water_preference){
						case 'offshore':
						case 'inshore':
							switch(vehicle_status){
								case 'owned':
									switch(activity_time){
										case 'early_morning':
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "SaltOwned";
											initializeSelection(choice);
										break;
									}
								break;
								case 'rental':
								case 'chartered':
									switch(activity_time){
										case 'early_morning':
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "SaltRental";
											initializeSelection(choice);
										break;
									}
								break;
								case 'none':
									alert('Please check out the Beaches and State Parks\' tabs.');
									break;
							}
						break;
						case 'onshore':
							alert('It\'s very difficult to boat onshore. However, there are some wonderful beach options.');
						break;
						case 'none':
							alert('There are no limits on how far you can boat. Just remember to bring lots of supplies.');
						break;
					}
				break;
				case 'fresh':
					switch(water_preference){
						case 'offshore':
						case 'inshore':
							switch(vehicle_status){
								case 'owned':
									switch(activity_time){
										case 'early_morning':
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "FreshOwned";
											initializeSelection(choice);
										break;
									}
								break;
								case 'rental':
								case 'chartered':
									switch(activity_time){
										case 'early_morning':
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "FreshRental";
											initializeSelection(choice);
										break;
									}
								break;
								case 'none':
									alert('Please check out the Beaches and State Parks\' tabs.');
								break;
							}
						break;
						case 'onshore':
							alert('It\'s very difficult to sail onshore. However, there are some wonderful beach options.');
						break;
						case 'none':
							alert('There are no limits on how far you can sail. Just remember to bring lots of supplies.');
						break;
					}
				break;
				case 'both':
					switch(water_preference){
						case 'offshore':
							switch(vehicle_status){
								case 'owned':
									switch(activity_time){
										case 'early_morning':
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "SaltOwned";
											initializeSelection(choice);
										break;
									}
								break;
								case 'rental':
								case 'chartered':
									switch(activity_time){
										case 'early_morning':
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "SaltRental";
											initializeSelection(choice);
										break;
									}
								break;
								case 'none':
									alert('Please check out the Beaches and State Parks\' tabs.');
								break;
							}
						break;
						case 'inshore':
							switch(vehicle_status){
								case 'owned':
									switch(activity_time){
										case 'early_morning':
											choice = vehicle_type + "FreshOwned";
											initializeSelection(choice);
										break;
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "SaltOwned";
											initializeSelection(choice);
										break;
									}
								break;
								case 'rental':
								case 'chartered':
									switch(activity_time){
										case 'early_morning':
											choice = vehicle_type + "FreshRental";
											initializeSelection(choice);
										break;
										case 'afternoon':
										case 'evening':
											choice = vehicle_type + "SaltRental";
											initializeSelection(choice);
										break;
									}
								break;
								case 'none':
									alert('Please check out the Beaches and State Parks\' tabs.');
								break;
							}
						break;
						case 'onshore':
							alert('It\'s very difficult to boat onshore. However, there are some wonderful beach options.');
						break;
						case 'none':
							alert('There are no limits on how far you can boat. Just remember to bring lots of supplies.');
						break;
					}
				break;
				case 'none':
					alert('The State Parks recommendation might be right for you.');
				break;
		}
			
	}
	
/*function assigns recommendation based on input*/
	function initializeSelection(selection) {
	switch(selection) {
		case 'sailboatFreshRental':
			document.getElementById('home_frame').src = "http://www.beachsidesailing.com/sail-boat-rentals";
		break;
		case 'sailboatFreshOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'sailboatSaltRental':
			document.getElementById('home_frame').src = "http://www.beachsidesailing.com/sail-boat-rentals";
		break;
		case 'sailboatSaltOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'speedboatFreshRental':
			document.getElementById('home_frame').src = "http://www.boatclub.com/Fleet.aspx";
		break;
		case 'speedboatFreshOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'speedboatSaltRental':
			document.getElementById('home_frame').src = "http://www.a1afunrentals.com/Boat-Rentals.html";
		break;
		case 'speedboatSaltOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'fishing_boatFreshRental':
			document.getElementById('home_frame').src = "http://www.boatclub.com/WestLakeTohoBoatRental.aspx";
		break;
		case 'fishing_boatFreshOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'fishing_boatSaltRental':
			document.getElementById('home_frame').src = "http://fishobsession.com/";
		break;
		case 'fishing_boatSaltOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'yachtFreshRental':
			document.getElementById('home_frame').src = "http://www.yachtcharterfleet.com/luxury-charter-yacht-26307/orlando-l.htm";
		break;
		case 'yachtFreshOwned':
			document.getElementById('home_frame').src = "http://shipsusa.com/";
		break;
		case 'yachtSaltRental':
			document.getElementById('home_frame').src = "http://www.yachtcharterfleet.com/luxury-charter-yacht-26307/orlando-l.htm";
		break;
		case 'yachtSaltOwned':
			document.getElementById('home_frame').src = "http://shipsusa.com/";
		break;
		case 'canoeFreshRental':
			document.getElementById('home_frame').src = "http://tinyurl.com/hydemg2";
		break;
		case 'canoeFreshOwned':
			document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
		break;
		case 'canoeSaltRental':
			document.getElementById('home_frame').src = "http://surfinggator.com/Orlando/canoe-kayak/canoe-kayak.html";
		break;
		case 'canoeSaltOwned':
			document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
		break;
		case 'kayakFreshRental':
			document.getElementById('home_frame').src = "http://www.centralfloridakayaktours.com/";
		break;
		case 'kayakFreshOwned':
			document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
		break;
		case 'kayakSaltRental':
			document.getElementById('home_frame').src = "http://surfinggator.com/Orlando/canoe-kayak/canoe-kayak.html";
		break;
		case 'kayakSaltOwned':
			document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
		break;
		case 'jetskiFreshRental':
			document.getElementById('home_frame').src = "http://www.extremejetskioforlando.com/";
		break;
		case 'jetskiFreshOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
		case 'jetskiSaltRental':
			document.getElementById('home_frame').src = "http://cocoabeachjetskirentals.com/";
		break;
		case 'jetskiSaltOwned':
			document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
		break;
	}
	
}
	
	