//-----------------------------------------
//    API INTERFACE
//-----------------------------------------

type IApiResponse<TData> = {
  code: number;
  msg: string;
  data: TData;
};

//-- DEPARTMENT TYPE
interface IDepartment {
  id: number;
  title: string;
}

//-- PERSONAL INFO
interface IPersonalInfo {
  avatar: string;
  nickname: string;
  department_id: number;
  position_level: number;
  job_number: string;
  job_title: string;
  department_text: string;
  position_level_text: string;
  lang_text: string;
  address: string;
  gender: string;
  check_in_date: string;
  phone: string;
  email: string;
  birthday: string;
  tg_id: number;
}

//--- ALL RESOURCE TYPE
export type IDepartmentResponses = IApiResponse<Array<IDepartment>>;
export type IPersonalInfoReponse = IApiResponse<IPersonalInfo>;
