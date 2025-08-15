export interface ISubject {
  id: number
  subject_area: string
  department_id: number
  future_career_id: number | null
  photo: string | null
  status: number
  is_popular: number
  overview: string | null
  why_this: string | null
  requirement: string | null
  tuition_fee: string | null
  created_at: string
  updated_at: string
}

interface ISubjectAreaDepartment {
  id: number;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ISubjectArea {
  id: number;
  subject_area: string;
  department_id: number;
  future_career_id: number | null;
  photo: string | null;
  status: number;
  is_popular: number;
  overview: string | null;
  why_this: string | null;
  requirement: string | null;
  tuition_fee: string | null;
  created_at: string;
  updated_at: string;
  subject_area_department: ISubjectAreaDepartment;
}

interface ICity {
  id: number;
  name: string;
  status: number;
  preferred_country_id: number;
  created_at: string;
  updated_at: string;
}

export interface IUniversity {
  id: number;
  name: string;
  logo: string;
  cover_photo: string;
  world_ranking: string;
  is_partner: number;
  is_popular: number | null;
  priority: number | null;
  country_ranking: string;
  city_id: number;
  cities: ICity;
}

interface IUniversitySummary {
  id: number;
  name: string;
  logo: string;
  world_ranking: string | null;
}

export interface ICourse {
  id: number;
  name: string;
  status: number;
  is_popular: number;
  university_id: number;
  subject_area_id: number;
  university: IUniversitySummary;
}

interface IPaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface IPaginatedUniversityResponse<T> {
  rows: {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: IPaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }
  [key: string]: any
}