import { Question } from '@/components/QuestionField';

// Import lesson images
import lesson1Image from '@/assets/lesson1.png';
import lesson2Image from '@/assets/lesson2.png';
import lesson3Image from '@/assets/lesson3.png';
import lesson4Image from '@/assets/lesson4.png';
import lesson5Image from '@/assets/lesson5.png';
import lesson6Image from '@/assets/lesson6.png';
import lesson7Image from '@/assets/lesson7.png';

export interface LessonSection {
  title: string;
  content: string;
}

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: LessonSection[];
  imagePlaceholder: string;
  image?: string;
  questions?: Question[];
}

// Questions for each lesson
export const lessonQuestions: Record<number, Question[]> = {
  1: [
    {
      id: 'dias_ruptura',
      type: 'number',
      question: 'How many days since she left?',
      placeholder: 'E.g.: 5',
      min: 0,
      max: 365,
      icon: '📅',
      required: true
    },
    {
      id: 'motivo_principal',
      type: 'radio',
      question: 'What was the main reason for the breakup?',
      icon: '💔',
      required: true,
      options: [
        { label: 'There is another man involved', value: 'otro_hombre' },
        { label: 'Lack of attention on my part', value: 'falta_atencion' },
        { label: 'Communication problems', value: 'comunicacion' },
        { label: 'I\'m not sure of the exact reason', value: 'no_se' }
      ]
    },
    {
      id: 'ultimo_mensaje',
      type: 'radio',
      question: 'Did she respond to your last message?',
      icon: '💬',
      required: true,
      options: [
        { label: 'Yes, she responded normally', value: 'si' },
        { label: 'No, she left me on read', value: 'no' },
        { label: 'It\'s been a long time since we talked', value: 'hace_tiempo' }
      ]
    },
    {
      id: 'otro_hombre',
      type: 'radio',
      question: 'Is there another man in the picture currently?',
      icon: '👤',
      required: true,
      options: [
        { label: 'Yes, I\'m sure', value: 'si' },
        { label: 'No, there isn\'t anyone', value: 'no' },
        { label: 'I\'m not sure', value: 'no_se' }
      ]
    },
    {
      id: 'objetivo_personal',
      type: 'textarea',
      question: 'What is your main goal in taking this course?',
      placeholder: 'Write honestly what you hope to achieve...',
      icon: '🎯',
      required: true,
      minLength: 10,
      maxLength: 500
    }
  ],
  2: [
    {
      id: 'contacto_actual',
      type: 'radio',
      question: 'How often do you have contact with her currently?',
      icon: '📱',
      required: true,
      options: [
        { label: 'Every day', value: 'diario' },
        { label: 'Several times a week', value: 'semanal' },
        { label: 'Occasionally', value: 'ocasional' },
        { label: 'No contact', value: 'sin_contacto' }
      ]
    },
    {
      id: 'gatillo_identificado',
      type: 'radio',
      question: 'Which emotional trigger do you think is most relevant to your situation?',
      icon: '🎯',
      required: true,
      options: [
        { label: 'Emotional Scarcity - Make myself desirable', value: 'escasez' },
        { label: 'Controlled Nostalgia - Relive moments', value: 'nostalgia' },
        { label: 'Visible Transformation - The new me', value: 'transformacion' }
      ]
    },
    {
      id: 'plan_30_dias',
      type: 'textarea',
      question: 'What actions will you take in the next 30 days based on what you learned?',
      placeholder: 'Describe at least 3 concrete actions you will implement...',
      icon: '📋',
      required: true,
      minLength: 30,
      maxLength: 500
    }
  ],
  3: [
    {
      id: 'primer_mensaje',
      type: 'textarea',
      question: 'What would your ideal first contact message look like?',
      placeholder: 'Write the message you would send following the principles of this lesson...',
      icon: '✉️',
      required: true,
      minLength: 20,
      maxLength: 300
    },
    {
      id: 'cuando_contactar',
      type: 'radio',
      question: 'When do you plan to make first contact?',
      icon: '⏰',
      required: true,
      options: [
        { label: 'After completing no contact (21-30 days)', value: 'despues_contacto_cero' },
        { label: 'This week', value: 'esta_semana' },
        { label: 'When I feel ready', value: 'cuando_listo' }
      ]
    }
  ],
  4: [
    {
      id: 'nivel_confianza',
      type: 'radio',
      question: 'What is your confidence level for escalating communication?',
      icon: '📊',
      required: true,
      options: [
        { label: 'Very confident - I\'m ready', value: 'muy_confiado' },
        { label: 'Somewhat confident - I need to practice', value: 'algo_confiado' },
        { label: 'Not very confident - I have doubts', value: 'poco_confiado' }
      ]
    },
    {
      id: 'estrategia_escalacion',
      type: 'textarea',
      question: 'What will your strategy be for gradual escalation?',
      placeholder: 'Describe how you plan to go from casual messages to deeper conversations...',
      icon: '📈',
      required: true,
      minLength: 30,
      maxLength: 500
    }
  ],
  5: [
    {
      id: 'objeciones_comunes',
      type: 'textarea',
      question: 'What objections do you think she might have?',
      placeholder: 'List the possible objections and how you plan to handle them...',
      icon: '🛡️',
      required: true,
      minLength: 30,
      maxLength: 500
    },
    {
      id: 'punto_quiebre',
      type: 'radio',
      question: 'How much have you changed since the breakup?',
      icon: '🔄',
      required: true,
      options: [
        { label: 'A lot - I\'ve worked on myself significantly', value: 'mucho' },
        { label: 'Some - I\'ve made some changes', value: 'algo' },
        { label: 'Little - I\'m just starting', value: 'poco' }
      ]
    }
  ],
  6: [
    {
      id: 'propuesta_reencuentro',
      type: 'textarea',
      question: 'How would you propose meeting in person?',
      placeholder: 'Describe the message or way you would ask her for a date...',
      icon: '🎭',
      required: true,
      minLength: 20,
      maxLength: 400
    },
    {
      id: 'lugar_ideal',
      type: 'text',
      question: 'What would be the ideal place for the reunion?',
      placeholder: 'E.g.: A quiet coffee shop where we had good times...',
      icon: '📍',
      required: true,
      maxLength: 200
    }
  ],
  7: [
    {
      id: 'compromiso_cambio',
      type: 'textarea',
      question: 'What permanent changes are you committing to maintain?',
      placeholder: 'List the changes you will make for the relationship to work this time...',
      icon: '🌟',
      required: true,
      minLength: 50,
      maxLength: 600
    },
    {
      id: 'vision_futuro',
      type: 'textarea',
      question: 'How do you visualize your relationship in 1 year if everything goes well?',
      placeholder: 'Describe your vision of the future together...',
      icon: '🔮',
      required: true,
      minLength: 30,
      maxLength: 500
    },
    {
      id: 'leccion_principal',
      type: 'textarea',
      question: 'What is the most important lesson you learned from this course?',
      placeholder: 'Reflect on the most valuable learning...',
      icon: '💡',
      required: true,
      minLength: 20,
      maxLength: 400
    }
  ]
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Deep Diagnosis in 5 Minutes",
    subtitle: "Discover the hidden truth behind your breakup",
    icon: "🔍",
    image: lesson1Image,
    imagePlaceholder: "[IMAGE: Infographic of the 5 breakup reasons, with icons and concise text for each.]",
    sections: [
      {
        title: "1.1 Introduction: The Uncomfortable Truth of Your Breakup",
        content: `Before you continue reading, I need you to understand something fundamental: **most men who go through a breakup are in total denial**. They blame themselves for everything, or worse, they completely blame their ex without looking inward.

The reality is much more complex. Your breakup has deep causes that you probably don't see clearly. Maybe you think it was because of a specific argument, something you said or didn't say. But those are just superficial manifestations of bigger problems.

**The importance of an accurate diagnosis cannot be overstated.** If you don't understand exactly why she left, any attempt at winning her back will be like shooting blindly in the dark. You might get lucky, but most likely you'll fail.

In the next few minutes, we're going to unearth the truth. It's going to be uncomfortable. You're going to feel resistance. But it's absolutely necessary if you want any real chance of getting her back.`
      },
      {
        title: "1.2 The 5 Real Reasons She Left",
        content: `**Reason 1: Loss of Perceived Value**

When you met your ex, you were a "prize". You had something she wanted: mystery, ambition, independence, charisma. Over time, you became predictable. You stopped being the man who won her over.

*Examples of behaviors that diminish your value:*
- Dropping your hobbies and passions to be with her 24/7
- Always being available when she calls
- Stopping caring for your physical appearance
- Losing contact with your friends
- Making her the center of your universe

When you became "safe", you stopped being exciting. And women, although they say otherwise, need that spark of uncertainty to maintain interest.

---

**Reason 2: Monotony and the Comfort Zone**

Relationships have a silent enemy: routine. At first, every date was an adventure. Every conversation revealed something new. But after months or years, you fell into predictable patterns.

*Examples of deadly monotony:*
- The same movies, the same restaurants, the same plans
- Conversations limited to "how was your day?"
- Lack of surprises or spontaneous gestures
- Intimacy that becomes mechanical and scheduled
- Stopping doing new things together

The comfort zone is comfortable, but it's where relationships go to die. She started asking herself: "Is this all there is?"

---

**Reason 3: Lack of Challenge and Growth**

Women are attracted to men who inspire them to be better versions of themselves. They want someone who challenges them intellectually, emotionally, and personally.

*Signs that you stopped being a challenge:*
- You always agree with her to avoid conflict
- You stopped having your own opinions or personal goals
- Your life revolves exclusively around the relationship
- You don't question her when she's wrong
- You're "too easy" and there's never positive tension

When you became completely predictable and compliant, you lost the factor that kept her hooked.

---

**Reason 4: Emotional Inconsistency**

Your emotional ups and downs may have created an environment of instability. Maybe you overreacted to small problems, or you shut down emotionally when things got tough.

*Examples of emotional inconsistency:*
- Going from extreme happiness to depression for no apparent reason
- Exploding over minor things
- Giving the silent treatment when you're upset
- Needing constant validation and reassurance
- Showing irrational jealousy or distrust

Women seek emotional security. If she felt like walking on eggshells was the norm, she eventually decided it was easier to leave.

---

**Reason 5: The Appearance of a "Better Option"**

It's not always another man. Sometimes, the "better option" is simply a life without you. She started to imagine a future where she has freedom, new experiences, and the possibility of finding someone "better".

*This happens when:*
- She feels she has emotionally outgrown the relationship
- She sees more problems than benefits in you
- Her friends or family influence her perception
- Someone appeared (real or imaginary) who offers her what you don't
- She simply wants to explore who she is outside the relationship

Understanding this reason is crucial because it means you need to become that "better option" she thought she would find outside.`
      },
      {
        title: "1.3 Interactive Diagnostic Test",
        content: `It's time to do a self-reflection exercise. Answer the following questions honestly in your mind:

**Question 1:** In the last months of the relationship, how many times did you initiate exciting plans or surprises?
- A) Regularly, I always looked for ways to surprise her
- B) Occasionally, when I remembered
- C) Rarely or never

**Question 2:** How did you react when she expressed a different opinion than yours?
- A) We debated healthily and I respected her point of view
- B) I generally gave in to avoid conflict
- C) I got frustrated or shut down emotionally

**Question 3:** What percentage of your free time did you dedicate to the relationship vs. yourself?
- A) 50/50, I maintained a healthy balance
- B) 70/30 in favor of the relationship
- C) Practically all my time was for her

**Question 4:** How would your friends describe your attitude during the relationship?
- A) You were still the same as always
- B) You changed a bit, but maintained your essence
- C) You completely lost yourself in the relationship

**Question 5:** How often did you take care of yourself physically (exercise, clothing, hygiene) compared to when you met her?
- A) Same or better than before
- B) A little less, but acceptable
- C) Much less, I let myself go

**If most of your answers were C:** Your main problem was loss of perceived value and lack of challenge.

**If most were B:** You fell into monotony and emotional inconsistency.

**If most were A but you still broke up:** The problem may be deeper, related to fundamental compatibility or external factors.`
      },
      {
        title: "1.4 Analysis of Your Situation: The First Step",
        content: `Now that you've identified the pattern that contributed to your breakup, you're in a position of power. **Knowledge is the first weapon in your reconquest arsenal.**

Don't feel bad about what you discovered. Most men make these mistakes because no one taught them how relationship dynamics really work. It's not your fault, but now it's your responsibility to fix it.

**What you just did is more than 90% of men will ever do.** They will continue repeating the same patterns, losing relationship after relationship, wondering why women "always leave them".

You now have clarity. And that clarity is the foundation upon which we will build your reconquest strategy.

In the next lesson, you'll learn the **3 most powerful Emotional Triggers** you can activate to awaken your ex's desire to come back to you. These triggers work at a subconscious level and are the basis of every successful reconquest.

**Remember:** The diagnosis you just did is not to depress you, but to empower you. Now you know exactly what to work on.`
      }
    ]
  },
  {
    id: 2,
    title: "The 3 Most Powerful Triggers",
    subtitle: "The secret psychology that awakens her desire",
    icon: "🎯",
    image: lesson2Image,
    imagePlaceholder: "[IMAGE: Diagram of the 3 interconnected triggers, showing how they reinforce each other.]",
    sections: [
      {
        title: "2.1 Introduction to Emotional Triggers",
        content: `Emotional triggers are **psychological levers** that, when activated correctly, awaken specific emotions in your ex. We're not talking about cheap manipulation or superficial tricks. We're talking about applied psychology, based on decades of research on human behavior.

When a woman ends a relationship, it doesn't mean her feelings for you disappeared instantly. Those feelings are dormant, waiting to be awakened. The triggers you're going to learn are the tools to awaken those feelings.

**Important:** These triggers only work if you apply them with authenticity. If your ex perceives that you're being manipulative or fake, the effect will be the opposite. The key is to internalize these principles, not fake them.

The three triggers you will master are:
1. **Emotional Scarcity** - Make yourself desirable
2. **Controlled Nostalgia** - Relive the best moments
3. **Visible Transformation** - The new you she desires`
      },
      {
        title: "2.2 Trigger 1: Emotional Scarcity - Make Yourself Desirable",
        content: `**The fundamental principle:** People value what is scarce more. When something is always available, we lose appreciation for it. When something disappears, we suddenly realize how much we wanted it.

After a breakup, the most common mistake is bombarding your ex with messages, calls, and pleas. This has the opposite effect: it pushes her away more. Every desperate message screams "I'm available whenever you want", which completely eliminates your perceived value.

**The no contact rule:**

No contact means exactly what it sounds like: zero communication initiated by you. This includes:
- No text messages
- No calls
- No likes on social media
- No comments
- No "casual appearances" in places where you know she'll be
- No using mutual friends to find out about her

*How long?* Minimum 21 days, ideally 30. The brain needs this time to start processing the loss.

**Exceptions to no contact:**
- If you have children together (strictly child-related communication)
- If you work together (strictly professional communication)
- If she contacts you first (respond briefly, but don't initiate conversations)

**Examples of messages that create scarcity (for when you break no contact):**

❌ Incorrect: "Hi, I miss you so much. Can we talk?"

✅ Correct: "Hey, I saw something that reminded me of you. Hope you're doing well." (No further explanation, no questions requiring a response)

❌ Incorrect: "I can't stop thinking about you. Please give me another chance."

✅ Correct: [Total silence for weeks, followed by a casual appearance at a social place where you look incredible]

**The psychology behind it:**
When you disappear, her brain starts asking questions: "Why isn't he looking for me? Did he forget about me? Is he with someone else?" These questions create uncertainty, and uncertainty generates interest.`
      },
      {
        title: "2.3 Trigger 2: Controlled Nostalgia",
        content: `**The fundamental principle:** Positive memories have enormous emotional power. When you evoke the happiest moments you shared, you activate the same emotions she felt in those moments.

**The critical difference:**
- ❌ "Remembering the past" = Living in the past, seeming stuck
- ✅ "Controlled nostalgia" = Strategically evoking specific emotions

**How to use nostalgia effectively:**

1. **Select the right memories:**
   - Moments of genuine laughter
   - Unique experiences that only you two shared
   - Moments where she felt especially loved or special
   - Situations where you overcame something together

2. **The right timing:**
   - Never in the first weeks post-breakup
   - When communication has already been reestablished in a neutral way
   - When she shows signs of openness

**Examples of controlled nostalgia:**

❌ Incorrect: "I remember when we were together and we were so happy. I miss those times."

✅ Correct: "Passed by [specific place] today and couldn't help but smile remembering [specific funny moment]. It was one of those unique moments."

❌ Incorrect: Sending an old photo of you two together with a heart

✅ Correct: "Heard [song you danced to] in a café today. You're still the only person I know who [funny detail from that moment]."

**The key:** You're not asking for anything. You're not expressing pain. You're just sharing a positive memory in a light and casual way. This forces her to remember too, and those memories evoke the associated emotions.

**Places and objects as triggers:**
Every relationship has its "sacred places": the first date restaurant, the park where you first kissed, the beach from the special trip. These places are emotional anchors. Visiting them (and having her know indirectly) can activate nostalgia without you having to say anything.`
      },
      {
        title: "2.4 Trigger 3: Visible Transformation",
        content: `**The fundamental principle:** When she sees you as an improved version of yourself, the question arises: "Did I miss out on something good?"

**Why transformation is essential:**
Your ex left you for a reason. If you remain exactly the same person, why would you expect a different result? The transformation is not just for her; it's primarily for you. But the side effect is that she will notice it.

**The three dimensions of transformation:**

**1. Physical Transformation:**
- Improve your physical condition (gym, sports, activity)
- Update your clothing style
- Take care of your hygiene and grooming more than ever
- Improve your posture and body language

*Example:* If she left you when you were 20 pounds overweight and wore old t-shirts, having her see you 3 months later in the best shape of your life, with clothes that enhance your figure, will send a powerful message.

**2. Mental/Emotional Transformation:**
- Develop new interests and hobbies
- Read books, take courses, learn skills
- Work on your emotional intelligence
- Meditate or practice mindfulness
- Consider therapy if there are deep issues to resolve

*Example:* When you talk again, instead of seeming like the same stuck man, you talk about your new project, the book that impacted you, the trip you're planning. You're interesting again.

**3. Social Transformation:**
- Reconnect with friends you neglected
- Make new friendships
- Participate in social events
- Build a life that doesn't depend on her

*Example:* Mutual friends tell her they saw you at a party having an incredible time, surrounded by people, radiating confidence. This creates curiosity and even jealousy.

**The transformation must be VISIBLE:**
It's useless to transform if she doesn't see it. This doesn't mean showing off on social media in a desperate way. It means genuinely living your best life and letting that energy project naturally.`
      },
      {
        title: "2.5 The Perfect Synergy: Combining the 3 Triggers",
        content: `**Action plan for the first 30 days:**

**Days 1-7: Absolute No Contact (Trigger 1: Scarcity)**
- Zero communication initiated by you
- Remove temptation: mute her notifications, avoid stalking her social media
- Focus 100% on yourself
- Begin your physical and mental transformation

**Days 8-14: Intensive Transformation (Trigger 3)**
- Intensify your exercise routine
- Renew your wardrobe (even if just with key pieces)
- Start a new hobby or project
- Reconnect with friends

**Days 15-21: Indirect Visibility (Triggers 1 + 3)**
- Return to posting on social media (positive content, no indirect messages)
- Attend social events where you can be seen
- Let mutual friends see your transformation
- Still no direct contact with your ex

**Days 22-30: Strategic First Contact (Triggers 2 + 3)**
- Send a casual message that incorporates controlled nostalgia
- Don't ask for anything, don't talk about the relationship
- Indirectly show your transformation through the context of the message
- If she responds positively, proceed with caution
- If she doesn't respond or responds coldly, return to no contact for 2 more weeks

**Remember:** This is not a rigid formula. Read the signals and adjust according to the situation. But having a plan gives you structure and prevents you from acting impulsively.`
      }
    ]
  },
  {
    id: 3,
    title: "First Contact (Day 1)",
    subtitle: "The reunion strategy that changes everything",
    icon: "💬",
    image: lesson3Image,
    imagePlaceholder: "[IMAGE: Visual timeline of Day 1, with key points and message examples.]",
    sections: [
      {
        title: "3.1 Psychology of First Contact: Less is More",
        content: `You've spent days (ideally weeks) without contact. You've worked on yourself. Now comes the most delicate moment of the entire process: **the first contact post-breakup**.

**Why this moment is critical:**
The first impression after the breakup can determine the tone of everything that follows. If you seem desperate, you confirm all the reasons why she left. If you seem confident and renewed, you plant the seed of doubt in her decision.

**The mistake EVERYONE makes:**
They think the first contact is to "resolve things" or "talk about the relationship". **NO.** The first contact has ONE single objective: to open the door to communication in a positive and light way.

**Fundamental principles:**
1. **Brevity:** The shorter, the better. Long messages scream desperation.
2. **Neutrality:** No intense emotions, neither positive nor negative.
3. **No expectations:** Don't expect an immediate or enthusiastic response.
4. **Project well-being:** Your message should convey that you're doing well (not that you're trying to prove you're doing well).`
      },
      {
        title: "3.2 The First 24 Hours: Your Golden Opportunity",
        content: `**When to contact:**
- Ideally, after at least 3 weeks of no contact
- At a time of day when she's likely to be relaxed (not during work hours)
- When YOU are in a good emotional state

**What to do on Day 1:**

✅ **DO:**
- Send ONE short and casual message
- Wait patiently for a response (it may take hours or days)
- Maintain an attitude of "I'm fine regardless of the outcome"
- Have plans for after sending the message (don't stay staring at the phone)
- Respond in a measured way if she answers

❌ **DON'T:**
- Send multiple messages if she doesn't respond
- Ask "Did you get my message?" or "Are you there?"
- Call if she doesn't respond to the message
- Send long voice messages explaining yourself
- Mention the breakup or the relationship

**The golden rule: "Don't ask, offer"**

Your message should offer something of value (a positive memory, useful information, an inside joke) instead of asking for something (attention, answers, another chance).

**The right mindset:**
Imagine you're contacting a friend you lost touch with. No drama, no complicated history. You're just reconnecting in a light way. That energy is what your message should convey.`
      },
      {
        title: "3.3 What to Say Exactly: Impact Scripts",
        content: `**Script 1: The "Friendly Closure" Message**

*Context: When the breakup was recent and you want to establish there's no resentment.*

"Hey, I know things ended in a complicated way, but I wanted you to know that I wish you the best. Hope you're doing well. 🙂"

*Why it works:* It's mature, asks for nothing, closes the drama chapter and opens the possibility of future communication.

---

**Script 2: The "Genuine Interest" Message**

*Context: When you know something important is happening in her life (exam, project, family event).*

"Hey, I remembered you had [that exam/that presentation/your cousin's wedding] this week. How did it go?"

*Why it works:* You show that you remember important things about her without seeming like you're stalking her. It's an easy question to answer.

---

**Script 3: The "Added Value" Message**

*Context: When you find something that would genuinely interest or help her.*

"Saw this and thought you might be interested: [link to article, video, event related to her interests]. No strings attached, just thought of you."

*Why it works:* You offer value without asking for anything in return. You show that you know her well and that you think of her positively.

---

**Script 4: The "Funny Memory" Message**

*Context: When you want to evoke nostalgia in a light way.*

"Just passed by [place] and remembered when [specific funny moment]. I still laugh when I think about it. 😄"

*Why it works:* Evokes positive emotions associated with you without being heavy or asking for anything.

**IMPORTANT:** Choose ONE script only. Don't combine or modify excessively. Simplicity is your ally.`
      },
      {
        title: "3.4 What NOT to Do: Fatal Mistakes",
        content: `**1. Begging or Pleading**
❌ "Please give me another chance. I'll do anything."
❌ "I can't live without you. I need you."
❌ "I know I made mistakes, but I deserve another chance."

*Why it's fatal:* Begging instantly destroys any attraction you might have. Women are not attracted to men who beg.

**2. Blaming Her or Making Her Feel Bad**
❌ "How could you do this to me after everything I gave you?"
❌ "You threw away everything we built."
❌ "I hope you realize what you lost."

*Why it's fatal:* Generates defensiveness and confirms she's better off without you.

**3. Promising Drastic Changes**
❌ "I'll change everything you want. I'll be a different person for you."
❌ "I'll go to therapy, quit my bad habits, start exercising..."
❌ "Everything will be different, I promise."

*Why it's fatal:* Empty promises mean nothing. Only demonstrated actions matter.

**4. Talking About the Negative Past**
❌ "Remember when we fought about [topic]? I want to discuss it."
❌ "I know I hurt you when [incident]. Let me explain."
❌ "We need to talk about what happened."

*Why it's fatal:* Revives negative emotions associated with you.

**5. Pressuring for Answers or Meetings**
❌ "Why aren't you responding?"
❌ "I need to see you. Tell me when I can come by."
❌ "Can we talk in person? It's urgent."

*Why it's fatal:* Pressure generates resistance. The more you push, the more she'll pull away.`
      },
      {
        title: "3.5 Signs That It's Working",
        content: `**Positive signs to observe:**

✅ **Quick responses:** If she responds in minutes or hours (not days), it's a good sign. It means your message mattered enough to prioritize.

✅ **Questions about you:** If her response includes questions like "How are you?" or "What have you been up to?", she's showing interest in your life.

✅ **Emojis and light tone:** The use of emojis and a casual tone indicates she's comfortable talking to you.

✅ **She extends the conversation:** If instead of short answers she sends more elaborate messages or introduces new topics, it's an excellent sign.

✅ **Mentions positive memories:** If she also starts evoking good moments you shared, she's connecting emotionally.

✅ **Interest in your activities:** Questions about your new hobby, your work, your plans indicate curiosity about the "new version" of you.

**Neutral signs (don't get discouraged):**
- Brief but friendly responses
- Delay of several hours or a day in responding
- Responses that don't ask questions

**Warning signs (step back):**
- Cold or curt responses
- No response after several days
- She asks you to stop writing to her

**If the signs are warning:** Don't panic. Return to no contact for at least 2 more weeks. Sometimes the timing isn't right. It doesn't mean all is lost.`
      }
    ]
  },
  {
    id: 4,
    title: "Escalation (Days 2-3)",
    subtitle: "The art of slow and strategic seduction",
    icon: "📈",
    image: lesson4Image,
    imagePlaceholder: "[IMAGE: Communication escalation graph, showing the gradual increase in intensity.]",
    sections: [
      {
        title: "4.1 The Art of Escalation: From Friends to Lovers",
        content: `After a successful first contact comes the most delicate phase: **escalation**. This is where most men ruin everything they built.

**The common mistake:** Thinking that because she responded positively, you can now talk about the relationship or ask her to come back. **WRONG.** This is exactly what she expects you to do, and it's exactly what will push her away.

**The objective of escalation:**
To gradually move from neutral/friendly communication to one with emotional and, eventually, romantic tension. This doesn't happen in a day. It's a process that requires patience and calibration.

**The phases of escalation:**
1. **Phase 1 (Days 1-2):** Light and casual communication
2. **Phase 2 (Days 2-3):** Introduction of nostalgia and emotional connection
3. **Phase 3 (Day 4+):** Subtle romantic tension and meeting planning

**Fundamental rule:** Never skip phases. If you try to go from light communication to declarations of love, you'll lose all the ground you gained.`
      },
      {
        title: "4.2 The 70/30 Rule",
        content: `**The concept:** In this phase, you invest approximately 70% of the energy and she invests 30%. But you need to be attentive: if she's not investing anything, you need to step back.

**What investment looks like:**
- You initiate 70% of conversations
- You contribute 70% of interesting topics
- You maintain 70% of the momentum

**Signs that she's investing her 30%:**
- She responds with enthusiasm
- She asks questions
- She shares things from her life without you asking
- Sometimes she initiates the conversation

**What if she doesn't invest?**
If after 2-3 exchanges she only responds with monosyllables and never contributes anything, it's time to step back. Let a day or two pass without writing. If she doesn't initiate, your next message should be even lighter and without expectations.

**How to create intrigue and mystery:**

1. **Don't tell everything:** If she asks what you did over the weekend, don't give a detailed report. "It was pretty interesting" is more intriguing than "I went to the movies with Mike and then we had dinner at that new place."

2. **End conversations before they die:** Instead of stretching the conversation until it runs out, say goodbye when it's at its peak. "Hey, I have to go, but it was nice talking to you. Talk later." This leaves her wanting more.

3. **Don't always be available:** If she writes, don't respond instantly every time. Sometimes let her wait a bit (not manipulatively, but don't drop everything to respond either).

4. **Mention activities without details:** "I have plans" is more mysterious than "I'm staying home watching Netflix".`
      },
      {
        title: "4.3 Scripts for Escalation",
        content: `**Script 1: The "Funny Memory" Message**

*Objective: Evoke nostalgia and positive emotions*

"Haha I just saw [something related to an inside joke you had] and remembered when [specific funny moment]. Do you remember that? 😂"

*Follow-up if she responds positively:*
"Those moments were the best. [Add a small detail from the moment]."

---

**Script 2: The "Subtle Challenge" Message**

*Objective: Create positive tension and engagement*

"I bet you still can't [activity you used to do together or something you know challenges her]. Or am I wrong? 😏"

*Why it works:* Creates playful dynamic. Invites her to prove something. Generates interaction.

---

**Script 3: The "Exclusive Reveal" Message**

*Objective: Create intimacy and emotional connection*

"I have to tell you something, but it has to be in person. When are you free for a coffee?"

*Why it works:* Creates curiosity. Positions face-to-face meeting as necessary. Gives a specific reason.

---

**Script 4: The "Shared Interest" Message**

*Objective: Connect through common interests*

"I remembered you love [interest]. Just discovered [something new related to it] and thought of you. You have to check it out."

*Follow-up if she shows interest:*
"We should go to [related event/place] sometime. It would be fun."

---

**Script 5: The "Curiosity" Message**

*Objective: Open deep conversation*

"Curious: What was the craziest thing you've done lately?"

*Why it works:* Open question that invites elaboration. Shows genuine interest. Opens door to interesting stories.`
      },
      {
        title: "4.4 How to Keep the Conversation Flowing",
        content: `**Techniques to maintain interest:**

**1. The Callback**
Reference something she mentioned before. This shows you listen and remember.

Example: She mentioned she was going to a work event.
Later: "How did that work event go? Did they fall asleep during presentations? 😄"

**2. The Cliffhanger**
Leave something interesting unfinished for the next conversation.

"I have to tell you about something crazy that happened to me... but I have to go now. I'll tell you tomorrow."

**3. The Emotional Roller Coaster**
Don't be monotonous. Vary between funny, serious, curious, nostalgic.

If the conversation has been very light, suddenly introduce something more profound.
If it's been too serious, break it with a joke.

**4. Strategic Questions**
Ask questions that require more than "yes" or "no".

❌ "Did you have a good day?"
✅ "What was the best part of your day?"

**5. The Art of Timing**
Don't respond immediately to everything. Sometimes wait a few minutes. This creates a sense of scarcity even within the conversation.

**Topics to avoid in this phase:**
- The relationship
- Why you broke up
- Whether there's someone else
- How much you miss her
- Future plans together

**Topics to encourage:**
- Interesting things in your life
- Shared interests
- Funny/light memories
- Their dreams and goals (without connecting to the relationship)
- News, culture, common interests`
      },
      {
        title: "4.5 Transitioning to Meeting",
        content: `**When is the right time?**

You're ready to propose a meeting when:
- She responds consistently and enthusiastically
- She initiates conversations sometimes
- There have been moments of connection or nostalgia
- The tone is positive and there are no signs of discomfort
- Approximately 3-5 days of good communication

**How to propose the meeting:**

**The natural transition:**

Don't say: "I want to see you to talk about us."
Do say: "Hey, this week I'm going to be near [her area]. Coffee?"

**The specific reason:**

Don't say: "We should meet."
Do say: "There's a [place/event] I want to check out. Want to come?"

**The low commitment:**

Don't say: "Let's go to dinner."
Do say: "A quick coffee. 30 minutes."

**Example scripts:**

✅ "You know, this would be easier to discuss in person. Are you free for a coffee this week?"

✅ "I'll be near [her zone] on [specific day]. Want to meet up for a bit?"

✅ "There's something I want to show you [something related to a previous topic]. When can we meet up?"

**If she hesitates:**

Don't pressure. Respond with: "No problem, when you have time let me know."
This maintains your value and gives her space to decide.

**Important:** The first meeting should be short (1-2 hours max), in a public place, and without heavy expectations. The goal is to have a good time, not to define the relationship.`
      }
    ]
  },
  {
    id: 5,
    title: "Breaking Point (Days 4-5)",
    subtitle: "The critical moment where you win or lose everything",
    icon: "⚡",
    image: lesson5Image,
    imagePlaceholder: "[IMAGE: Diagram showing the emotional breaking point and possible outcomes.]",
    sections: [
      {
        title: "5.1 What is the Breaking Point?",
        content: `The breaking point is the **moment when your ex starts to reconsider her decision**. It's when her certainty about having left you begins to crack.

**How to recognize the breaking point:**

- She responds faster and with more enthusiasm
- She brings up shared memories on her own
- She seems curious about your life and changes
- She shows subtle signs of jealousy when you mention activities
- She suggests meeting or accepts your proposals easily
- Her tone changes from neutral to warm/affectionate

**What happens in her mind:**

She's experiencing what psychologists call **cognitive dissonance**. Her brain is fighting between:
- "I left him for good reasons"
- "But he seems different now... and I miss him"

This internal conflict is what creates the breaking point.

**Your role:** You don't need to push. You need to maintain the conditions that create this conflict. Continue being the improved version of yourself while creating positive emotional connection.

**Warning:** The breaking point doesn't mean she's ready to come back. It means she's open to considering it. Pressuring now could ruin everything.`
      },
      {
        title: "5.2 How to Navigate This Phase",
        content: `**Strategy 1: "The Slow Dance"**

At this point, you need to balance two things that seem contradictory:
- Keep showing interest (so she doesn't feel rejected)
- Maintain some distance (so she doesn't feel pressured)

*How to do it:*
- Be warm in your messages, but don't write constantly
- Propose meetings, but don't insist if she can't
- Be present, but have a life beyond her

---

**Strategy 2: "The Proof of Change"**

The breaking point intensifies when she sees that you've really changed. This isn't told, it's shown.

*Practical ways to show change:*
- If you used to be jealous, show security when she mentions other people
- If you used to be careless, remember important details about her
- If you used to be dependent, show your full and interesting life
- If you used to be negative, be positive and energetic

---

**Strategy 3: "The Mirror Effect"**

Mirror her energy. If she's more affectionate, you can be too. If she distances a bit, distance a bit. This creates a feeling of balance and connection.

*Example:*
If she starts using emojis and exclamation marks, you can too.
If she seems more reserved, lower your intensity.

The goal is to make her feel that you're "in sync".`
      },
      {
        title: "5.3 Strategies to Intensify the Breaking Point",
        content: `**Strategy 1: "Social Media Magic"**

Use your social networks strategically (not to show off).

*What to post:*
- Photos of activities with friends (you look sociable)
- Achievements or projects (you look ambitious)
- Interesting places (you look adventurous)
- Improvements in your appearance (you look attractive)

*What NOT to post:*
- Sad or melancholic quotes
- Photos with other women (obvious and desperate)
- Indirect messages aimed at her
- Anything that smells of "look how well I'm doing without you"

---

**Strategy 2: "Social Proof"**

Let mutual friends see your transformation and let that information reach her organically.

*How to do it:*
- Go out with mutual friends and be your best version
- Tell (don't force it) about your projects and improvements
- Be positive and avoid talking about the breakup or her

*Why it works:*
When she hears from third parties how well you're doing, it has more impact than if you brag yourself. Plus, it generates curiosity and potentially jealousy.

---

**Strategy 3: "The Social Event"**

Plan to appear at a place where you know she'll be.

*How to do it:*
- Identify an event, party, or place where she'll probably go
- Arrive looking incredible (physically and attitudinally)
- Don't seek her out directly; let her find you
- Be the center of positive attention (chatting, laughing, having a great time)
- If she approaches, be friendly but don't give her all your attention

*Why it works:*
Seeing your transformation in person has 10 times more impact than seeing it in photos. Plus, if she sees you interacting positively with others (especially women), it will activate her competitive instinct.`
      },
      {
        title: "5.4 The Psychology of the Moment",
        content: `**Understanding her conflicted mind:**

At this moment, your ex is experiencing what psychologists call **cognitive dissonance**. Her brain is fighting between two incompatible narratives:

**Narrative 1 (Her original decision):**
"I left [your name] because it was the right thing. We had unsolvable problems. I deserve something better. It was the mature decision."

**Narrative 2 (What she's experiencing now):**
"But I miss him. He's changed. I feel different when I talk to him. What if I made a mistake? What if he was 'the one' and I didn't know how to value him?"

**How this struggle manifests:**
- Moments of closeness followed by moments of distance
- Warm messages that suddenly become cold
- Emotional advances that retreat
- Apparent confusion about what she wants

**Your role at this moment:**

**DON'T pressure her.** Any pressure from you will push her towards Narrative 1 ("This is why I left him, because he was too needy").

**DO remain consistent.** Your transformation, your positive attitude, your independent life reinforce Narrative 2.

**Be patient.** This internal process takes time. You can't rush someone to change their mind about an important decision.

**Maintain balance.** Neither too available (desperate) nor too distant (uninterested). The sweet spot is in the middle.`
      },
      {
        title: "5.5 Next Steps: Don't Relax",
        content: `**The danger of complacency:**

The Breaking Point is not the finish line. It's barely the halfway point. Many men reach this point, feel they "already won", and return to the old patterns that caused the original breakup.

**What you MUST do now:**

1. **Maintain your independent life:**
   - Continue with your hobbies, friends, and projects
   - Don't abandon everything to be available for her
   - Your rich and interesting life is part of what's attracting her

2. **Don't get ahead of yourself:**
   - Don't talk about getting back together until she brings it up
   - Don't assume you're already a couple again
   - Keep building tension and connection

3. **Keep being the new you:**
   - The transformation wasn't a trick; it's permanent
   - Every interaction should reinforce that you're different
   - Any regression to old patterns will be noticed immediately

4. **Prepare for the meeting:**
   - The next logical step is meeting in person
   - This meeting must be carefully planned
   - More on this in the next lesson

**Remember:** The fact that she's yielding doesn't mean the work is over. It means the previous work worked and that you're now entering the most delicate and exciting phase.`
      }
    ]
  },
  {
    id: 6,
    title: "Closure (Days 6-9)",
    subtitle: "The final reconquest and definitive reunion",
    icon: "💝",
    image: lesson6Image,
    imagePlaceholder: "[IMAGE: Reconquest phases, highlighting the closure stage with a success circle.]",
    sections: [
      {
        title: "6.1 The Final Phase: The Definitive Reunion",
        content: `You've reached the decisive moment. Weeks of strategic work have brought you here. The signs are clear: she's considering coming back. Now comes the most important part of the entire process: **the in-person meeting that will seal the reconquest**.

**Why the in-person meeting is crucial:**

Text messages and calls can build connection, but they cannot replace the chemistry that exists in person. When you're face to face, all senses are activated: eye contact, body language, smell, physical presence. These elements are what truly rekindle attraction.

**The objective of the meeting is NOT:**
- To talk about the relationship
- To apologize for everything
- To pressure her to come back
- To have a serious and heavy conversation

**The objective of the meeting IS:**
- To make her feel incredible in your presence
- To rekindle physical and emotional chemistry
- To demonstrate your transformation in person
- To create a new positive memory that replaces the negative ones
- To leave her wanting more

**The ideal environment:**
- A neutral place (not her house or yours)
- Some ambient noise (to avoid awkward silences)
- Possibility of walking or changing location
- Without distractions (avoid long formal dinners)
- Enough privacy for moments of connection`
      },
      {
        title: "6.2 How to Ensure She Comes Back",
        content: `**Step 1: The Irresistible Invitation**

How you invite her is crucial. It should be casual but intriguing.

✅ "Hey, I'll be near [area she likes] on Friday. Would you be up for a quick coffee?"

✅ "There's a new place I want to try and I remembered you love [type of food/drink]. Want to join me?"

✅ "I was thinking it's been a long time since I've been to [place with good memories]. What do you say? No pressure."

❌ "We need to meet to talk about us."
❌ "I want to see you because I miss you too much."

---

**Step 2: The Ideal Place**

- Coffee shop with relaxed atmosphere
- Quiet bar (not a noisy club)
- Place with a view (terrace, park)
- A place where you had a good time (controlled nostalgia)

Avoid: her house, your house, very formal restaurants, places where you might run into people you know.

---

**Step 3: Your Impeccable Attitude**

- **Confidence without arrogance:** Stand straight, make eye contact, smile.
- **Humor and lightness:** Make her laugh, don't be heavy or intense.
- **Active listening:** Ask about her, show genuine interest.
- **Mystery:** Don't tell everything about your life; leave topics for future conversations.
- **Zero drama:** Even if she tries to talk about the past, redirect the conversation.

---

**Step 4: The Moment of Truth**

If she brings up the topic of the relationship (and she probably will), handle it like this:

Her: "Why do you think we broke up?"
You: "I think we both had things to learn. But honestly, I'm more focused on who I am now than on analyzing the past."

Her: "Do you miss me?"
You: (With a subtle smile) "Sometimes I think about the good times. But I've also been enjoying my life."

**Don't beg, don't promise, don't dramatize.**

---

**Step 5: The Emotional Close**

At the end of the meeting, you should leave her wanting more.

- Don't extend the meeting more than 2 hours (maximum)
- End on a high note, not when the conversation dies
- A goodbye hug slightly longer than normal
- A closing phrase like: "It was really nice seeing you. We should do this again."

**Subtle physical contact:**
- Touch her arm when making a point
- If there's an opportunity to walk, offer your hand when crossing a street
- A goodbye hug where she feels your presence

Don't force kisses or anything sexual. Let the tension build for the next meeting.`
      },
      {
        title: "6.3 Closing Scripts",
        content: `**Script 1: Post-Meeting Message**

*Send 2-3 hours after seeing each other:*

"Hey, I had a really good time today. [Reference to something specific from the meeting that will make her smile]. We should do it again soon."

*Don't expect an immediate response. Don't send additional messages if she doesn't respond.*

---

**Script 2: Second Meeting Invitation**

*Send 1-2 days later:*

"I found [place/event/activity] that I think you'd love. Are you up for it on [day]?"

*Be specific. A concrete plan is better than "we should see each other again".*

---

**Script 3: Post-Meeting Nostalgia Message**

*If the first meeting was very positive:*

"I'm not going to lie, today I remembered why [something positive about her without being cloying]. But well, I'll tell you in person. 😏"

---

**Script 4: Handling Resistance**

*If she shows doubts about meeting again:*

Her: "I don't know if it's a good idea for us to keep seeing each other..."

You: "I understand. No pressure. But I really enjoyed seeing you and I think you did too. Think about it and let me know. No drama."

*Never beg. If she needs space, give it to her. Your value doesn't depend on her response.*

---

**Script 5: After Several Successful Meetings**

*When you feel it's time to define things:*

"Hey, we've had a really good time together lately. I don't know about you, but I feel something different now. We don't need to label it, but I wanted you to know I'm enjoying this."

*This opens the door for her to express how she feels, without pressuring her.*`
      },
      {
        title: "6.4 Consolidation: It's Not the End, It's the Beginning",
        content: `**The danger few see coming:**

Congratulations. If you've made it this far and things are going well, you're on your way to winning back your ex. But here comes the part no one tells you: **the reconquest is only 50% of the work.**

Men who get their ex back but don't fundamentally change end up in the same place 3, 6, or 12 months later. Sometimes worse, because now there's accumulated resentment.

**What you MUST do to consolidate:**

1. **Don't return to old patterns immediately:**
   - Keep some mystery
   - Keep cultivating your independent life
   - Don't smother her with constant attention

2. **Implement real changes:**
   - The promises you made (even implicitly) must be kept
   - If the problem was communication, actively work on that
   - If it was lack of time together, create space for her

3. **Establish new dynamics:**
   - This is a new relationship, not a continuation of the old one
   - Talk about expectations (without drama, maturely)
   - Agree on how you'll handle conflicts

4. **Don't take for granted that "you've won":**
   - Keep courting her
   - Keep surprising her
   - Keep being the improved version of yourself`
      },
      {
        title: "6.5 What to Do After Closure",
        content: `**The first 30 days after getting back together:**

**Weeks 1-2:**
- Maintain some space (don't be together 24/7)
- Keep seeing your friends
- Small gestures: sweet messages, unexpected details
- Avoid long conversations about "the breakup"

**Weeks 3-4:**
- Plan a new experience together (something you've never done before)
- Start talking about the future casually and positively
- Keep cultivating your personal transformation
- Gradually integrate your lives again

**Mistakes to avoid:**

❌ **Becoming complacent:** "She came back, I can relax"
❌ **Constantly bringing up the past:** "Remember when you left me..."
❌ **Losing your identity again:** Abandoning friends, hobbies, goals
❌ **Showing insecurity:** "Are you sure you want to be with me?"
❌ **Pressuring to define too quickly:** "Are we officially boyfriend/girlfriend?"

**The right mindset:**

Every day is an opportunity to demonstrate that this time is different. Don't rest on your laurels. The relationship needs constant nurturing, but that doesn't mean sacrificing your individuality. Balance is the key.

**Remember:** She came back for the person you became. If you go back to being who you were before, you'll lose everything you gained.`
      }
    ]
  },
  {
    id: 7,
    title: "⚠️ CRITICAL WARNING",
    subtitle: "What comes next: your future depends on this",
    icon: "⚠️",
    image: lesson7Image,
    imagePlaceholder: "[IMAGE: Illustration of a path with forks, one leads to success and another to relapse, with an arrow pointing to Module 2 as the right path.]",
    sections: [
      {
        title: "7.1 Why Many Fail Here",
        content: `**The comfort trap that destroys everything.**

You've completed Module 1. You've applied the strategies. Maybe you're already seeing positive results, or maybe you've already won back your ex. **But this is where most men fail spectacularly.**

The pattern is always the same:
1. She comes back
2. He relaxes ("mission accomplished")
3. Little by little, he returns to old habits
4. She starts doubting again
5. The relationship deteriorates
6. Breakup 2.0 (usually worse than the first)

**Why does this happen?**

Because the reconquest is only **half the battle**. Getting her back is relatively easy compared to keeping her. The first requires a few weeks of intense effort. The second requires a fundamental change in who you are and how you handle relationships.

**The statistic you need to know:**

73% of couples who get back together after a breakup end up separating again within the first year. The main reason: **they return to the same patterns that caused the original breakup.**

You don't have to be part of that statistic. But to avoid it, you need tools that go beyond what you learned in this module.`
      },
      {
        title: "7.2 The 7 Advanced Triggers (Teaser)",
        content: `In Module 1 you learned the 3 basic triggers: Scarcity, Nostalgia, and Transformation. These are powerful for reconquest. **But to keep her obsessed with you long-term, there are 7 much deeper triggers.**

These advanced triggers operate at a deeper subconscious level. They don't just awaken interest; **they create emotional addiction**. When you master them, she doesn't just want to be with you; she feels like she **needs** to be with you.

**What these triggers can do:**

✅ Make her see you as her irreplaceable "soulmate"
✅ Create a connection so deep that thinking about leaving you causes her pain
✅ Maintain passion and attraction at high levels for years
✅ Prevent other men from being a real threat
✅ Turn her into your biggest admirer and defender

**A preview of what they include:**

- The Emotional Void Trigger
- The Progressive Investment Trigger
- The Protective Leader Trigger
- The Controlled Unpredictability Trigger
- And more...

Each of these triggers has specific application techniques, proven scripts, and real-life examples. They are the next level in relationship mastery.`
      },
      {
        title: "7.3 The 5 Common Post-Reconquest Traps (Teaser)",
        content: `Even if you apply everything you learned in this module perfectly, there are traps that can destroy your newly rebuilt relationship. These traps are subtle, and most men fall into them without realizing it.

**Trap 1: The Routine Relapse**
After a few weeks, the initial excitement fades. If you don't know how to maintain novelty, monotony returns and she starts doubting again.

**Trap 2: The "Already Won" Syndrome**
You think that because she came back, the work is done. You stop trying, you stop courting, and she notices. "He went back to being the same as before," she thinks.

**Trap 3: The Shadow of the Past**
Even if you try not to talk about the breakup, unprocessed resentments and wounds surface. Without the right tools, these ghosts destroy the relationship from within.

**Trap 4: The Third Player**
Other men don't disappear when she comes back to you. Without the right strategies, you'll always be vulnerable to someone appearing who "offers more."

**Trap 5: The Imbalanced Investment**
You keep trying while she gets comfortable. This imbalance generates resentment and eventually, another breakup.

Each of these traps has specific solutions taught at the next level.`
      },
      {
        title: "7.4 What You Need to Know to Avoid Failure",
        content: `**The uncomfortable truth few want to hear:**

The knowledge you have so far is enough to take the first steps. But relationships are not a quick "hack". They are a skill that requires continuous development.

Men who succeed long-term with women are not those who "were born with the gift". They are those who studied, practiced, and mastered the principles of attraction, connection, and relational dynamics.

**What this module gave you:**
- The foundations for reconquest
- The first emotional triggers
- Strategies for the first days
- An initial action plan

**What you still need:**
- Advanced triggers to maintain attraction
- Techniques to handle conflicts without destroying the relationship
- Strategies to be irreplaceable long-term
- Tools to maintain your perceived value constantly
- Frameworks for effective communication
- Methods to prevent infidelity and loss of interest

This knowledge is available. The question is whether you're willing to invest in obtaining it.`
      },
      {
        title: "7.5 Your Next Step",
        content: `You're at a crossroads. What you do now will determine whether you're part of the 28% who succeed long-term, or the 72% who fail.

**Option 1: Do Nothing**

You can stop here and hope that what you learned is enough. Sometimes it is. But the statistics aren't in your favor.

**Option 2: Continue Your Training**

Module 2 is designed to take you to the next level. It includes:
- The 7 Advanced Triggers in detail
- Proven scripts for every situation
- Emotional influence techniques
- Deep psychology of desire
- Real success cases
- Complete 9-day implementation plan

**What others who completed Module 2 say:**

"I not only got her back, I understood how relationships really work. Now I have control I never had." - Miguel, 29

"The advanced triggers changed everything. She looks at me differently now." - Carlos, 34

"Module 1 opened the door. Module 2 taught me how to stay inside." - Andrés, 31

**The decision is yours.**

You've already demonstrated that you're willing to learn and improve. The question is: will you stop halfway, or will you complete the transformation?

Your next step is clear. The only question is: will you take it?`
      }
    ]
  }
];

export const getLessonById = (id: number): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getNextLessonId = (currentId: number): number | null => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) return null;
  return lessons[currentIndex + 1].id;
};

export const getPreviousLessonId = (currentId: number): number | null => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex <= 0) return null;
  return lessons[currentIndex - 1].id;
};
