import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, ErrorHandler } from "@angular/core";
import {Location} from "@angular/common";



import {Router} from "@angular/router";
import { environment } from '../../environments/environment';
import { SaveAlertGuard } from '../product/guards/save-alert.guard';

// goes into providers section of app.module.ts
/*


        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService
        },

*/


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

    constructor(private location: Location,
                private http: HttpClient ) {

    }

    public handleError( error: any ) : void {
        // Log to the console.
        try {

            console.log("Custom error handler");
            console.group( "ErrorHandler" );
            console.error( error.message );
            console.error( error.stack );
            console.groupEnd();

            this.http.post(`${environment.apiEndPoint}/logs/errors`,
            {
              error : error
            })
            .subscribe((saveError) => {
              console.log('error saved successfully',saveError)
            },(err:any) => {
              console.log('error while posting ',err)
            });

        } catch ( handlingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to output error." );
            console.error( handlingError );
            console.groupEnd();
        }
    }
}
