from pydantic import Field
from typing import Union, Literal

from app.models import BaseModel


class GameForm(BaseModel):
    game_value: int = Field(..., alias="gameValue", ge=0)


class GameResult(BaseModel):
    result: Union[Literal["Fizz", "Buzz", "Bass"], int]
