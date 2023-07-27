export class AuthService{
    loggedIn = false;

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }

    isAutheticated() : Promise<any>{
        const prms = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 2000);
            }

        )
        return prms;
    }
}