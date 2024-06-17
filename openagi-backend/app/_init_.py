# __init__.py

from fastapi import FastAPI

# Create a FastAPI instance
app = FastAPI()

# Import routers
from .routers import components, workflows

# Include routers
app.include_router(components.router)
app.include_router(workflows.router)
