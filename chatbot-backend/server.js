const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Remplacez "VOTRE_CLE_API_OPENAI" par votre clé API réelle
const OPENAI_API_KEY = "VOTRE_CLE_API_OPENAI";

if (OPENAI_API_KEY === "VOTRE_CLE_API_OPENAI") {
  console.warn("N'oubliez pas de remplacer 'VOTRE_CLE_API_OPENAI' par votre clé API OpenAI dans server.js");
}


app.post("/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages) {
    return res.status(400).json({ error: "Le champ 'messages' est requis." });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: messages,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    if (error.response) {
      console.error("Erreur API OpenAI:", error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error("Erreur:", error.message);
      res.status(500).json({ error: "Erreur côté serveur" });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur backend démarré sur http://localhost:${PORT}`)); 