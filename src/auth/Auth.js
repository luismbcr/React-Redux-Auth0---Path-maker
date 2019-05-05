import auth0 from "auth0-js";

export default class Auth {
  constructor() {
    this.userProfile = null;
    this.requestedScopes ="openid profile email read:paths";
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK,
      audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      responseType: "token id_token",
      scope: this.requestedScopes
    });
  }
  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = history => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.push("/dashboard");
      } else if (err) {
        history.push("/");
        alert(`Error: ${err.error}. Check the console`);
      }
    });
  };
  setSession = authResult => {
    //swet the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    const scopes = authResult.scope || this.requestedScopes || '';
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    localStorage.setItem("scopes", JSON.stringify(scopes));
  };
  isAutheticated = () => {
    if (localStorage["expires_at"] == null) {
      return false;
    } else {
      const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
      return new Date().getTime() < expiresAt;
    }
  };
  logout = history => {
    this.userProfile= null;
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("scopes");
    this.auth0.logout({
        clientID: process.env.REACT_APP_AUTH0_CLIENTID,
        returnTo: process.env.REACT_APP_MAIN_APP
    });
  };
  getAccessToken = () =>{
   const accessToken = localStorage.getItem("access_token");
   if(!accessToken){
       throw new Error("No access token found.");
   }else{
       return accessToken;
   }
  }

  getIdToken = () =>{
    const idToken = localStorage.getItem("id_token");
    if(idToken){
        return idToken;
    }
   }

  getProfile = cb => {
      if(this.userProfile) return cb(this.userProfile);
      this.auth0.client.userInfo(this.getAccessToken(), (err,profile)=>{
        if(profile) this.userProfile = profile;
        cb(profile,err);
      });
  }
}
