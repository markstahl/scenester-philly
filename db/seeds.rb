# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.delete_all

m1 = Movie.create(
  title: "Rocky",
  image_url: "https://www.goldenglobes.com/sites/default/files/articles/cover_images/1977-rocky.jpg",
  year: "1976",
  coordinates: [-75.1812806725502, 39.96576523820587],
  location_name: "Philadelphia Art Museum, Philadelphia, PA",
  description: "Rocky, the Oscar Winning film of 1976, was filmed on location at The Philadelphia Art Museum. The name has become so synonomous with it that a statue was erected in honor of the film and the entry stairway has been renamed 'The Rocky Stairs'.",
  imdb_link: "http://www.imdb.com/title/tt0075148/?ref_=nv_sr_1"
)

m2 = Movie.create(
  title:"The Happening",
  image_url:"http://www.rosariocine.com.ar/info/2465d.jpg",
  year:"2008",
  coordinates:[-75.17079055309296, 39.950078286904365],
  location_name:"Rittenhouse Square, Philadelphia, PA",
  description:"A psycological thriller centered around the uncontrolled urge to commit suicide. M. Night Shamaylan's first R rated feature film. Like Shamaylan's other films, the plot is largely based in the Philadelphia area.",
  imdb_link:"http://www.imdb.com/title/tt0949731/"
)

m3 = Movie.create(
  title:"The Italian Job",
  image_url:"https://images-na.ssl-images-amazon.com/images/I/91BI%2BAGPCmL._SL1500_.jpg",
  year:"2003",
  coordinates:[-75.17212629318237, 39.947129642982006],
  location_name:"Delancey Street, Philadelphia, PA",
  description:"A classic high speed heist. The film revolves around a team led by Donald Sutherland and Mark Wahlberg in an attempt to steal $35 million worth of gold bars from Venice, Italy. Although the film was shot on many locations worldwide, one chase was filmed in Philadelphia on Delancey Street, a small side street between Pine and Spruce.",
  imdb_link:"http://www.imdb.com/title/tt0317740/?ref_=ttloc_loc_tt"
)

m4 = Movie.create(
  title:"Philadelphia",
  image_url:"http://www.impawards.com/1993/posters/philadelphia_xlg.jpg",
  year:"1993",
  coordinates:[-75.14786303043365, 39.944016362164],
  location_name:"University of Pennsylvania library, Philadelphia, PA",
  description:"The heartwrenching story of Andrew Beckett (Tom Hanks), a gay, HIV positive lawyer who is fired from his firm during the HIV scare. After hiring a homophobic lawyer Joe Miller(Denzel Washington) to defend him in court, Miller begins to see that Beckett is like everyone else. Although Miller helps and eventually wins the case for Beckett, he succumbs to his disease. Like the name of the film, Philadelphia was filmed entirely in the city of brotherly love. One key scene takes place within the library of the University of Pennsylvania.",
  imdb_link:"http://www.imdb.com/title/tt0107818/?ref_=nv_sr_2"
)

m5 = Movie.create(
  title:"Trading Places",
  image_url:"https://ia.media-imdb.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX675_AL_.jpg",
  year:"1983",
  coordinates:[-75.16392678022385, 39.949739014262825],
  location_name:"Wells Fargo Building, Philadelphia, PA",
  description:"Louis Winthorpe III (Dan Aykroyd) is a lawyer who discusses whether environment or heridity determines their place in life. After bumping into Billy Ray Valentine (Eddie Murphy) and assuming he is being robbed, Winthorpe attempts to have him arrested. The law firm owners make a bet to see what will happen if the two switch places. Let hilarity ensue. The filming locations were split between Philadelphia and New York, with the exterior shots and interior shots filmed in each location, respectively. The Wells Fargo building was the site of the Duke and Duke law firm.",
  imdb_link:"http://www.imdb.com/title/tt0086465/?ref_=nv_sr_1"
)

m6 = Movie.create(
  title:"The Wrestler",
  image_url:"https://jmichaelrios.files.wordpress.com/2013/05/thewrestler.jpg",
  year:"2008",
  coordinates:[-75.14726758003235, 39.918403532944865],
  location_name:"2300 Arena, Philadelphia, PA",
  description:"The story of aging wrestler Randy 'The Ram' Robinson (Mickey Rourke) and his inability to come to terms with life outside of the wrestling ring. As he tries to adjust to real life, like reconciling with his abandoned daughter, he struggles to come to terms with reality. But, a rematch against his 80's wrestling rival 'The Ayotollah' (Ernest Miller) may be just the ticket to return to stardom. The only scenes shot in Philadelphia are the arena scenes at 2300 Arena in South Philadelphia. All other scenes were filmed on location in north, central and southern New Jersey.",
  imdb_link: "http://www.imdb.com/title/tt1125849/?ref_=nv_sr_1"
)

m7 = Movie.create(
  title:"Silver Linings Playbook",
  image_url:"https://ia.media-imdb.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  year:"2012",
  coordinates:[-75.16583919525146, 39.901785960738344],
  location_name:"Lincoln Financial Field, Philadelphia, PA",
  description:"Pat Solatano Jr. (Bradley Cooper) is released from a Maryland Hospital after eight months of counseling following the assault of his ex-wife's lover. Ordered to move back in with his parents in Philadelphia, and also being diagnosed with bi-polar disorder, he is determined to start fresh and gain his job and life back. Silver Linings Playbook was filmed all throughout Philadelphia and it's suburbs, but a crucial scene was filmed at the Eagles home base, Lincoln Financial Field.",
  imdb_link: "http://www.imdb.com/title/tt1045658/"
)

m8 = Movie.create(
  title:"National Treasure",
  image_url:"https://ia.media-imdb.com/images/M/MV5BMTY3NTc4OTYxMF5BMl5BanBnXkFtZTcwMjk5NzUyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  year:"2004",
  coordinates:[-75.15002489089964, 39.94891241569204],
  location_name:"Independence Hall",
  description:"Benjamin Franklin Gates (Nicholas Cage) descends from a family of treasure-seekers who've all hunted for the same thing: a war chest hidden by the Founding Fathers after the Revolutionary War. Ben's close to discovering its whereabouts, as is his competition, but the FBI is also hip to the hunt. Since the film revolves around The Declaration of Independence, many scenes were filmed around Philadelphia at historical landmarks, like a pivotal scene at Independence Hall.",
  imdb_link: "http://www.imdb.com/title/tt0368891/"
)

m9 = Movie.create(
  title:"Invincible",
  image_url:"https://ia.media-imdb.com/images/M/MV5BMjA1NjI2ODA5MF5BMl5BanBnXkFtZTcwNjMyMTMzMQ@@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
  year:"2006",
  coordinates:[-75.18990397453308, 39.950008376315864],
  location_name:"Franklin Field",
  description:"Based on a true story, this film centers around Vince Papale (Mark Wahlberg) who has hit dead end after dead end. He loses his job, his wife leaves him, and the only thing he has left is his love of football. After new Eagles coach Dick Vermeil holds open tryouts, Papale tries to defeat the odds and make the team, despite having the odds stacked against him. Franklin Field, the home field of UPenn football, served as a major scene, depicting the open Eagles tryouts.",
  imdb_link: "http://www.imdb.com/title/tt0445990/?ref_=nv_sr_1"
)

m10 = Movie.create(
  title:"Dead Man Down",
  image_url:"https://ia.media-imdb.com/images/M/MV5BMTM2NTU5NTIzMF5BMl5BanBnXkFtZTcwNjQ3MTM5OA@@._V1_SY1000_SX675_AL_.jpg",
  year:"2013",
  coordinates:[-75.16830146312714, 39.94992612847324],
  location_name:"16th, 17th and Walnut streets",
  description:"Victor (Colin Ferrell) is on a warpath to avenge his family after their deaths at the hands of ruthless crime boss Alphonse (Terrence Howard). In his travels, he meets Beatrice (Noomi Rapace), who has a plan for revenge of her own. After Beatrice is kidnapped by Alphonse, it's a race against time for Victor to save his new comrade. Mostly shot in New York, some outdoor scenes were filmed in Philadelphia, including Center City and the SS United States, a decaying cruise ship from days long forgotten.",
  imdb_link:"http://www.imdb.com/title/tt2101341/?ref_=nv_sr_4"
)

m11 = Movie.create(
  title:"The Lovely Bones",
  image_url:"https://ia.media-imdb.com/images/M/MV5BMjAwNDA1MTM2MF5BMl5BanBnXkFtZTcwMzg3NDcwMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  year:"2009",
  coordinates:[-75.49497842788695, 40.03421933185762],
  location_name:"Bryan and Queens Avenues, Paoli, Pennsylvania",
  description:"Susie Salmon (Saoirse Ronan) is murdered by her neighbor. Her story is told, from purgatory, and communicates with her family to help them find her killer and her lost remains while still protecting the ones she loves. To get the feel of a real suburban environment, the film was shot in many Philadelphia suburbs. Locations include Paoli, Norristown, and Malvern just to name a few.",
  imdb_link:"http://www.imdb.com/title/tt0380510/?ref_=nv_sr_1"
)

m12 = Movie.create(
  title:"Limitless",
  image_url:"https://ia.media-imdb.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,692,1000_AL_.jpg",
  year:"2011",
  coordinates:[-75.16544759273529, 39.95090075905096],
  location_name:"15th and Chestnut; Del Frisco's Steakhouse",
  description:"Eddie Morra (Bradley Cooper) has lost purpose in life. It's not until he is introduced to a new wonder drug, a new pharmaceutical that allows the person to use 100% of their brain capacity. With this godlike ability now entwined in his DNA, Eddie preforms even the toughest acts with extreme ease. But, with new powers comes new consequences. Battling hitmen, severe side effects, and a dwindling supply, Eddie must use his new found ability to survive. Bradley Cooper, a Philadelphia Area native, was at home filming in the area. Del Frisco's, a world renowned steak house, served as the background of one of Cooper's first experiences with the drug.",
  imdb_link:"http://www.imdb.com/title/tt1219289/?ref_=nv_sr_2"
)

m13 = Movie.create(
  title:"Mannequin",
  image_url:"https://ia.media-imdb.com/images/M/MV5BMTM0ODkyMTIzM15BMl5BanBnXkFtZTcwOTYzNzA2NA@@._V1_.jpg",
  year:"1987",
  coordinates:[-75.17332792282104, 39.94905635148477],
  location_name:"The Dorcester",
  description:"A mannequin comes to life and falls in love with a young artist. There love is complicated, for obvious reasons, but shines through in this heart warming romantic comedy. As rediculous as the plot sounds, the director didn't initially want to release it fearing backlash at the absurdity of the story. It ended up faring well in box office numbers. All principle filming was done in Philadelphia, some locations include The Dorcester apartments and Rittenhouse Square",
  imdb_link:"http://www.imdb.com/title/tt0093493/?ref_=fn_al_tt_1"
)

m14 = Movie.create(
  title:"The Blob",
  image_url:"https://ia.media-imdb.com/images/M/MV5BYjI2Yjg1ZDctYmMzNy00MWIyLWI5NmEtNzY5YzM5OWQ4OTQwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,693,1000_AL_.jpg",
  year:"1958",
  coordinates:[-75.51748752593994, 40.134001386055566],
  location_name:"Phoenixville Colonial Theater",
  description:"A killer alien mass of jelly like proportions wreaks havoc on Earth, all the while gaining strength as it consumes. Principal shooting was all around south-eastern Pennsylvania, and the notorious cinema scene was shot in Phoenixville. Lead actor Steve McQueen was offered either 10% of total profits or $2,500 cash for his part in the film, and ultimately took the $2,500. The film ended up making $4 million.",
  imdb_link:"https://www.imdb.com/title/tt0051418/?ref_=ttloc_loc_tt"
)

m15 = Movie.create(
  title:"Twelve Monkeys",
  image_url:"https://ia.media-imdb.com/images/M/MV5BN2Y2OWU4MWMtNmIyMy00YzMyLWI0Y2ItMTcyZDc3MTdmZDU4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
  year:"1995",
  coordinates:[-75.17269492149353, 39.96806760707255],
  location_name:"Eastern State Penitentiary" ,
  description:"A man from the future (Bruce Willis) is sent back in time to discover and save humanity from a deadly plague that wiped out humanity in 1996. Director Terry Gilliam chose Philadelphia, among other cities, for it's dystopian feel while filming the futuristic scenes. Eastern State Penitentiary was a location for just a few of these scenes, used to create the unsettling atmosphere of the notorious prison.",
  imdb_link:"https://www.imdb.com/title/tt0114746/?ref_=ttloc_loc_tt"
)

m16 = Movie.create(
  title:"Goodfellas",
  image_url:"https://ia.media-imdb.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,669,1000_AL_.jpg",
  year:"1990",
  coordinates:[-73.98174047470093, 40.842588336007445],
  location_name:"1080 Inwood Terrace, Fort Lee, New Jersey",
  description:"The story of Henry Hill (Ray Liotta) and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway (Robert De Niro) and Tommy DeVito (Joe Pesci) in the Italian-American crime syndicate. This location was used exclusively for scenes after Henry was released from prison, which included interior shots of their bedroom and bathroom.",
  imdb_link:"https://www.imdb.com/title/tt0099685/?ref_=ttloc_loc_tt"
)
