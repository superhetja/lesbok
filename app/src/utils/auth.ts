import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { Platform } from "react-native";


const auth0ClientId = '0YQY6sv8vjMBWWXbXNhMaALDOvmTvPoM';
const authorizationEndpoint = 'https://dev-d0p3lcib.us.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

console.log(redirectUri);

export function Authorize() {
	return {
		proxy: useProxy,
		auth: AuthSession.useAuthRequest(
		{
			redirectUri,
			clientId: auth0ClientId,
			responseType: 'id_token',
			scopes: ['openid', 'profile', 'email'],
			extraParams: {
				nonce: 'nonce',
			},
		},
		{ authorizationEndpoint }
	)
	}
}
