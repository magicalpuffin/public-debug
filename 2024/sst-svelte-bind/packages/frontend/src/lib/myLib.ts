import { Config } from 'sst/node/config';
import { Api } from 'sst/node/api';

// works
export const myConfigObj = { value: Config.MY_CONFIG };
// doesn't work
export const myApiObj = { value: Api.api.url };

// works
export function getMyConfig() {
	return Config.MY_CONFIG;
}
// works
export function getMyApi() {
	return Api.api.url;
}
