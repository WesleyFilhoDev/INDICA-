import mongoose from "mongoose";

const TokenBlacklistSchema = new mongoose.Schema({
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

export default mongoose.model("TokenBlacklist", TokenBlacklistSchema);
