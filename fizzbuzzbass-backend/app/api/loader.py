from fastapi import APIRouter

from app.api.fizzbuzzbass.router import router

api_router = APIRouter()
api_router.include_router(router, tags=["main"])
