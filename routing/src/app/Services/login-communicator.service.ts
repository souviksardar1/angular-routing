import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginStatusService{
    status = new EventEmitter<boolean>();
}