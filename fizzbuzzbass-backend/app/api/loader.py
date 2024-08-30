from fastapi import APIRouter

from app.api.game.router import router as game_router

PUBLIC_API_PREFIX = "/api"

api_router = APIRouter()
api_router.include_router(game_router, prefix=PUBLIC_API_PREFIX)
