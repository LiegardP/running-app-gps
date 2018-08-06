import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService,
              private route: ActivatedRoute) { }


  activity: any;
  activity_name: string;
  activity_comments: string;
  activity_date: Date;
  activity_distance: number;
  gpx: any;

  ngOnInit() {
    this.activity = this.mapService.getActivity(+this.route.snapshot.params['id'])
  }

  ngAfterViewInit() {
    this.mapService.plotActivity(+this.route.snapshot.params['id']);
    this.activity_name = this.activity.name;
    this.activity_comments = this.activity.comments;
    this.activity_distance = this.activity.distance;
    this.activity_date = this.activity.date;
    this.gpx = this.activity.gpxData;
  }
}
