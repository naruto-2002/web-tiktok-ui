import { httpRequest } from '~/utils';

export const getSuggestedAccount = async (per_page) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                per_page,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
