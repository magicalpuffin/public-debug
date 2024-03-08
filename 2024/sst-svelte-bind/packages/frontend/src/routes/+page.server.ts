import { myApiObj, myConfigObj, getMyApi, getMyConfig } from '$lib/myLib';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		myConfigObj,
		myApiObj,
		getMyConfigResult: getMyConfig(),
		getMyApiResult: getMyApi()
	};
}) satisfies PageServerLoad;
