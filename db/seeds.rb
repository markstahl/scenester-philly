# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.delete_all

m1 = Movie.create( title:"Rocky", image_url:"https://www.goldenglobes.com/sites/default/files/articles/cover_images/1977-rocky.jpg",year:"1976", coordinates:[-75.1812806725502, 39.96576523820587], location_name:"Philadelphia Art Museum")
m2 = Movie.create( title:"The Happening", image_url:"http://www.rosariocine.com.ar/info/2465d.jpg", year:"2008", coordinates:[-75.17079055309296, 39.950078286904365], location_name:"Rittenhouse Square")
m3 = Movie.create( title:"The Italian Job", image_url:"https://images-na.ssl-images-amazon.com/images/I/91BI%2BAGPCmL._SL1500_.jpg", year:"2003", coordinates:[-75.14786303043365, 39.944016362164], location_name:"Delancey Street")
m4 = Movie.create( title:"Philadelphia", image_url:"http://www.impawards.com/1993/posters/philadelphia_xlg.jpg", year:"1993", coordinates:[-75.14786303043365, 39.944016362164], location_name:"University of Pennsylvania library")
m5 = Movie.create( title:"Trading Places", image_url:"https://ia.media-imdb.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX675_AL_.jpg", year:"1983", coordinates:[-75.16392678022385, 39.949739014262825], location_name:"Wells Fargo Building")
m6 = Movie.create( title:"The Wrestler", image_url:"https://jmichaelrios.files.wordpress.com/2013/05/thewrestler.jpg", year:"2008", coordinates:[-75.14726758003235, 39.918403532944865], location_name:"2300 Arena")
