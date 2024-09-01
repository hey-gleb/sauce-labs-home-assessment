from pydantic import Field
from enum import Enum
from typing import Union

from app.models import BaseModel

class GameResults(str, Enum):
    FIZZ = "Fizz"
    BUZZ = "Buzz"
    BASS = "Bass"

class GameForm(BaseModel):
    """Incoming game form model"""
    game_value: int = Field(..., alias="gameValue", ge=0)


class GameResult(BaseModel):
    """Response game result model"""
    result: Union[GameResults, str]
