from fastapi import APIRouter

from app.api.game.models import GameForm, GameResult, GameResults

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
    """
    Calculates the result of the game based on the incoming values
    :param form: game form
    :return: game result
    """
    game_value = form.game_value
    result = str(game_value)
    if game_value % 3 == 0 and game_value % 5 == 0:
        result = GameResults.BASS
    elif game_value % 3 == 0:
        result = GameResults.FIZZ
    elif game_value % 5 == 0:
        result = GameResults.BUZZ
    return GameResult(result=result)
