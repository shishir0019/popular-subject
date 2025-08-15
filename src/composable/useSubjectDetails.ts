import { ref } from "vue";
import { useAxios } from "./useAxios";

import { SUBJECT_DETAIL, TOP_COURSES } from "../utils/endpoints";
import type { ISubjectArea, ICourse } from "../types/subject";

export function useSubjectDetail() {
    const { get } = useAxios();

    const loading = ref<boolean | string>(false);
    const errors = ref<any>({});
    const data = ref<ISubjectArea | null>(null);

    const top_courses = ref<ICourse[]>([]);

    const params = ref<{ page: number; per_page: number; total?: number; last_page?: number }>({
        page: 1,
        per_page: 10
    });

    const fetchData = (subject_id: string, paramsObj: any = { ...params.value }) => {
        loading.value = true;
        let url = `${SUBJECT_DETAIL.replace(':subject_id', subject_id)}?${new URLSearchParams(paramsObj).toString()}`;

        get<ISubjectArea>(url)
            .then((res) => {
                data.value = res!;
            })
            .finally(() => {
                loading.value = false;
            });
    };

    const getPopularCourses = (subject_area_id: string, paramsObj: any) => {
        loading.value = true;
        let url = `${TOP_COURSES.replace(':subject_area_id', subject_area_id)}?${new URLSearchParams(paramsObj).toString()}`
        get<{ rows: ICourse[] }>(url)
            .then((res) => {
                top_courses.value = res?.rows!;
            })
            .finally(() => {
                loading.value = false;
            });
    };

    return {
        loading,
        errors,
        params,
        data,
        top_courses,
        getPopularCourses,
        fetchData
    };
}
