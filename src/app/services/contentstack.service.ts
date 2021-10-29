import { Injectable } from '@angular/core';
import * as Contentstack from 'contentstack';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentstackService {

  Stack:any = Contentstack.Stack(environment.csApiKey, environment.csDeliveryToken, environment.csEnvironment);

  constructor() { }

  // public stack() {
  //   return this.Stack;
  // }
}
