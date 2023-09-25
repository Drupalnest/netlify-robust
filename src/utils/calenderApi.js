// src/utils/calendarApi.js
import { getToken } from "./tokens";

export const getMyGoogleCalendarsList = async () => {
  try {
    const token = await getToken();
    const request = await fetch(
      `https://www.googleapis.com/calendar/v3/users/me/calendarList`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await request.json();
    console.log("Got calendar events:", data);
    return data;
  } catch (error) {
    console.log("Error getting calendar data:", error);
    return error.message;
  }
};


