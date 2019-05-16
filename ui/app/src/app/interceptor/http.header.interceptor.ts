import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HeaderInterceptorService implements HttpInterceptor {

  private applyDefaultHeaders(req: HttpRequest<any>) {
    const headers = req.headers.set('Content-Type', 'application/json');
    return req.clone({ headers: headers });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.applyDefaultHeaders(req));
  }
}
