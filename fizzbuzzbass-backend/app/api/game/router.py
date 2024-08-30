from fastapi import APIRouter

from app.api.game.models import GameForm, GameResult

router = APIRouter(prefix="/game", tags=["game"])


@router.post(
    "/turn",
    description="Endpoint for submitting a value for fizz buzz bass game",
    response_model=GameResult,
    responses={
        200: {"description": "Result successfully returned"},
        422: {"description": "Invalid request body"},
        500: {"description": "Internal error"},
    },
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
