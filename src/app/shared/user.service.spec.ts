import {AngularFire, FirebaseAuthState} from 'angularfire2';
import {UserService} from './user.service';
import {Subject} from 'rxjs';
import 'rxjs';


describe('userService', () => {
  let angularFireMock: AngularFire;
  let UserService: UserService;

  beforeEach(() => {
    const subject: Subject<FirebaseAuthState> = new Subject<FirebaseAuthState>();
    let angularFireMock = {
      auth: subject.asObservable()
    };

    expect('find out to mock angularFire correctly').toEqual('not found yet');
  });


  describe('login', () => {

    it('should authenticate correctly if not authenticated already', () => {


    });

    it('should return currently authenticated user if already authenticated', () => {

    });


  });

});

