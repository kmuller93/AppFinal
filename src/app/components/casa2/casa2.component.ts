import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import {Geolocation} from '@capacitor/geolocation';
@Component({
  selector: 'app-casa2',
  templateUrl: './casa2.component.html',
  styleUrls: ['./casa2.component.scss'],
})
export class Casa2Component  implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new mapboxgl.Map({
      container: 'map-koko', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-70.6482700,-33.4569400], // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

      map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions:{
        enableHighAccuracy:true
        },
        trackUserLocation:true,
        showUserHeading:true
        })
      );
  }

  async getCurrentLocation(){
    try {
      const permissionStatus = await Geolocation.checkPermissions();
      console.log('Estado del permiso: ', permissionStatus.location);
      if (permissionStatus?.location != 'granted'){
        const requestStatus = await Geolocation.requestPermissions();
        if(requestStatus.location != 'granted'){
          return;
        }
      }
      let options: PositionOptions = {
        maximumAge: 3000,
        timeout: 10000,
        enableHighAccuracy: true
      };
      const position = await Geolocation.getCurrentPosition(options)
      console.log(position)
    }catch(e){
      console.log(e);
    }
  }

  
}
