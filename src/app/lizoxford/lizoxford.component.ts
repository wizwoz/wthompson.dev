import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
const mapbox = require('mapbox-gl');

type MarkerColor = "red" | "orange" | "yellow" | "blue" | "marker";

type DataMarker = {
  color: MarkerColor,
  lang: number,
  lat: number,
  title: string,
  www: string
}

const data: Array<DataMarker> = [
  {
    title: 'Home',
    lang: -1.22401,
    lat: 51.7274535,
    color: 'marker',
    www: 'loyal.newest.flying'
  },
  {
    title: 'Ashmolean Museum',
    lang: -1.2600725,
    lat: 51.755428,
    color: 'red',
    www: 'dangerously.invest.magic'
  },
  {
    title: 'Eastgate',
    lang: -1.2613201, 
    lat: 51.7498444,
    color: 'yellow',
    www: 'fried.bikes.stuff'
  },  
  {
    title: 'Radcliffe Camera',
    lang: -1.2540476, 
    lat: 51.7534307,
    color: 'blue',
    www: 'hulk.task.basis'
  },  
  {
    title: 'Christ Church Meadows',
    lang: -1.256607, 
    lat: 51.749075,
    color: 'orange',
    www: 'ages.baked.client'
  },  
  {
    title: 'Pitts River Museum',
    lang: -1.255959, 
    lat: 51.7585787,
    color: 'orange',
    www: 'pans.minds.venue'
  },  
  {
    title: 'University Parks',
    lang: -1.257785,
    lat:  51.759907,
    color: 'orange',
    www: 'thank.export.being'
  },
]

@Component({
  selector: 'app-lizoxford',
  templateUrl: './lizoxford.component.html',
  styleUrls: ['./lizoxford.component.sass']
})
export class LizoxfordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    mapbox.accessToken = 'pk.eyJ1Ijoid2lsbHRob21wcyIsImEiOiJja3F3dTlpYzUwY3JkMnRwbG13d3J4b2hzIn0.CM96imF4hlroIsDfJyL0Ug'
    const map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-1.25371, 51.75045], // starting position [lng, lat]
      zoom: 14 // starting zoom
    })

    var nav = new mapbox.NavigationControl();
    map.addControl(nav, 'top-left');

    data.forEach((d: DataMarker, index: number) => {
      let popup = new mapbox.Popup({ offset: 25 }).setHTML("<div><h4>" + d.title + "</h4><a target='_blank' href='https://www.google.com/maps/dir/?api=1&destination=" + d.lat + "," + d.lang + "'>///" + d.www + "</a></div>");

      new mapbox.Marker(this.makeMarker(d, index.toString())).setLngLat([d.lang, d.lat]).setPopup(popup).addTo(map); 
    })
  }

  makeMarker(data: DataMarker, index: string): HTMLElement {
    let div = document.createElement('div');
    div.className = 'marker'
    let marker = document.createElement('img');
    marker.src = 'assets/markers/' + data.color + '.svg'
    marker.className = 'icon';
    div.appendChild(marker);
    let text = document.createElement('div');
    text.className = 'text'
    text.innerHTML = index === "0" ? "🏠" : index;
    div.appendChild(text);
    return div;
  }

}
