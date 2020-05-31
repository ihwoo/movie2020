/*global kakao*/
import React from 'react';
import './About.css';

class About extends React.Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=e8847edd20be9265c187564da07be13f&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(() => {
                let el = document.getElementById('map');
                let map = new kakao.maps.Map(el, {
                    center: new kakao.maps.Coords(523951.25, 1085073.75)
                });
           
            });
          };
      }
    render(){
        return (
            <div className="Map" id="map" />    
        )
    }
}
export default About;