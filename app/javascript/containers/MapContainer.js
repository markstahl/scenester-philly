import React from 'react';
import PhotoContainer from './PhotoContainer';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZXJlc2hraWdlbCIsImEiOiJjamZiM245enYwdWl2MzJvZjcxNWR3ZTZ1In0.QHadc3OiBipEZ27M3ftmGA"
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: null,
      photos: [
        {
          image_url: 'https://www.goldenglobes.com/sites/default/files/articles/cover_images/1977-rocky.jpg',
          description:'Adrian!!!!!!!!',
          coordinates: [-75.1812806725502,
          39.96576523820587],
            visible: true
          },
          {
            image_url: 'http://www.rosariocine.com.ar/info/2465d.jpg',
            description:"No Ma'am we're not!",
            coordinates: [-75.17079055309296,
          39.950078286904365],
              visible: true
            }
          ]
        }
      }
      // cDM(){
      //   fetch them photos
      // }
      //
      // handleMarkerClick(e){
      //   e.target.value
      //   this.state.photos.each{
      //     if (photo.id == e.target.id){
      //       photo.visibility = true
      //     } else {
      //       photo.visibility = false
      //     }
      //   }
      // }

      render() {
        let markers = this.state.photos.map(photo => {
          return(
            <Feature
              coordinates={photo.coordinates} />
            )
          })
          let popups = this.state.photos.map(photo => {
            if (photo.visible == true){
              return(
                <Popup
                  coordinates={photo.coordinates}
                  anchor="top">
                  <img src={photo.image_url} width='90px' height= '130px'></img>
                </Popup>
              )
            }
          })

          return(
              <div>
                <Map
                  center={[-75.16416549682616,
                    39.95054298488249]}
                    zoom={[10]}
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                      height: "500px",
                      width: "800px"
                    }}>
                    {popups}
                    <Layer
                      type="symbol"
                      id="marker"
                      layout={{ "icon-image": "cinema-15" }}>
                      {markers}
                    </Layer>
                  </Map>
                </div>
            )
          }
        }
        export default MapContainer;
