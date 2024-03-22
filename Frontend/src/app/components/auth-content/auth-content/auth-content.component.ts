import { Component, OnInit } from '@angular/core';
import { AxiosService } from "../../../services/axios.service";

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrls: ['./auth-content.component.scss']
})
export class AuthContentComponent implements OnInit {
  data: string[] = [];

  // service injection belongs into the constructor
  constructor(private axiosService: AxiosService) { }

  ngOnInit(): void {
    // full url not necessary because base url already is in service
    this.axiosService.request(
      "GET",
      "/messages",
      {}
    ).then(
      (response) => this.data = response
    );
  }

}
