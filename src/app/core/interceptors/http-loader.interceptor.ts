import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export class HttpLoaderInterceptor implements HttpInterceptor {

    constructor(
        private readonly spinnerService: NgxSpinnerService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(request).pipe(
            finalize( () => {
                this.spinnerService.hide();
            })
        );
    }
}
