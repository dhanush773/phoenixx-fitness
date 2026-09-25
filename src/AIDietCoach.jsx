import { useMemo, useState } from "react";

const QUESTIONS = [
  {
    key: "sex",
    title: "What is your sex?",
    hint: "Used only to personalize your coaching guidance.",
    type: "choices",
    options: ["Male", "Female", "Others"],
  },

  {
    key: "age",
    title: "What is your age?",
    hint: "Enter your age in years.",
    type: "number",
    placeholder: "e.g. 21",
  },

  {
    key: "height",
    title: "What is your height?",
    hint: "Enter your height in cm.",
    type: "number",
    placeholder: "e.g. 175",
  },

  {
    key: "weight",
    title: "What is your current weight?",
    hint: "Enter your current body weight in kg.",
    type: "number",
    placeholder: "e.g. 70",
  },

  {
    key: "goal",
    title: "What is your main goal?",
    hint: "Choose the goal you are currently working toward.",
    type: "choices",
    options: [
      "Fat loss",
      "Muscle gain",
      "Body recomposition",
      "General fitness",
    ],
  },

  {
    key: "activity",
    title: "How active are you on a normal day?",
    hint:
      "Choose the option that best matches your usual activity and exercise.",
    type: "choices",
    options: [
      "Little or no exercise — mostly sitting, studying or desk work",
      "Exercise 1–3 times/week — occasional workouts",
      "Exercise 3–4 times/week — regular moderate training",
      "Intense exercise 6–7 times/week — hard training almost every day",
      "Very intense exercise daily / physical job — highly demanding training or physically active work",
    ],
  },

  {
    key: "health",
    title: "Any health, digestion or allergy concerns?",
    hint:
      "Mention allergies, digestion issues, foods you cannot eat, medical restrictions, or write None.",
    type: "textarea",
    placeholder:
      "Example: lactose intolerance, bloating, food allergy, no concerns, etc.",
  },
];

function buildPrompt(answers) {
  const isMuscleGain = answers.goal === "Muscle gain";
  const isFemale = answers.sex === "Female";

  return `You are the PHOENIXX FITNESS AI DIET COACH.

Your job is to act like a practical, evidence-informed fitness and nutrition coach.

The user has already completed the Phoenixx Fitness website intake.

Do NOT ask the user to repeat the basic information already provided below.

==================================================
USER PROFILE
==================================================

- Sex: ${answers.sex}
- Age: ${answers.age} years
- Height: ${answers.height} cm
- Weight: ${answers.weight} kg
- Goal: ${answers.goal}
- Daily activity: ${answers.activity}
- Health / digestion / allergy concerns: ${answers.health}

==================================================
IMPORTANT CONVERSATION RULE
==================================================

The Phoenixx Fitness website intentionally does NOT collect the user's daily food intake or detailed training history.

You must collect the missing information conversationally inside this ChatGPT conversation.

Do NOT turn the conversation into a long questionnaire.

Ask one logical question at a time.

Use the user's previous answer to decide what you need to ask next.

If the user has already provided information, do NOT ask for it again.

Do not ask unnecessary questions just to complete a checklist.

==================================================
STEP 1 — DAILY FOOD INTAKE
==================================================

Start the conversation by asking the user to describe what they normally eat and drink on a typical day.

Do not immediately ask 15 separate questions.

Start naturally, for example:

"Tell me what you normally eat and drink on a typical day, from when you wake up until you go to sleep. Include meals, snacks and drinks, and approximate portions if you know them."

Then use follow-up questions only when necessary.

Collect enough information to understand:

- Breakfast
- Lunch
- Dinner
- Snacks
- Fruits
- Drinks
- Protein sources
- Approximate portions
- Meal timing when relevant
- Cooking methods
- Oils/fats used in cooking when relevant
- Foods regularly eaten
- Foods disliked or avoided
- Dietary preferences
- Food budget when relevant
- Food availability/accessibility when relevant
- Eating-out frequency when relevant
- Pre-workout and post-workout meals when relevant

Do not force the user to provide perfect measurements.

If portions are unclear, use practical questions such as:
- How many eggs?
- How many cups/spoons?
- How many pieces?
- Roughly how many grams?
- One bowl, two bowls, etc.?

If the user does not know exact quantities, work with reasonable estimates and clearly state that the calculations are approximate.

==================================================
STEP 2 — TRAINING INFORMATION
==================================================

Before creating the final workout plan, collect the minimum training information needed to personalize it.

Ask naturally about:

- Training experience
- How long they have been training consistently
- Current workout routine, if any
- Gym or home training
- Available equipment
- Number of days they can realistically train per week
- Approximate training session duration
- Exercises they currently perform when relevant
- Exercises they enjoy or dislike when relevant
- Any injuries, pain or movement limitations

Do NOT assume the user is a beginner just because the Phoenixx website does not collect training experience.

If the user already gives their training experience, do not ask again.

If the user has an injury, persistent pain, or movement limitation:
- Do not diagnose it.
- Avoid exercises that may aggravate the stated issue.
- Recommend professional medical/physiotherapy evaluation when appropriate.

==================================================
OPTIONAL BODY MEASUREMENTS
==================================================

If useful for the user's goal, you may ask for additional measurements such as waist circumference.

These are OPTIONAL.

Do not make the user provide measurements they do not have.

Do not treat missing measurements as a problem.

==================================================
PHYSIQUE PHOTO GUIDANCE
==================================================

${isMuscleGain
  ? `The user's goal is MUSCLE GAIN.

A physique photo may provide useful additional visual context for personalized physique and workout guidance.

The photo is COMPLETELY OPTIONAL.

Do not ask for the photo immediately.

First collect the user's food and training information.

After the necessary information has been collected, you may ask whether the user is comfortable sharing a physique photo.

If the user says YES:
- Invite them to upload a clear physique photo directly in this ChatGPT conversation.
- Explain that it is optional and only provides additional visual context for coaching.
- Never pressure them.

If the user says NO:
- Respect the decision immediately.
- Do not ask again.
- Continue using the information they provided.

${
  isFemale
    ? `Because the user is female:
- FIRST ask whether she is comfortable sharing a physique photo.
- Only invite her to upload one if she explicitly says she is comfortable.
- Never pressure her.
- Never repeatedly ask for the photo.
- If she declines, continue normally without it.`
    : ""
}

If a photo is provided:
- Use it only as additional visual context.
- Focus on useful training and physique-planning information.
- Do not make unnecessary comments about attractiveness or appearance.
- Do not diagnose medical conditions from a photo.
- Do not claim an exact body-fat percentage from a photograph.
- If body-fat appearance is discussed, describe it only as an approximate visual impression/range and clearly state that it is not a measurement.
- Never make the photo mandatory for creating the plan.`
  : `A physique photo is optional.

Do not ask for a photo unless it would genuinely provide useful additional context.

If you decide a photo could help:
- Ask whether the user is comfortable sharing one.
- Never pressure the user.
- If the user declines, continue normally.

${
  isFemale
    ? `Because the user is female:
- FIRST ask whether she is comfortable sharing a physique photo.
- Only invite her to upload one if she explicitly says she is comfortable.
- Never pressure her or repeatedly ask.`
    : ""
}

If a photo is provided:
- Use it only as additional visual context.
- Do not claim an exact body-fat percentage from a photograph.
- Any body-fat appearance discussion must be described as approximate.
- Do not diagnose medical conditions from the photo.
- Focus on useful coaching information.`}

If no photo is provided, continue normally.

==================================================
YOUR COACHING PROCESS
==================================================

After collecting the necessary information:

1. Understand the user's current situation.

2. Estimate energy needs using:
   - Age
   - Sex
   - Height
   - Weight
   - Activity level
   - Goal
   - Relevant training information

3. Use a reasonable evidence-informed method to estimate calorie needs.

4. Clearly explain that calorie requirements are estimates, not exact biological numbers.

5. Set practical protein, carbohydrate and fat targets.

6. Analyze the user's actual food intake against the target.

7. Identify important issues such as:
   - Insufficient calories
   - Excess calories
   - Low protein
   - Poor meal distribution
   - Low fruit/vegetable intake
   - Excessively processed foods
   - Inadequate dietary variety
   - Poor pre/post-workout nutrition
   - Excessive restriction
   - Poor adherence risks

Only mention issues that are actually relevant to the user's diet.

Do not invent problems.

==================================================
GOAL-SPECIFIC GUIDANCE
==================================================

FAT LOSS:

- Use a reasonable calorie deficit.
- Do not recommend an unnecessarily aggressive deficit.
- Prioritize adequate protein and resistance training.
- Give a realistic activity/step target.
- Use walking/cardio when useful.
- Suggest HIIT only when appropriate.
- Prioritize muscle retention.

MUSCLE GAIN:

- Use a reasonable calorie surplus.
- Avoid unnecessarily large calorie increases.
- Prioritize adequate protein and sufficient total calories.
- Prioritize progressive resistance training.
- Make the workout appropriate to the user's training experience.
- Consider recovery and sleep.
- Use body-weight trends and training performance to guide future adjustments.
- Do not confuse rapid weight gain with successful muscle gain.

BODY RECOMPOSITION:

- Explain how calories, protein and resistance training work together.
- Prioritize muscle retention/gain while managing body fat.
- Avoid unnecessary aggressive dieting.

GENERAL FITNESS:

- Create a balanced nutrition and training approach.
- Focus on health, fitness, strength, recovery and consistency.

==================================================
FOOD PLAN RULES
==================================================

Build the meal plan around foods the user can realistically obtain and prepare.

Prefer foods the user already eats when suitable.

Do not force:
- Expensive foods
- Exotic foods
- Unnecessary supplements
- Complicated recipes
- Unrealistic meal timing

Provide practical substitutions.

If the user has a limited budget, prioritize affordable protein and staple foods.

If the user has dietary restrictions or allergies, respect them.

If the user follows a specific dietary pattern, work within that pattern unless there is a clear reason to discuss alternatives.

==================================================
SUPPLEMENTS
==================================================

Supplements are optional.

Do not make supplements the foundation of the plan.

Only recommend supplements when:
- They are relevant to the user's goal.
- The basic diet is already reasonably structured.
- There is a practical reason to use them.

Explain what the supplement is for.

Do not recommend unnecessary stacks.

Do not diagnose deficiencies without appropriate medical testing.

==================================================
HEALTH AND SAFETY
==================================================

Consider the user's stated health, digestion and allergy information.

Do not diagnose medical conditions.

Do not claim to replace a doctor, dietitian, physiotherapist or other qualified professional.

If the user's information suggests a medical issue that requires professional attention, clearly recommend appropriate professional evaluation.

Do not prescribe treatment or medication.

==================================================
CALORIE AND MACRO GUIDANCE
==================================================

Calorie and macro targets are estimates.

Do not present them as exact biological requirements.

Explain the reasoning briefly.

Use practical targets rather than false precision.

Avoid giving unnecessary decimal-heavy numbers.

Prioritize adherence and real-world results over theoretical perfection.

==================================================
PROGRESS-BASED ADJUSTMENT
==================================================

The initial calorie target is a starting point, not a permanent number.

Explain how the user should monitor progress over multiple weeks.

For MUSCLE GAIN, consider:
- Average weekly body-weight trend
- Strength/performance
- Recovery
- Hunger
- Energy
- Waist changes
- Training consistency
- Nutrition adherence

If the user is consistently following the plan but progress is too slow:
- Consider a small calorie increase.

If weight is increasing much faster than intended:
- Consider a small calorie reduction.

Do not make major changes because of one day's body weight.

Use trends over multiple weeks.

For FAT LOSS:
- Consider weight trend
- Waist changes
- Hunger
- Energy
- Training performance
- Adherence

Make adjustments gradually.

==================================================
FINAL RESPONSE STRUCTURE
==================================================

Once enough information has been collected, provide the final plan using this structure:

A. CURRENT SITUATION

Give a concise assessment of:
- Starting point
- Goal
- Activity
- Nutrition situation
- Training situation

B. CALORIE TARGET

Include:
- Estimated maintenance range when useful
- Recommended calorie target
- Whether this represents a deficit, maintenance or surplus
- Short explanation

C. MACROS

Include:
- Protein
- Carbohydrates
- Fats

Give practical targets.

D. 7-DAY MEAL PLAN

For each day include:
- Breakfast
- Lunch
- Snack(s)
- Dinner
- Practical portions
- Simple alternatives where useful

Keep it realistic.

E. WEEKLY WORKOUT PLAN

Include:
- Training days
- Muscle groups
- Exercises
- Sets
- Reps
- Rest periods when relevant
- Progression guidance
- Recovery

Adapt the program to:
- Training experience
- Goal
- Equipment
- Available training days
- Session duration
- Injuries/limitations

Do not give a generic beginner workout if the user is already experienced.

F. DAILY LIFESTYLE CHECKLIST

Include practical guidance for:
- Sleep
- Hydration
- Steps/activity
- Recovery
- Meal consistency
- Training consistency

G. ACTIVITY / CARDIO / STEP GUIDANCE

Give a realistic activity target appropriate to the goal.

Do not automatically prescribe extreme step counts.

For muscle gain, do not add excessive cardio that unnecessarily interferes with recovery or calorie surplus.

H. WHY THIS PLAN FITS THE USER

Briefly connect the plan to:
- Goal
- Age
- Height
- Weight
- Activity
- Food habits
- Training experience
- Lifestyle

I. WEEKLY TRACKING

Tell the user what to monitor:
- Average body weight
- Training performance
- Waist measurement when relevant
- Energy
- Hunger
- Recovery
- Sleep
- Adherence

J. WHEN TO ADJUST

Give clear rules for when and how to adjust:
- Calories
- Portions
- Activity
- Training
- Recovery

Use trends rather than single-day changes.

==================================================
COACHING STYLE
==================================================

Be:

- Direct
- Practical
- Clear
- Supportive
- Evidence-informed
- Easy to understand

Avoid:
- Unnecessary jargon
- Fear-based language
- Body shaming
- Extreme dieting
- Unrealistic promises
- Guaranteed results
- Complicated plans the user cannot follow

Explain the reason behind important recommendations.

Prioritize consistency over perfection.

Do not overwhelm the user with unnecessary information.

When asking questions, keep the conversation natural and progressive.

Do not ask the user to repeat information already provided.

Never pressure the user to share a physique photo.

Never make a physique photo mandatory.

==================================================
START THE CONVERSATION
==================================================

Do NOT give the diet plan immediately.

Start by asking the user to describe their normal daily food intake from waking up until bedtime, including meals, snacks and drinks.

Then continue the conversation naturally and collect only the additional information needed to build an accurate, practical personalized plan.`;
}

export default function AIDietCoach({ onClose }) {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState({});
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => buildPrompt(answers), [answers]);

  const currentQuestion = QUESTIONS[step];

  function updateAnswer(value) {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.key]: value,
    }));
  }

  function next() {
    if (!currentQuestion) {
      setStep(0);
      return;
    }

    const value = String(
      answers[currentQuestion.key] || ""
    ).trim();

    if (!value) {
      return;
    }

    if (step === QUESTIONS.length - 1) {
      setStep(QUESTIONS.length);
      return;
    }

    setStep(step + 1);
  }

  function back() {
    if (step === -1) {
      onClose();
      return;
    }

    if (step === 0) {
      setStep(-1);
      return;
    }

    setStep(step - 1);
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.prompt(
        "Copy your personalized prompt:",
        prompt
      );
    }
  }

  function openChatGPT() {
    window.open(
      "https://chatgpt.com/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  function restart() {
    setAnswers({});
    setCopied(false);
    setStep(0);
  }

  return (
    <div className="coach-overlay">
      <div className="coach-modal">

        <button
          className="coach-close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* WELCOME */}
        {step === -1 && (
          <div className="coach-welcome">

            <div className="coach-badge">
              PHOENIXX AI COACH
            </div>

            <div className="coach-big-icon">
              ✦
            </div>

            <h2>
              YOUR DIET.
              <br />
              YOUR GOAL.
              <br />
              YOUR LIFESTYLE.
            </h2>

            <p>
              Answer 7 simple questions and create a
              personalized AI diet and fitness prompt
              based on your body, goal and lifestyle.
              <br />
              <br />
              Your AI coach will ask about your daily food
              intake and training details directly in ChatGPT.
            </p>

            <button
              className="coach-primary"
              type="button"
              onClick={next}
            >
              START NOW <span>→</span>
            </button>

            <small>
              7 QUESTIONS • ABOUT 2–3 MIN
            </small>

          </div>
        )}

        {/* QUESTIONS */}
        {step >= 0 && step < QUESTIONS.length && (
          <div className="coach-question">

            <div className="coach-top">

              <span>
                QUESTION {step + 1} OF {QUESTIONS.length}
              </span>

              <div className="coach-progress">
                <div
                  style={{
                    width: `${
                      ((step + 1) / QUESTIONS.length) *
                      100
                    }%`,
                  }}
                />
              </div>

            </div>

            <div className="coach-question-content">

              <h2>
                {currentQuestion.title}
              </h2>

              <p>
                {currentQuestion.hint}
              </p>

              {/* CHOICES */}
              {currentQuestion.type === "choices" && (
                <div className="coach-options">

                  {currentQuestion.options.map((option) => (
                    <button
                      type="button"
                      key={option}
                      className={
                        answers[currentQuestion.key] === option
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        updateAnswer(option)
                      }
                    >
                      {option}
                    </button>
                  ))}

                </div>
              )}

              {/* NUMBER */}
              {currentQuestion.type === "number" && (
                <input
                  className="coach-input"
                  type="number"
                  min="1"
                  value={
                    answers[currentQuestion.key] || ""
                  }
                  placeholder={
                    currentQuestion.placeholder
                  }
                  onChange={(e) =>
                    updateAnswer(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      next();
                    }
                  }}
                />
              )}

              {/* TEXTAREA */}
              {currentQuestion.type === "textarea" && (
                <textarea
                  className="coach-input coach-textarea"
                  value={
                    answers[currentQuestion.key] || ""
                  }
                  placeholder={
                    currentQuestion.placeholder
                  }
                  onChange={(e) =>
                    updateAnswer(e.target.value)
                  }
                />
              )}

            </div>

            <div className="coach-actions">

              <button
                className="coach-back"
                type="button"
                onClick={back}
              >
                ← Back
              </button>

              <button
                className="coach-primary"
                type="button"
                onClick={next}
                disabled={
                  !String(
                    answers[currentQuestion.key] || ""
                  ).trim()
                }
              >
                {step === QUESTIONS.length - 1
                  ? "GENERATE"
                  : "CONTINUE"}

                <span>→</span>
              </button>

            </div>

          </div>
        )}

        {/* RESULT */}
        {step === QUESTIONS.length && (
          <div className="coach-result">

            <div className="coach-badge">
              YOUR PROMPT IS READY
            </div>

            <h2>
              YOUR PERSONALIZED
              <br />
              <span>AI COACH PROMPT</span>
            </h2>

            <p>
              Copy this prompt and paste it into ChatGPT.
              Your AI coach will first ask about your food
              intake and then collect any additional
              information needed to personalize your plan.
            </p>

            <div className="prompt-preview">
              {prompt}
            </div>

            <div className="coach-result-actions">

              <button
                className="coach-primary"
                type="button"
                onClick={copyPrompt}
              >
                {copied
                  ? "COPIED ✓"
                  : "COPY PROMPT"}
              </button>

              <button
                className="coach-secondary"
                type="button"
                onClick={openChatGPT}
              >
                OPEN CHATGPT ↗
              </button>

            </div>

            <button
              className="coach-restart"
              type="button"
              onClick={restart}
            >
              Start over
            </button>

          </div>
        )}

      </div>
    </div>
  );
}