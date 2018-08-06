import { Injectable } from '@angular/core';
import { saved_activities } from '../shared/activities';
import { IActivity } from '../shared/activity.model';

@Injectable()
export class ActivityService {

  constructor() { }

    getActivities(): IActivity[] {
      return saved_activities.slice(0);
    }

    getTotalActivities(all_activities: IActivity[]): number {
      return all_activities.length;
    }

    getTotalDistance(all_activities: IActivity[]): number {
      let total_distance = 0;
      for (let i = 0; i < all_activities.length; i++ ) {
        total_distance += all_activities[i].distance;
      }
      return total_distance;
    }
    
    getFirstDate(all_activities: IActivity[]): Date {
      let last_date = new Date('01/01/2001');
      for (let i: number = 0; i < all_activities.length; i++) {
        let current_date: Date = all_activities[i].date;
        if(current_date < last_date)
          last_date = current_date;
      }
      return last_date;
    }
}
