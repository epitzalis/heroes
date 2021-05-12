import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UtilService {

  constructor(
    private readonly snackBar: MatSnackBar
  ) { }

  public toastSucess(successMsg: string): void {
    this.snackBar.open(successMsg, '', {
      duration: 2 * 1000
    });
  }

  public generateId(): string {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
  }

}
