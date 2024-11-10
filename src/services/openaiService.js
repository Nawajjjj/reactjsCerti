import axios from 'axios';

// Get API key from environment variable
const API_KEY = "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";

export const generateResume = async (resumeData) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions', // OpenAI endpoint for GPT-3 (or other models)
      {
        model: 'text-davinci-003', // Specify the model you want to use
        prompt: createResumePrompt(resumeData), // The prompt is built from the resumeData
        max_tokens: 1500, // You can adjust the max tokens based on how long the resume is
        temperature: 0.7, // Controls creativity
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`, // Use the environment variable
          'Content-Type': 'application/json',
        },
      }
    );
    
    return response.data.choices[0].text.trim(); // Return the formatted resume
  } catch (error) {
    console.error("Error generating resume:", error);
    throw error;
  }
};

// Helper function to create a detailed prompt based on resume data
const createResumePrompt = (data) => {
  return `Create a professional resume using the following information:

  Name: ${data.name}
  Contact Info: ${data.contactInfo}
  Professional Summary: ${data.professionalSummary}
  Experience: ${JSON.stringify(data.experience)}
  Education: ${JSON.stringify(data.education)}
  Skills: ${JSON.stringify(data.skills)}
  Certifications: ${JSON.stringify(data.certifications)}
  Languages: ${JSON.stringify(data.languages)}
  Projects: ${JSON.stringify(data.projects)}
  Volunteer Experience: ${JSON.stringify(data.volunteerExperience)}

  The resume should be formatted properly, listing the sections in a clean, organized manner.`;
};
