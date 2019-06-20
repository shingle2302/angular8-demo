import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private membersUrl = 'https://api.github.com/orgs/angular/members?page=1&per_page=5';

  constructor(private http: HttpClient) {
  }

  getMembers() {
    return this.http.get<Member[]>(this.membersUrl)
      .toPromise();
  }
}
