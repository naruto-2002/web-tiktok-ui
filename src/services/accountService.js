import { httpRequest } from '~/utils';

export const getSuggestedAccount = async ({ pre_page }) => {
    try {
        const response = await httpRequest.get('users/suggested', {
            params: {
                pre_page,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
