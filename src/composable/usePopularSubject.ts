import { ref } from "vue";
import { useAxios } from "./useAxios";

import { POPULAR_SUBJECT } from "../utils/endpoints";
import type { ISubject } from "../types/popularSubject";

export function usePopularSubject() {
    const { get } = useAxios();

    const loading = ref<boolean | string>(false);
    const errors = ref<any>({});
    const data = ref<ISubject[]>([]);


    const params = ref<{ page: number; per_page: number; total?: number; last_page?: number }>({
        page: 1,
        per_page: 10
    });

    const fetchData = (paramsObj: any = { ...params.value }) => {
        loading.value = true;
        let url = `${POPULAR_SUBJECT}?${new URLSearchParams(paramsObj).toString()}`;

        get(url)
            .then((res) => {
                data.value = res.rows?.data;
                params.value.page = res.rows?.current_page;
                params.value.per_page = res.rows?.per_page;
                params.value.total = res.rows?.total;
                params.value.last_page = res.rows?.last_page;
            })
            .finally(() => {
                loading.value = false;
            });
    };

    const clear = () => {
        loading.value = false;
        errors.value = {};
    };

    return {
        loading,
        errors,
        params,
        data,
        fetchData,
        clear,
    };
}
