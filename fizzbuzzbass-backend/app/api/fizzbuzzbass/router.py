from fastapi import APIRouter

from app.api.fizzbuzzbass.models import GameForm, GameResult

router = APIRouter()


@router.post(
    "/",
    description="Endpoint for submitting a value for fizz buzz bass game",
    response_model=GameResult,
)
def submit_game_value(form: GameForm) -> GameResult:
    game_value = form.game_value
    result = game_value
    if game_value % 3 == 0 and game_value % 5 == 0:
        result = "Bass"
    elif game_value % 3 == 0:
        result = "Fizz"
    elif game_value % 5 == 0:
        result = "Buzz"
    return GameResult(result=result)
