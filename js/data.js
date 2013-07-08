var camp;
camp = {};
camp.data = [{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Herring Reservoir',
	description: '',
	location: [38.244496, -119.932938],
	scenicRating: 8,
	elevation: 7350,
	sites: true,
	numOfSites: 42,
	perSiteCost: 'free',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Pioneer Trail Group Camp',
	description: '',
	location: [38.19204, -119.99255],
	scenicRating: 8,
	elevation: 5700,
	sites: true,
	numOfSites: 200,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 3,
	sizeOfGroupSites: '50-100',
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$80-$120'
},{
	name: 'Cherry Lake',
	description: '',
	location: [37.97704, -119.91958],
	scenicRating: 8,
	elevation: 4700,
	sites: true,
	numOfSites: 45,
	perSiteCost: '$19',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Tamarack Flat',
	description: 'In Yosemite',
	location: [37.75158, -119.73631],
	scenicRating: 7,
	elevation: 6300,
	sites: true,
	numOfSites: 52,
	perSiteCost: '$10',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Tuolumne Meadows',
	description: '',
	location: [37.871055, -119.361056],
	scenicRating: 8,
	elevation: 8600,
	sites: true,
	numOfSites: 304,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 7,
	sizeOfGroupSites: '30',
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$40'
},{
	name: 'Lower Pines Yosemite',
	description: '',
	location: [37.73926, -119.56583],
	scenicRating: 9,
	elevation: 4000,
	sites: true,
	numOfSites: 60,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 2,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$30'
},{
	name: 'Upper Pines Yosemite',
	description: '',
	location: [37.73615, -119.56372],
	scenicRating: 9,
	elevation: 4000,
	sites: true,
	numOfSites: 238,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'North Pines Yosemite',
	description: '',
	location: [37.74164, -119.56628],
	scenicRating: 9,
	elevation: 4000,
	sites: true,
	numOfSites: 81,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Bridalveil Creek and Group Camp',
	description: 'Close to Glacier Point. Has Camp sites, Equestrian Sites, and Group Sites.',
	location: [37.6622, -119.6209],
	scenicRating: 10,
	elevation: 7200,
	sites: true,
	numOfSites: 110,
	perSiteCost: '$14',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 2,
	sizeOfGroupSites: '13-30',
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$40'
},{
	name: 'Wawona',
	description: 'Group Site is for tent only. Golfing.',
	location: [37.54706, -119.67772],
	scenicRating: 9,
	elevation: -1,
	sites: true,
	numOfSites: 93,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 1,
	sizeOfGroupSites: '13-30',
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$40'
},{
	name: 'Merced Recreation Area',
	description: 'Rafting, Kayaking, fishing along the Merced River. Tom Stienstra\'s best pick (California Camping Guide).',
	location: [37.59691, -120.00339],
	scenicRating: 8,
	elevation: -1,
	sites: true,
	numOfSites: '21 walk-in + 9 standard',
	perSiteCost: '$10',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Fresno Dome',
	description: '',
	location: [37.45599, -119.54906],
	scenicRating: 7,
	elevation: 6400,
	sites: true,
	numOfSites: 15,
	perSiteCost: '$17 single, $34 double,  + $5 per additional vehicle',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Nelder Grove',
	description: 'Near Nelder Grove Giant Sequoias. RVs up to 20 ft. Primitive.',
	location: [37.41256, -119.58707],
	scenicRating: 7,
	elevation: 5300,
	sites: true,
	numOfSites: 7,
	perSiteCost: 'free',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Upper Chiquio',
	description: '',
	location: [37.5022, -119.4105],
	scenicRating: 7,
	elevation: 6800,
	sites: true,
	numOfSites: 20,
	perSiteCost: 'free',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Clover Meadow',
	description: 'Jump-off point for backpacking. RVs up to 20 ft',
	location: [37.5286, -119.2808],
	scenicRating: 8,
	elevation: 7000,
	sites: true,
	numOfSites: 7,
	perSiteCost: 'free',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Green Creek',
	description: '',
	location: [38.11043, -119.27715],
	scenicRating: 7,
	elevation: 7500,
	sites: true,
	numOfSites: 11,
	perSiteCost: '$17',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 2,
	sizeOfGroupSites: '25-30',
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$52-$60'
},{
	name: 'Tioga Lake',
	description: 'Can get Windy.',
	location: [37.92715, -119.25551],
	scenicRating: 9,
	elevation: 9700,
	sites: true,
	numOfSites: 13,
	perSiteCost: '$19',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Ellery Lake',
	description: 'Just outside Yosemite',
	location: [37.93710, -119.24329],
	scenicRating: 9,
	elevation: 9500,
	sites: true,
	numOfSites: 21,
	perSiteCost: '$19',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Saddlebag Lake and Trailhead Group',
	description: 'Above the Tree line, Spectacular high country. Boat rentals.',
	location: [37.964209, -119.271808],
	scenicRating: 10,
	elevation: 10087,
	sites: true,
	numOfSites: 20,
	perSiteCost: '$19',
	sitesAcceptReservations: false,
	groupSites: true,
	numOfGroupSites: 1,
	sizeOfGroupSites: 25,
	groupSitesAcceptReservations: false,
	perGroupSiteCost: '$60'
},{
	name: 'Big Bend',
	description: '',
	location: [37.94519, -119.20284],
	scenicRating: 8,
	elevation: 07800,
	sites: true,
	numOfSites: 17,
	perSiteCost: '$19',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Pine Cliff Resort',
	description: 'Kids Heaven according to book.',
	location: [37.79636, -119.07694],
	scenicRating: 7,
	elevation: 7600,
	sites: true,
	numOfSites: 154,
	perSiteCost: '$18-28 + $5 additional vehicle + $1 per person over 4 people',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Hartley Springs',
	description: '',
	location: [37.77200, -119.03672],
	scenicRating: 8,
	elevation: 8400,
	sites: true,
	numOfSites: 20,
	perSiteCost: 'free',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Pumice Flat Group Camp',
	description: '',
	location: [37.644039, -119.073969],
	scenicRating: 6,
	elevation: 7700,
	sites: false,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 2,
	sizeOfGroupSites: '20-50',
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$61-$134'
},{
	name: 'Devils Postpile National Monument',
	description: 'Alternates: Red Meadow, Minaret Falls (with river nearby)',
	location: [37.61267, -119.07928],
	scenicRating: 9,
	elevation: 7600,
	sites: true,
	numOfSites: 21,
	perSiteCost: '$14 + $4-$7 per person access fee',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Lake Mary',
	description: 'Pretty.',
	location: [37.59931, -118.99635],
	scenicRating: 9,
	elevation: 8900,
	sites: true,
	numOfSites: 46,
	perSiteCost: '$21',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Crane Valley Group Camp',
	description: 'Bass Lake',
	location: [37.328726, -119.579565],
	scenicRating: 8,
	elevation: 4300,
	sites: false,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 7,
	sizeOfGroupSites: 45,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$35-$95'
},{
	name: 'Chilkoot',
	description: 'Use to go here with the Boy Scouts.',
	location: [37.362596, -119.539501],
	scenicRating: 7,
	elevation: 4600,
	sites: true,
	numOfSites: 14,
	perSiteCost: '$17',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Vermillion',
	description: 'Lake Edison',
	location: [37.3793, -119.0098],
	scenicRating: 8,
	elevation: 7700,
	sites: true,
	numOfSites: 31,
	perSiteCost: '$18 and $36 double site',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Upper and Lower Billy Creek',
	description: 'Huntington Lake',
	location: [37.23778, -119.22892],
	scenicRating: 8,
	elevation: 7000,
	sites: true,
	numOfSites: 59,
	perSiteCost: '$20 single, $40 double',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Kinnikinnick',
	description: '',
	location: [37.25265, -119.17856],
	scenicRating: 7,
	elevation: 7000,
	sites: true,
	numOfSites: 27,
	perSiteCost: '$22-$44',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Deer Creek',
	description: 'Huntington Lake',
	location: [37.25189, -119.17778],
	scenicRating: 8,
	elevation: 7000,
	sites: true,
	numOfSites: 28,
	perSiteCost: '$22-$44',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'College',
	description: '',
	location: [37.25193, -119.16966],
	scenicRating: 7,
	elevation: 7000,
	sites: true,
	numOfSites: 11,
	perSiteCost: '$20',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Badger Flat Group Camp',
	description: '',
	location: [37.271658, -119.115181],
	scenicRating: 7,
	elevation: 8200,
	sites: false,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 1,
	sizeOfGroupSites: 100,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$120'
},{
	name: 'Camp Edison',
	description: '',
	location: [37.12068, -119.30874],
	scenicRating: 8,
	elevation: 5370,
	sites: true,
	numOfSites: 252,
	perSiteCost: '$25-$32',
	sitesAcceptReservations: true,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Dinkey Creek and Group Camp',
	description: '',
	location: [37.0714, -119.1553],
	scenicRating: 7,
	elevation: 5700,
	sites: true,
	numOfSites: 128,
	perSiteCost: '$23',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 1,
	sizeOfGroupSites: 50,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: '$165'
},{
	name: 'Sawmill Flatt Campground',
	description: '2013 Reunion Site',
	location: [36.96974, -119.01713],
	scenicRating: 7,
	elevation: -1,
	sites: true,
	numOfSites: 2,
	perSiteCost: 'free',
	sitesAcceptReservations: false,
	groupSites: false,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
},{
	name: 'Template',
	description: '',
	location: [0,0],
	scenicRating: 0,
	elevation: 0,
	sites: true,
	numOfSites: 0,
	perSiteCost: '',
	sitesAcceptReservations: true,
	groupSites: true,
	numOfGroupSites: 0,
	sizeOfGroupSites: 0,
	groupSitesAcceptReservations: true,
	perGroupSiteCost: ''
}]
window.camp = camp;