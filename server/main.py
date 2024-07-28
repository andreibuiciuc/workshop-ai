from fastapi import FastAPI, Query
from transformers import pipeline
from starlette.middleware.cors import CORSMiddleware

# Make sure you have all dependencies installed.
# Run `pip install uvicorn fastapi transformers starlette` to check if the required dependencies are installed

# Create Fast API application
#
# Please run `uvicorn main:app --reload` in the current directory to start the server
app = FastAPI()

# Add CORS middleware to the app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins (use specific origins in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/classifier/multi/")
def get_review_sentiment_label(text: str = Query(..., description='Text for running multi-class inference on')):
  raise NotImplementedError('Method not implented.')


@app.get("/classifier/binary/")
def get_review_binary_sentiment_label(text: str = Query(..., description='Text for running single-class inference on')):
  raise NotImplementedError('Method not implemented.')
