from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import anthropic 
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # todo: tighten this after MVP
    allow_methods=["*"],
    allow_headers=["*"],
)

client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

class ReviewRequest(BaseModel):
    code: str
    language: str

class ReviewResponse(BaseModel):
    feedback: str
    improved_code: str

@app.post("/api/review", response_model=ReviewResponse)
async def review_code(request: ReviewRequest):
    try:
        # MOCK - todo: replace this block with the real Claude call when I have an API key
        feedback = (
            f"Mock feedback for your {request.language} code:\n"
            "1. Consider adding type hints for clarity.\n"
            "2. Add a docstring to describe what this does.\n"
            "3. Variable names could be more descriptive."
        )
        improved_code = request.code + "\n todo: improved version will appear here"
        
#         message = client.messages.create(
#             model="claude-opus-4-5",
#             max_tokens=2048,
#             messages=[
#                 {
#                     "role": "user",
#                     "content": f"""Review the following {request.language} code.

# Return your response in this exact format - nothing before or after:

# FEEDBACK:
# <your feedback here>

# IMPROVED_CODE:
# <improved code here>

# Code to review:
# {request.code}"""
#                 }
#             ]
#         )
#         # todo: for production, update structured output approach to use JSON mode
#         raw = message.content[0].text
#         parts = raw.split("IMPROVED_CODE:")
#         feedback = parts[0].replaces("FEEDBACK:", "").strip()
#         improved_code =  parts[1].strip() if len(parts) > 1 else ""

        return ReviewResponse(feedback=feedback, improved_code=improved_code)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/health")
async def health():
    return {"status": "ok"}