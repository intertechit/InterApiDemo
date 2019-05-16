import { Injectable } from '@angular/core';
import { LogginLevel } from '../models/logLevels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private logginLevel = environment.loggingLevel;
  constructor() { }

  private shouldLog(level: LogginLevel) {
    if (this.logginLevel === LogginLevel.None) {
      return false;
    }

    if (this.logginLevel === LogginLevel.All) {
      return true;
    }

    return level >= this.logginLevel;
  }
  private Log(level: LogginLevel, message: string, ...optionalArgs: any[]) {
    if (this.shouldLog(level)) {
      const logFunc = level === LogginLevel.Error ? console.error : console.log;
      logFunc(message, optionalArgs);
    }
  }

  error(message: string, ...optionalArgs: any[]) {
    this.Log(LogginLevel.Error, message, optionalArgs);
  }

  info(message: string, ...optionalArgs: any[]) {
    this.Log(LogginLevel.Info, message, optionalArgs);
  }
}

