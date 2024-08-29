from fastapi import APIRouter

from app.api.fizzbuzzbass.models import GameForm

router = APIRouter()


# TODO review URLs
@router.post(
    "/",
    description="Endpoint for submitting a value for fizz buzz bass game",
)
def submit_game_value(form: GameForm) -> int:
    game_value = form.value
    if game_value // 3 == 0 and game_value // 5 == 0:
        return "Bass"
    elif game_value // 3 == 0:
        return "Fizz"
    elif game_value // 5 == 0:
        return "Buzz"
    else:
        return form.value
