import pytest

from typing import Generator
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture()
def client() -> Generator:
    with TestClient(app) as c:
        yield c
