from fastapi import APIRouter

from app.api.fizzbuzzbass.models import GameForm

router = APIRouter()


@router.post(
    "/",
    description="Endpoint for submitting a value for fizz buzz bass game",
)
def submit_game_value(form: GameForm) -> None:
    pass
