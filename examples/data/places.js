var places = [
  {
    "name": "Subway",
    "mood": "Sandwiches",
    "cost": 5,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://www.subway.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Arby's",
    "mood": "Sandwiches",
    "cost": 5,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://arbys.com/our-menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Whataburger",
    "mood": "Burgers",
    "cost": 5,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://whataburger.com/food",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Long John Silver's",
    "mood": "Seafood",
    "cost": 5,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://www.ljsilvers.com/menu-items",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Chipotle",
    "mood": "Mexican",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://chipotle.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Raising Cane's",
    "mood": "Chicken",
    "cost": 5,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.raisingcanes.com/our-menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Chick-fil-a",
    "mood": "Chicken",
    "cost": 5,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.chick-fil-a.com/Food/Menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Panda Express",
    "mood": "Asian",
    "cost": 5,
    "dist": 5,
    "type": "Takeout",
    "menu": "http://www.pandaexpress.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Pei Wei",
    "mood": "Asian",
    "cost": 10,
    "dist": 4,
    "type": "Takeout",
    "menu": "https://www.peiwei.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Sonic",
    "mood": "Burgers",
    "cost": 5,
    "dist": 3,
    "type": "Takeout",
    "menu": "https://www.sonicdrivein.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Braum's",
    "mood": "Burgers",
    "cost": 5,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.braums.com/menus/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "McDonald's",
    "mood": "Burgers",
    "cost": 5,
    "dist": 4,
    "type": "Takeout",
    "menu": "http://www.mcdonalds.com/us/en/food/full_menu/full_menu_explorer.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Nhinja",
    "mood": "Sushi",
    "cost": 15,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.nhinja.com/menu.htm",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Phobulous",
    "mood": "Noodles",
    "cost": 10,
    "dist": 4,
    "type": "Restaurant",
    "menu": "http://www.urbanspoon.com/cities/46-oklahoma-city/restaurants/501166-pho-bulous/menu?utm_source=Google&utm_medium=Local&utm_campaign=GoogleMenus",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Hu-Hot",
    "mood": "Noodles",
    "cost": 10,
    "dist": 6,
    "type": "Restaurant",
    "menu": "http://www.huhot.com/Menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Alfredo's",
    "mood": "Mexican",
    "cost": 10,
    "dist": 5,
    "type": "Restaurant",
    "menu": "http://alfredosok.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "SUMO",
    "mood": "Asian",
    "cost": 50,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.sumoedmondok.com/menu.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Old Chicago",
    "mood": "Pizza",
    "cost": 10,
    "dist": 4,
    "type": "Restaurant",
    "menu": "http://www.oldchicago.com/full-menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Pepe's",
    "mood": "Mexican",
    "cost": 10,
    "dist": 4,
    "type": "Restaurant",
    "menu": "http://www.urbanspoon.com/cities/46-oklahoma-city/restaurants/501156-pepe-s-mexican/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Earl's",
    "mood": "BBQ",
    "cost": 10,
    "dist": 4,
    "type": "Takeout",
    "menu": "http://www.earlsribpalace.com/menus.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Billy Sims",
    "mood": "BBQ",
    "cost": 10,
    "dist": 4,
    "type": "Takeout",
    "menu": "http://www.billysimsbbq.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Stars & Stripes",
    "mood": "Pizza",
    "cost": 5,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.starsandstripespizza.com/menu.htm",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Taco Bueno",
    "mood": "Mexican",
    "cost": 5,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://www.tacobueno.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Papa John's",
    "mood": "Pizza",
    "cost": 10,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://order.papajohns.com/menu/MENUS/1/subMenu.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Taco Bell",
    "mood": "Mexican",
    "cost": 5,
    "dist": 5,
    "type": "Takeout",
    "menu": "https://www.tacobell.com/m/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Burger King",
    "mood": "Burgers",
    "cost": 5,
    "dist": 5,
    "type": "Takeout",
    "menu": "http://www.bk.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "The Garage",
    "mood": "Burgers",
    "cost": 10,
    "dist": 5,
    "type": "Takeout",
    "menu": "http://www.eatatthegarage.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Planet Sub",
    "mood": "Sandwiches",
    "cost": 10,
    "dist": 5,
    "type": "Takeout",
    "menu": "http://planetsub.com/the-food/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Wahaha Express",
    "mood": "Asian",
    "cost": 10,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://www.beyondmenu.com/25368/edmond/wahaha-express-edmond-73034.aspx?r=25368",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Cafe 7",
    "mood": "Italian",
    "cost": 10,
    "dist": 7,
    "type": "Takeout",
    "menu": "http://cafe7okc.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Hideaway Pizza",
    "mood": "Pizza",
    "cost": 10,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://www.hideawaypizza.com/menu.php",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Mazzio's",
    "mood": "Pizza",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.mazzios.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Which Wich",
    "mood": "Sandwiches",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.whichwich.com/#!/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Jersey Mike's",
    "mood": "Sandwiches",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.jerseymikes.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Firehouse Subs",
    "mood": "Sandwiches",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.firehousesubs.com/our-food/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Zarate's",
    "mood": "Mexican",
    "cost": 15,
    "dist": 1,
    "type": "Restaurant",
    "menu": "http://www.urbanspoon.com/cities/46-oklahoma-city/restaurants/1348683-zarate-s-latin-mexican-grill/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Bighead's",
    "mood": "Cajun",
    "cost": 10,
    "dist": 1,
    "type": "Takeout",
    "menu": "http://www.urbanspoon.com/cities/46-oklahoma-city/restaurants/1712387-bigheads/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Jimmy John's",
    "mood": "Sandwiches",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "https://www.jimmyjohns.com/menu/#/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Snow Pea",
    "mood": "Asian",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.snowpearestaurant.com/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "New China House",
    "mood": "Asian",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.newchinahouseedmond.com/#/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "KFC",
    "mood": "Chicken",
    "cost": 5,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.kfc.com/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Qdoba",
    "mood": "Mexican",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.qdoba.com/menu-nutrition",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Del Taco",
    "mood": "Mexican",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.deltaco.com/food.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "McAlister's Deli",
    "mood": "Sandwiches",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "https://www.mcalistersdeli.com/menu/starters",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "S & B's Burger Joint",
    "mood": "Burgers",
    "cost": 10,
    "dist": 6,
    "type": "Takeout",
    "menu": "http://www.urbanspoon.com/cities/46-oklahoma-city/restaurants/1493908-s-b-s-burger-joint/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Shiki",
    "mood": "Sushi",
    "cost": 20,
    "dist": 6,
    "type": "Restaurant",
    "menu": "http://shikiok.com/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Taco Mayo",
    "mood": "Mexican",
    "cost": 5,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.tacomayo.com/menu.aspx",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Thai Delight",
    "mood": "Asian",
    "cost": 10,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.thaidelightoklahoma.com/cuisine.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Kabsa House",
    "mood": "Mediterranean",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.urbanspoon.com/cities/46-oklahoma-city/restaurants/1716626-kabsa-house/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Freddy's Steakburgers",
    "mood": "Burgers",
    "cost": 10,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://www.freddysusa.com/menu/combomeals/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Smashburger",
    "mood": "Burgers",
    "cost": 10,
    "dist": 6,
    "type": "Takeout",
    "menu": "http://smashburger.com/eat/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Genghis Grill",
    "mood": "Asian",
    "cost": 10,
    "dist": 6,
    "type": "Restaurant",
    "menu": "http://www.genghisgrill.com/food-and-drinks/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Chili's",
    "mood": "Burgers",
    "cost": 10,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.chilis.com/EN/Pages/menu.aspx",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Applebee's",
    "mood": "Burgers",
    "cost": 10,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.applebees.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Outback Steakhouse",
    "mood": "Steak",
    "cost": 15,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.outback.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Ted's Cafe",
    "mood": "Mexican",
    "cost": 15,
    "dist": 4,
    "type": "Restaurant",
    "menu": "http://tedscafe.com/our-menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Slim Chickens",
    "mood": "Chicken",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://slimchickens.com/menu/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Chicken Express",
    "mood": "Chicken",
    "cost": 10,
    "dist": 4,
    "type": "Takeout",
    "menu": "http://www.chickene.com/menu.html",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Carl's Jr.",
    "mood": "Burgers",
    "cost": 10,
    "dist": 4,
    "type": "Takeout",
    "menu": "http://www.carlsjr.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Jack In The Box",
    "mood": "Burgers",
    "cost": 5,
    "dist": 5,
    "type": "Restaurant",
    "menu": "http://www.jackinthebox.com/food",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Boulevard Steakhouse",
    "mood": "Steak",
    "cost": 50,
    "dist": 1,
    "type": "Restaurant",
    "menu": "http://boulevardsteakhouse.com/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Charleston's",
    "mood": "Steak",
    "cost": 40,
    "dist": 3,
    "type": "Restaurant",
    "menu": "http://www.ehsrg.com/charlestons/charlestons-ok-edmond/",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Lemongrass",
    "mood": "Asian",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.lemongrassok.com/lunch_menu.htm"
  },
  {
    "name": "Mt. Everest Cuisines",
    "mood": "Indian",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.mteverestcuisines.com/menu.html"
  },
  {
    "name": "Hobby's Hoagies",
    "mood": "Sandwiches",
    "cost": 5,
    "dist": 3,
    "type": "Takeout",
    "menu": "http://hobbyshoagies.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  },
  {
    "name": "Humble Pie",
    "mood": "Pizza",
    "cost": 10,
    "dist": 2,
    "type": "Takeout",
    "menu": "http://www.humblepieok.com/menu",
    "outline": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  }
];
