import { ref } from "vue";
import { useAxios } from "./useAxios";

import { TOP_UNIVERSITIES } from "../utils/endpoints";
import type { IPaginatedUniversityResponse, IUniversity } from "../types/subject";

export function useUniversities() {
    const { get } = useAxios();

    const loading = ref<boolean | string>(true);
    const errors = ref<any>({});
    const data = ref<IUniversity[]>([]);


    const params = ref<{ page: number; per_page: number; total?: number; last_page?: number }>({
        page: 1,
        per_page: 10
    });

    const fetchData = (subject_area_id: string, paramsObj: any = { ...params.value }) => {
        loading.value = true;
        let url = `${TOP_UNIVERSITIES.replace(':subject_area_id', subject_area_id)}?${new URLSearchParams(paramsObj).toString()}`

        get<IPaginatedUniversityResponse<IUniversity>>(url)
            .then((res) => {
                data.value.push(...(res?.rows?.data || []));
                params.value.page = res?.rows?.current_page!;
                params.value.per_page = res?.rows?.per_page!;
                params.value.total = res?.rows?.total;
                params.value.last_page = res?.rows?.last_page!;
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
