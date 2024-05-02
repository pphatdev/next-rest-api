import { PaginationParams } from '@/lib/types';
import axios from 'axios';

const DefParams = {
    page: 1,
    limit: 10,
    search: "",
    sort: "asc",
}

export const getUsers = async (
    params: PaginationParams = DefParams
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
