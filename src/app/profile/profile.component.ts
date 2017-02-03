import { Component, OnInit } from '@angular/core';
//manually import this service
import {GithubService} from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	private user:any[];
	private repos:any[];
	private username:any;
	//inject GithubService as a dependency
  constructor(private _githubService:GithubService) {
  	//first pass - send info to console before
  	//sending to gui later
  	/*this._githubService.getUser().subscribe(user => {
  		this.user = user
  	})
  	this._githubService.getRepos().subscribe(repos => {
  		this.repos = repos
  	})*/
  }

  searchUser () { 
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe(user => {
      this.user = user
    })
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos
    })
  } 

  ngOnInit() {
  }


}

/*OLD TEST FROM STEP 18. export class ProfileComponent implements OnInit {
	//inject GithubService as a dependency
  constructor(private _githubService:GithubService) {
  	//first pass - send info to console before
  	//sending to gui later
  	this._githubService.getUser().subscribe(user => {
  		console.log(user)
  	})
   }

  ngOnInit() {
  }

}*/
