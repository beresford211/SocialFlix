if(process.env.DEPLOYED) {
	module.exports = {
	 'facebookAuth' : {
	   'clientID'      : process.env.CLIENTID, // your App ID
	   'clientSecret'  : process.env.CLIENTSECRET, // your App Secret
	   'callbackURL'   : 'https://socialflixplayer.herokuapp.com/auth/facebook/callback'
	 }
	};
} else {
	module.exports = {
	  'facebookAuth' : {
	    'clientID'      : process.env.CLIENTID, // your App ID
	    'clientSecret'  : process.env.CLIENTSECRET, // your App Secret
	    'callbackURL'   : 'http://localhost:4000/auth/facebook/callback'
	  }
	};
}




