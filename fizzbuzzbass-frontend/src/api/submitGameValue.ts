import axios, { AxiosResponse } from "axios";

export interface GameValueForm {
  gameValue: number;
}

export interface GameValueResponse {
  result: number | string;
}

export const submitGameValue = (
  form: GameValueForm,
): Promise<AxiosResponse<GameValueResponse>> => {
  return axios.post("http://localhost:8000/api/game/turn", form);
};
