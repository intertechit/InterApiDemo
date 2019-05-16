import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { tap, catchError, map, flatMap, delay, filter } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';
import { of, throwError } from 'rxjs';
import { LoggingService } from '../services/logging.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoadingService, private loggingService: LoggingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    return this.increaseRequestCount().pipe(flatMap(p => {
      this.loggingService.info('Current Request Count: ' + this.totalRequests, new Date());
      return next.handle(request).pipe(
        // filter(evt => evt.type === HttpEventType.Response),
        flatMap(evt => this.decreaseRequestCount()
          .pipe(
            tap(_ => this.loggingService.info('Current Request Count: ' + this.totalRequests, new Date())),
            flatMap(x => of(evt))
          )
        ),
        catchError(err => this.clearRequestCount()
          .pipe(
            flatMap(_ => throwError(err))
          )
        )
      );
    }));
  }

  increaseRequestCount() {
    this.totalRequests += 1;
    return of(this.loadingService.showLoadingAsync())
      .pipe(
        tap(x => {
          this.totalRequests += 1;
          this.loggingService.info('gecikme başlıyor', new Date());
        }),
        delay(100),
        tap(x => this.loggingService.info('gecikme tamamlandı', new Date())),
        map(p => { this.loggingService.info('loading show'); return p; })
      );
  }

  clearRequestCount() {
    this.totalRequests = 0;
    this.loggingService.info('silme işlemi başladı', new Date());
    return of(this.loadingService.hideLoadingAsync())
      .pipe(
        delay(100),
        tap(() => {
          this.loggingService.info('silme işlemi tamamlandı', new Date());
        })
      );
  }

  decreaseRequestCount() {
    this.totalRequests -= 1;
    if (this.totalRequests === 0) {
      return of(this.loadingService.hideLoadingAsync())
        .pipe(
          tap(_ => this.loggingService.info('loading hide', new Date())),
          flatMap(p => of(this.totalRequests))
        );
    }

    return of(this.totalRequests);
  }
}
