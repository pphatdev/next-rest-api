import { defaultSearchParams } from '@/lib/default';
import { PaginationParams } from '@/lib/client-types';
import axios from 'axios';

export const getUsers = async (
    params: PaginationParams = defaultSearchParams
) => {
    try {
        const response = await axios.get(`/api/v1/users`, {
            params: params,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
