import uvicorn

from fastapi import FastAPI

from api.loader import api_router

app = FastAPI(
    title="FizzBuzzBass backend",
    description="Home task for developing a FizzBuzzBass application",
)

app.include_router(api_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
