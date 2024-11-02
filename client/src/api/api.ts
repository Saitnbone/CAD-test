const API_URL = import.meta.env.VITE_SERVER_URL;

export const submitContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (error) {
    console.error("Submit error:", error);
    throw error;
  }
};
