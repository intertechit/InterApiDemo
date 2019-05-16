import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ServiceExceptionMessage } from '../models/serviceExceptionMessage';
import { ErrorService } from '../services/error.service';
import { Injectable } from '@angular/core';
import { InterApiResponse } from '../models/interApiResponse';

@Injectable()
export class ResponseInterceptorService implements HttpInterceptor {

  constructor(private errorService: ErrorService) {
  }

  private handleError(err: any, caught: Observable<any>) {

    const exceptionMessage: ServiceExceptionMessage = {
      code: -1,
      description: 'hata',
      transactionId: 0
    };

    if (err instanceof HttpErrorResponse) {
      exceptionMessage.description = err.message;
      exceptionMessage.code = err.status;
    }

    this.errorService.presentAlert('Hata', '', exceptionMessage.description);
    return throwError(exceptionMessage);
  }

  private handleSuccess(evt: HttpEvent<any>) {

    if (evt instanceof HttpResponse) {
      const responseData: InterApiResponse<any> = evt.body;
      if (responseData && responseData.isSuccess && evt.body) {
        return evt.clone<any>({ body: responseData.data });
      }

      if (responseData && responseData.error) {
        const code = responseData.error.code || -1;
        const description = responseData.error.description || 'Bilinmeyen Hata';
        const transactionId = responseData.error.transactionId || 0;
        const errorText = `${description} <br>transactionId: ${transactionId}`;
        this.errorService.presentAlert('Hata', 'Hata Kodu: ' + code, errorText);
        throw new HttpErrorResponse({
          error: errorText,
          headers: evt.headers,
          status: 500,
          statusText: 'Warning',
          url: evt.url
        });
      }
    }
    return evt;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const that = this;


    return next.handle(req).pipe(
      catchError((err, caught) => this.handleError(err, caught)),
      map(val => this.handleSuccess(val)));
  }
}
