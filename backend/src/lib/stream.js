import { StreamChat } from 'stream-chat';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error('Stream API key and secret must be provided in environment variables.');
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log('Stream user upserted successfully:', userData);
  } catch (error) {
    console.error('Error upserting Stream user:', error);
  }
}

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted:", userId);
  } catch (error) {
    // Stream returns 404 if user does not exist — this is OK
    if (error.status === 404 || error.code === 16) {
      console.log("Stream user not found, skipping delete:", userId);
      return;
    }

    // Real error → log it
    console.error("Unexpected Stream delete error:", error);
    throw error;
  }
};