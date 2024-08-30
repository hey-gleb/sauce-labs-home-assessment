from pydantic import Field
from enum import Enum
from typing import Union, Literal

from app.models import BaseModel

class GameResults(str, Enum):
    FIZZ = "Fizz"
    BUZZ = "Buzz"
    BASS = "Bass"

class GameForm(BaseModel):
    game_value: int = Field(..., alias="gameValue", ge=0)


class GameResult(BaseModel):
    result: Union[GameResults, str]
