import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

import { HeaderData } from "./header-data.model";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Home",
    icon: "home",
    routeUrl: "",
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(_data: HeaderData) {
    this._headerData.next(_data);
  }
}
