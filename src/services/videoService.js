import { httpRequest } from '~/utils';

export const getVideo = async (page, type = 'for-you') => {
    try {
        const response = await httpRequest.get('videos', {
            params: {
                page,
                type,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
