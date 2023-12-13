import OpenAI from "openai";
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors";
import { GoogleAuth } from "google-auth-library"
import { TextServiceClient } from "@google-ai/generativelanguage";




const app = express();
dotenv.config();

const port = process.env.PORT;
const api_key = process.env.GOOGLE_API_KEY;

app.use(bodyParser.json()); //parse input
app.use(cors());

const MODEL_NAME = "models/text-bison-001";

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(api_key),
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

/*
        step: 0,
        location: '',
        radio_pain_scale_active: "0",
        radio_pain_scale_rest: "0",
        pain_progression:'',
        pain_start_date:'',
        pain_type: '',
        pain_experience: '',
        symptoms_1: '',
        symptoms_2: '',
        symptoms_3: '',
        symptoms_4: '',
        symptoms_5: '',
        symptoms_6: '',
        symptoms_7: '',
        symptoms_8: '',
        radio_question1: '',
        openEnded_question2: '',
        openEnded_question3: '',
        openEnded_question4: '',
        openEnded_question5: '',
        openEnded_question6: '',
        message: '', //keep message at bottom
 */

const generatePrompt = (data) => {
    console.log(data);
    const prompt = `I have experienced a sport injury. You must give me recommendations on what it could be based on the following symptoms:
    I am experiencing pain in my ${data.location}
    When im moving I would rate my pain: ${data.radio_pain_scale_active}
    When im resting I would rate my pain: ${data.radio_pain_scale_rest}
    My pain has ${data.pain_progression} over the ${data.pain_start_date}
    It is a ${data.pain_type} pain
    It is ${data.constant}
    I also have ${data.symptoms_1}, ${data.symptoms_3}, ${data.symptoms_3}, ${data.symptoms_4}, ${data.symptoms_5}, ${data.symptoms_6}, ${data.symptoms_7}, ${data.symptoms_8}
    Have i seeked treatment for the problem? ${data.radio_question1},
    I have tried the following treatments ${data.openEnded_question2}
    It happened when ${data.openEnded_question3}
    It gets worse when ${data.openEnded_question4}
    It gets better when ${data.openEnded_question5}
    It also ${data.openEnded_question6}
    Other notes: ${data.finalThoughts}`;
    return prompt;
}

app.post("/", async (request, response) => {
    console.log(request.body);
    console.log(generatePrompt(request.body.state));
    const prompt = generatePrompt(request.body.state);

    client.generateText({
        model: MODEL_NAME,
        safetySettings: [{ //adjust safety settings to allow medical advice
            "category": 5, //values taken from safety.proto enum 5 = HARM_CATEGORY_MEDICAL
            "threshold": 4, //4 = BLOCK_NONE 
        }],
        prompt: {
            text: prompt,
        },
    })
        .then((result) => {
            console.log(result[0].candidates[0].output);
            response.json({ hello: result[0].candidates[0].output })
        });

})