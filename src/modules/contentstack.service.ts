import { Injectable } from '@angular/core';
import * as contentstack from 'contentstack';
import { Config } from './config';


@Injectable()
export class ContentstackService {
  Stack: any = {};
  stackConfig: any = {};

  configTest:any = {
    'api_key': 'blt2714eb6981e968e1',
    'access_token': 'cs1503b466ce384bc0868de60b',
    'environment': 'development'
  };

  constructor(private config: Config) {
    // this.stackConfig = config;
    // this.Stack = contentstack.Stack(config);


    this.stackConfig = config;
    this.Stack = contentstack.Stack(this.configTest);
  }

  public stack() {
    return contentstack.Stack(this.configTest);
  }
}
