from fastapi import APIRouter

from app.api.fizzbuzzbass.router import router as game_router

api_router = APIRouter()
api_router.include_router(game_router)
