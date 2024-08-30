import axios, { AxiosResponse } from "axios";

interface GameValueForm {
  gameValue: number;
}

interface GameValueResponse {
  result: number | string;
}

export const submitGameValue = (
  form: GameValueForm,
): Promise<AxiosResponse<GameValueResponse>> => {
  return axios.post("http://localhost:8000/game", form);
};
