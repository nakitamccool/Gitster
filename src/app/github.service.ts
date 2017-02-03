import { Injectable } from '@angular/core';

//manually import these
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private userName:string;
	private client_id:string = '245831f3d6d35d7c5815';
	private client_secret:string = '9f0aa8135fa9a0e92123edfbc2b703c661f7e41a';

  constructor(private _http:Http) { 
  	console.log('Github API service ready!');
 
  }

  getUser()
  {
  	return this._http.get('http://api.github.com/users/'
  		+ this.userName
  		+ '?client_id=' + this.client_id
  		+ '&client_secret=' + this.client_secret
  		).map(res => res.json());
  }

  getRepos()
  {
  	return this._http.get('http://api.github.com/users/'
  		+ this.userName
  		+ '/repos?client_id=' + this.client_id
  		+ '&client_secret=' + this.client_secret
  		).map(res => res.json());
  }

   	updateUser(username:string){
  		this.userName = username;
  	}


}
