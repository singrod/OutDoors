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
		
		var timeOfDay = ( currentHours < 12 ) ? "am" : "pm";
		currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;
		
		var currentTimeString = currentHours + ":" + currentMinutes +" " + timeOfDay;
				
		document.getElementById("current_time").innerHTML = currentTimeString;
	}

/*Begining process for form evaluation*/
	function checkVehicle(){
		vehicle_type = document.getElementById('vehicle_type').value;
		checkWaterType();
	}

	function checkWaterType(){
		water_type = document.getElementById('water_type').value;
		checkWaterPreference();
	}

	function checkWaterPreference(){
		water_preference = document.getElementById('water_preference').value;
		checkVehicleStatus();		
	}

	function checkVehicleStatus(){
		vehicle_status = document.getElementById('vehicle_status').value;
		checkActivityTime();
	}

	function checkActivityTime(){
		activity_time = document.getElementById('activity_time').value;
		checkGroupSize();
	}

	function checkGroupSize(){
		group_size = document.getElementById('group_size').value;
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
		var myWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		switch(selection) {
			case 'sailboatFreshRental':				
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.beachsidesailing.com/sail-boat-rentals";
				} else {
					document.getElementById('myLink').href = "http://www.beachsidesailing.com/sail-boat-rentals";
					document.getElementById('myLink').click();
				}				
			break;
			case 'sailboatFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'sailboatSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.beachsidesailing.com/sail-boat-rentals";
				} else {
					document.getElementById('myLink').href = "http://www.beachsidesailing.com/sail-boat-rentals";
					document.getElementById('myLink').click();
				}				
			break;
			case 'sailboatSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'speedboatFreshRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.boatclub.com/Fleet.aspx";
				} else {
					document.getElementById('myLink').href = "http://www.boatclub.com/Fleet.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'speedboatFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'speedboatSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.a1afunrentals.com/Boat-Rentals.html";
				} else {
					document.getElementById('myLink').href = "http://www.a1afunrentals.com/Boat-Rentals.html";
					document.getElementById('myLink').click();
				}				
			break;
			case 'speedboatSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'fishing_boatFreshRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.boatclub.com/WestLakeTohoBoatRental.aspx";
				} else {
					document.getElementById('myLink').href = "http://www.boatclub.com/WestLakeTohoBoatRental.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'fishing_boatFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'fishing_boatSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://fishobsession.com/";
				} else {
					document.getElementById('myLink').href = "http://fishobsession.com/";
					document.getElementById('myLink').click();
				}			
			break;
			case 'fishing_boatSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'yachtFreshRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.yachtcharterfleet.com/luxury-charter-yacht-26307/orlando-l.htm";
				} else {
					document.getElementById('myLink').href = "http://www.yachtcharterfleet.com/luxury-charter-yacht-26307/orlando-l.htm";
					document.getElementById('myLink').click();
				}			
			break;
			case 'yachtFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://shipsusa.com/";
				} else {
					document.getElementById('myLink').href = "http://shipsusa.com/";
					document.getElementById('myLink').click();
				}			
			break;
			case 'yachtSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.yachtcharterfleet.com/luxury-charter-yacht-26307/orlando-l.htm";
				} else {
					document.getElementById('myLink').href = "http://www.yachtcharterfleet.com/luxury-charter-yacht-26307/orlando-l.htm";
					document.getElementById('myLink').click();
				}			
			break;
			case 'yachtSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://shipsusa.com/";
				} else {
					document.getElementById('myLink').href = "http://shipsusa.com/";
					document.getElementById('myLink').click();
				}			
			break;
			case 'canoeFreshRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://tinyurl.com/hydemg2";
				} else {
					document.getElementById('myLink').href = "http://tinyurl.com/hydemg2";
					document.getElementById('myLink').click();
				}				
			break;
			case 'canoeFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
				} else {
					document.getElementById('myLink').href = "http://www.paddleflorida.net/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'canoeSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://surfinggator.com/Orlando/canoe-kayak/canoe-kayak.html";
				} else {
					document.getElementById('myLink').href = "http://surfinggator.com/Orlando/canoe-kayak/canoe-kayak.html";
					document.getElementById('myLink').click();
				}				
			break;
			case 'canoeSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
				} else {
					document.getElementById('myLink').href = "http://www.paddleflorida.net/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'kayakFreshRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.centralfloridakayaktours.com/";
				} else {
					document.getElementById('myLink').href = "http://www.centralfloridakayaktours.com/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'kayakFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
				} else {
					document.getElementById('myLink').href = "http://www.paddleflorida.net/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'kayakSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://surfinggator.com/Orlando/canoe-kayak/canoe-kayak.html";
				} else {
					document.getElementById('myLink').href = "http://surfinggator.com/Orlando/canoe-kayak/canoe-kayak.html";
					document.getElementById('myLink').click();
				}				
			break;
			case 'kayakSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.paddleflorida.net/";
				} else {
					document.getElementById('myLink').href = "http://www.paddleflorida.net/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'jetskiFreshRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://www.extremejetskioforlando.com/";
				} else {
					document.getElementById('myLink').href = "http://www.extremejetskioforlando.com/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'jetskiFreshOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
			case 'jetskiSaltRental':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "http://cocoabeachjetskirentals.com/";
				} else {
					document.getElementById('myLink').href = "http://cocoabeachjetskirentals.com/";
					document.getElementById('myLink').click();
				}				
			break;
			case 'jetskiSaltOwned':
				if(myWindow > 991){
					document.getElementById('home_frame').src = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
				} else {
					document.getElementById('myLink').href = "https://public.myfwc.com/LE/boatramp/public/default.aspx";
					document.getElementById('myLink').click();
				}				
			break;
		}	
}

/*functions brings viewer to destination site*/
	function getPark(park){
		var myWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			switch (park){
				case 'wekiwa':
					if(myWindow > 991){
						document.getElementById('park_frame').src = "http://www.stateparks.com/wekiwa_springs_state_park_in_florida.html";
					} else {
						document.getElementById('wekiwaLink').href = "http://www.stateparks.com/wekiwa_springs_state_park_in_florida.html";
						document.getElementById('wekiwaLink').click();
					}				
				break;
				case 'sebastian':
					if(myWindow > 991){
						document.getElementById('park_frame').src = "https://www.floridastateparks.org/park/Sebastian-Inlet";
					} else {
						document.getElementById('sebastianLink').href = "https://www.floridastateparks.org/park/Sebastian-Inlet";
						document.getElementById('sebastianLink').click();
					}					
				break;
				case 'tomoka':
					if(myWindow > 991){
						document.getElementById('park_frame').src = "https://www.floridastateparks.org/park/Tomoka";
					} else {
						document.getElementById('tomokaLink').href = "https://www.floridastateparks.org/park/Tomoka";
						document.getElementById('tomokaLink').click();
					}					
				break;
				case 'de_leon':
					if(myWindow > 991){
						document.getElementById('park_frame').src = "https://www.floridastateparks.org/park/De-Leon-Springs";
					} else {
						document.getElementById('de_leon').href = "https://www.floridastateparks.org/park/De-Leon-Springs";
						document.getElementById('de_leon').click();
					}					
				break;
				default:
					if(myWindow > 991){
						document.getElementById('park_frame').src = "http://www.trbimg.com/img-555b687b/turbine/os-most-popular-florida-state-parks-pictures";
					} else {
						document.getElementById('wekiwaLink').href = "http://www.trbimg.com/img-555b687b/turbine/os-most-popular-florida-state-parks-pictures";
						document.getElementById('wekiwaLink').click();
					}					
				break;
			}
		}
		
	function getEvent(event){
		var myWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			switch (event){
				case 'daytona':
					if(myWindow > 991){
						document.getElementById('event_frame').src = "http://www.daytonafreeride.com/";
					} else {
						document.getElementById('daytonaLink').href = "http://www.daytonafreeride.com/";
						document.getElementById('daytonaLink').click();
					}					
				break;
				case 'cocoa':
					if(myWindow > 991){
						document.getElementById('event_frame').src = "http://superboat.com/race-schedule/cocoa-beach-schedule/";
					} else {
						document.getElementById('cocoaLink').href = "http://superboat.com/race-schedule/cocoa-beach-schedule/";
						document.getElementById('cocoaLink').click();
					}				
				break;
				default:
					 if(myWindow > 991){
						document.getElementById('event_frame').src = "http://bigbamboofishingcharters.com/wp-content/uploads/2016/02/BIG-BAMBOO-FLORIDA-FISHING-CHARTERS-BIG-GAME.png";
					} else {
						document.getElementById('daytonaLink').href = "http://bigbamboofishingcharters.com/wp-content/uploads/2016/02/BIG-BAMBOO-FLORIDA-FISHING-CHARTERS-BIG-GAME.png";
						document.getElementById('daytonaLink').click();
					}					
				break;
			}
		}
		
	function getBeach(beach){
		var myWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			switch (beach){
				case 'ormond':				
					if(myWindow > 991){
						document.getElementById('beach_frame').src = "http://www.tripadvisor.com/Tourism-g34517-Ormond_Beach_Florida-Vacations.html";
					} else {
						document.getElementById('ormondLink').href = "http://www.tripadvisor.com/Tourism-g34517-Ormond_Beach_Florida-Vacations.html";
						document.getElementById('ormondLink').click();
					}					
				break;
				case 'daytona':
					if(myWindow > 991){
						document.getElementById('beach_frame').src = "http://www.tripadvisor.com/Tourism-g34172-Daytona_Beach_Florida-Vacations.html";
					} else {
						document.getElementById('daytona_link').href = "http://www.tripadvisor.com/Tourism-g34172-Daytona_Beach_Florida-Vacations.html";
						document.getElementById('daytona_link').click();
					}					
				break;
				case 'cocoa':
					if(myWindow > 991){
						document.getElementById('beach_frame').src = "http://www.tripadvisor.com/Tourism-g34145-Cocoa_Beach_Brevard_County_Florida-Vacations.html";
					} else {
						document.getElementById('cocoa_link').href = "http://www.tripadvisor.com/Tourism-g34145-Cocoa_Beach_Brevard_County_Florida-Vacations.html";
						document.getElementById('cocoa_link').click();
					}					
				break;
				case 'melborne':
					if(myWindow > 991){
						document.getElementById('beach_frame').src = "http://www.tripadvisor.com/Tourism-g34434-Melbourne_Beach_Brevard_County_Florida-Vacations.html";
					} else {
						document.getElementById('melbourneLink').href = "http://www.tripadvisor.com/Tourism-g34434-Melbourne_Beach_Brevard_County_Florida-Vacations.html";
						document.getElementById('melbourneLink').click();
					}					
				break;
				default:
					if(myWindow > 991){
						document.getElementById('beach_frame').src =  "http://www.hdwallpapersnew.net/wp-content/uploads/2015/03/beautiful-nature-high-definition-full-screen-wallpaper-image-free.jpg";
					} else {
						document.getElementById('ormondLink').href =  "http://www.hdwallpapersnew.net/wp-content/uploads/2015/03/beautiful-nature-high-definition-full-screen-wallpaper-image-free.jpg";
						document.getElementById('ormondLink').click();
					}					
				break;
			}
		}
		
	function getFish(fish){
		var myWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			switch (fish){
				case 'salt':
					if(myWindow > 991){
						document.getElementById('fish_frame').src = "http://www.floridasportsman.com/regions/east-central/";
					} else {
						document.getElementById('saltLink').href = "http://www.floridasportsman.com/regions/east-central/";
						document.getElementById('saltLink').click();
					}					
				break;
				case 'fresh':
					if(myWindow > 991){
						document.getElementById('fish_frame').src = "http://www.floridasportsman.com/freshwater/";
					} else {
						document.getElementById('freshLink').href = "http://www.floridasportsman.com/freshwater/";
						document.getElementById('freshLink').click();
					}					
				break;
				default:
					if(myWindow > 991){
						document.getElementById('fish_frame').src = document.getElementById('fish_frame').src = "http://bigbamboofishingcharters.com/wp-content/uploads/2016/02/BIG-BAMBOO-FLORIDA-FISHING-CHARTERS-BIG-GAME.png";
					} else {
						document.getElementById('saltLink').href = document.getElementById('fish_frame').src = "http://bigbamboofishingcharters.com/wp-content/uploads/2016/02/BIG-BAMBOO-FLORIDA-FISHING-CHARTERS-BIG-GAME.png";
						document.getElementById('saltLink').click();
					}					
				break;
			}
		}	