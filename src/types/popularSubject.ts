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