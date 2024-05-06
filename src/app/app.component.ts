import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Passw0rd!';
  password: string = '';
  passwordLength: number = 100;

  generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+{}|:<>?-=[];,./';
    let password = '';
    if (this.passwordLength < 10) {
      this.passwordLength = 10;
      for (let i = 0; i < this.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
    } else {
      for (let i = 0; i < this.passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
    }
    this.password = password;
  }

  copyPassword() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.password).then(() => {
        this.showNotification("Password copied to clipboard!");
      }).catch(err => {
        console.error('Failed to copy password: ', err);
        this.showNotification("Failed to copy password!");
      });
    } else {
      console.error('Clipboard API not supported');
      this.showNotification("Clipboard API not supported!");
    }
  }

  showNotification(message: string) {
    alert(message)
  }

  ngOnInit() {
    setInterval(() => {
      if (this.passwordLength < 10) {
        this.passwordLength = 10;
      }
      
      if (this.passwordLength > 100) {
        this.passwordLength = 100;
      }
    }, -1);
  }
}
