import pytest
from typing import Union

from fastapi.testclient import TestClient

from app.api.game.models import GameForm, GameResult


class TestSubmitGameValue:
    @pytest.mark.parametrize(
        ["game_value", "expected_result"],
        [
            (0, "Bass"),
            (1, "1"),
            (3, "Fizz"),
            (4, "4"),
            (5, "Buzz"),
            (10, "Buzz"),
            (11, "11"),
            (15, "Bass"),
            (18, "Fizz"),
            (20, "Buzz"),
            (22, "22"),
            (30, "Bass"),
        ],
    )
    def test_submit_game_value__ok(
        self, client: TestClient, game_value: int, expected_result: Union[str, int]
    ) -> None:
        response = client.post(
            "/api/game/turn", json=GameForm(game_value=game_value).model_dump(by_alias=True)
        )
        assert response.status_code == 200
        content = GameResult.model_validate(response.json())
        assert content.result == expected_result

    @pytest.mark.parametrize(
        "game_value",
        [-1, "test_value", 2.8, None],
    )
    def test_submit_game_value__invalid_game_val(
        self, client: TestClient, game_value
    ) -> None:
        response = client.post("/api/game/turn", json={"gameValue": game_value})
        assert response.status_code == 422

    def test_submit_game_value__no_req_body(self, client: TestClient) -> None:
        response = client.post("/api/game/turn", json=None)
        assert response.status_code == 422
