from fastapi import FastAPI
import json
from collections import OrderedDict

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}

#returns the first 10 players of the easy|medium|hard leaderboard
@app.get("/ranking/{difficulty}")
async def get_leaderboard(difficulty: str):
    db = json.load(open('./temp_db.json'))

    #this may not be optimal for large number of players
    leaderboard = OrderedDict(sorted(db[difficulty].items(), key = lambda x: x[1]["score"]))

    i = 0
    top10 = {}
    for p in leaderboard:
        if i > 9: break
        top10[p] = leaderboard[p]
        i+=1

    return  top10

@app.post("/ranking/{user_id}")
async def submit_score(difficulty: str ,user_id: str, score: str):
    with open('./temp_db.json', 'r+') as f:
        db = json.load(f)
        db[difficulty][user_id] = {"score": score}
        f.seek(0)
        json.dump(db, f, indent=4)
        return {"user_id": user_id}