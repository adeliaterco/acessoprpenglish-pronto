export interface LessonSection {
  title: string;
  content: string;
}

export interface Module2Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: LessonSection[];
  imagePlaceholder: string;
  downloadables?: {
    pdf: string;
    checklist: string;
    scripts?: string;
  };
}

export const module2Lessons: Module2Lesson[] = [
  {
    id: 1,
    title: "Emotional Dominance - The Science",
    subtitle: "Master the art of emotional influence with scientific basis",
    icon: "🧠",
    imagePlaceholder: "[IMAGE: Brain diagram showing areas related to emotional dominance]",
    downloadables: {
      pdf: "lesson-1-emotional-dominance.pdf",
      checklist: "checklist-emotional-dominance.pdf"
    },
    sections: [
      {
        title: "1.1 What is Emotional Dominance?",
        content: `Emotional dominance is the ability to **influence another person's emotional state** consistently and predictably. It's not about control or negative manipulation, but about understanding how human emotions work and using that knowledge ethically.

When we talk about emotional dominance in the context of relationships, we refer to the ability to:

- **Stay calm** when she loses composure
- **Direct the conversation** toward emotionally favorable territories
- **Create positive emotional states** associated with your presence
- **Establish the frame** of the interaction naturally

Emotional dominance is NOT:
- Yelling or intimidating
- Malicious manipulation
- Controlling or possessing
- Ignoring her feelings

It's important to understand this distinction from the beginning. What you'll learn here is **applied psychology**, not control tactics. The goal is to create a healthy dynamic where both benefit.`
      },
      {
        title: "1.2 How It Works in the Brain (Neuroscience)",
        content: `To master emotions, we first need to understand how they're processed in the brain. The limbic system is the brain's emotional center, and within it, the **amygdala** plays a crucial role.

**The Emotional Circuit:**

1. **External stimulus** (your message, your presence, your voice)
2. **Processing in the amygdala** (threat or reward?)
3. **Neurotransmitter release** (dopamine, cortisol, oxytocin)
4. **Emotional response** (attraction, fear, connection)
5. **Resulting behavior** (approach or withdraw)

When you understand this circuit, you can design your interactions to activate desired responses. For example:

**Dopamine (The Desire Neurotransmitter):**
- Released with novelty and anticipation
- Creates the feeling of "wanting more"
- Activated by unpredictable rewards

**Oxytocin (The Bonding Hormone):**
- Released with physical contact and emotional intimacy
- Creates feelings of trust and connection
- Fundamental for long-term attachment

**Cortisol (The Stress Hormone):**
- In small doses, increases attention
- In excess, generates rejection
- Balance is key

Effective emotional dominance **maximizes dopamine and oxytocin while minimizing excessive cortisol**. It's a delicate balance that requires constant practice and calibration.`
      },
      {
        title: "1.3 Why It Works in 95% of Cases",
        content: `Studies show that emotional dominance has 95% effectiveness because **it appeals to deep evolutionary mechanisms** programmed in our brain.

**Reason 1: Perceived Safety**
Evolutionarily, women sought partners who could protect them. An emotionally stable man projects safety. When you stay calm in stressful situations, you activate her perception that you're a "safe haven."

**Reason 2: Natural Leadership**
Not to be confused with machismo. Natural leadership implies making decisions, having direction in life, and not emotionally depending on constant approval. This is attractive because it indicates resources (emotional, mental, potentially material).

**Reason 3: Differentiation**
Most men are emotionally reactive. When she expresses frustration, they react with more frustration. When she pulls away, they chase desperately. Being different in this aspect automatically places you in a superior category.

**Reason 4: Reward System Activation**
A man who's not completely available activates the brain's intermittent reward system. It's the same mechanism that makes gambling and social media addictive. Controlled uncertainty generates desire.

**Reason 5: Respect and Admiration**
It's difficult to respect someone who doesn't respect themselves. When you demonstrate emotional dominance, you automatically generate respect, and respect is the foundation of lasting attraction.`
      },
      {
        title: "1.4 The Difference Between Dominance and Aggression",
        content: `This is a **critical** distinction that many men don't understand. The line between effective dominance and destructive aggression may seem thin, but in reality, they're polar opposites.

**EMOTIONAL DOMINANCE:**
- Born from internal security
- Doesn't need to prove anything
- Stays calm under pressure
- Respects the other person's boundaries
- Seeks beneficial outcomes for both
- Expressed with firmness but without aggression
- Generates attraction and respect

**AGGRESSION:**
- Born from insecurity
- Constantly needs to demonstrate power
- Loses control under pressure
- Violates the other person's boundaries
- Seeks to "win" at the other's expense
- Expressed with hostility and threats
- Generates fear and resentment

**Practical examples:**

*Situation: She accuses you of not paying attention to her.*

❌ **Aggressive response:** "You always complain about everything! What more do you want me to do?"

✅ **Dominant response:** "I understand you feel that way. Tell me specifically what you'd like me to change" (with calm tone, eye contact, without defensiveness)

*Situation: She mentions that a coworker is attractive.*

❌ **Aggressive response:** "Oh yeah? Then why don't you go with him" (with sarcasm and hostility)

✅ **Dominant response:** "Makes sense, he's a decent guy" (without showing insecurity, naturally changing the topic)

Real dominance doesn't need defense because it doesn't feel threatened.`
      },
      {
        title: "1.5 How to Know If You're Being Dominant",
        content: `Self-evaluation is crucial for developing emotional dominance. Here are clear signs that you're on the right track:

**Signs that you ARE being dominant:**

✅ You maintain your position without raising your voice
✅ You don't feel obligated to respond immediately
✅ You can be in silence without discomfort
✅ Your decisions don't depend on her approval
✅ You can say "no" without feeling guilty
✅ You don't chase when she pulls away
✅ Your plans don't change for her whims
✅ She seeks your approval more than you seek hers
✅ You maintain eye contact comfortably
✅ Your body language is open and relaxed

**Signs that you're NOT being dominant:**

❌ You explain your decisions excessively
❌ You change your mind to avoid conflict
❌ You always respond to messages immediately
❌ You constantly cancel plans for her
❌ You constantly seek her validation
❌ You frequently get defensive
❌ You avoid difficult topics for fear of her reaction
❌ Your emotional state depends on her mood
❌ You lower your gaze when there's tension
❌ Your body posture shrinks in her presence

**The 30-second test:**

Before every important interaction, ask yourself: "Am I doing this from security or from fear?" If the answer is fear, pause and recalibrate.`
      },
      {
        title: "1.6 Practical Exercises",
        content: `Emotional dominance is not learned just by reading. It requires **deliberate practice**. Here are exercises for the next 7 days:

**Days 1-2: The Mirror Exercise**
Stand in front of the mirror for 5 minutes daily. Maintain eye contact with yourself. Practice saying phrases like "No, thanks" or "That doesn't work for me" with a firm but relaxed tone. Observe your posture and correct if you're hunched.

**Days 3-4: The Silence Exercise**
In casual conversations, practice not filling silences. When someone finishes speaking, wait 2-3 seconds before responding. You'll notice the other person often continues speaking or values your response more.

**Days 5-6: The "No" Exercise**
Say "no" to at least 3 small requests per day. It could be declining an extra coffee, an additional work task, or an invitation that doesn't interest you. Do it without giving extensive explanations.

**Day 7: The Pause Exercise**
When you receive a message from her (or anyone), deliberately wait before responding. Not to play games, but to break the habit of immediate response. Use that time to evaluate what response best serves your objectives.

**Continuous Exercise: The Emotional Journal**
Every night, write:
1. A situation where you stayed calm
2. A situation where you lost your calm
3. What you would do differently

This record will show you patterns and areas for improvement.`
      },
      {
        title: "1.7 Common Mistakes",
        content: `Even with the best intention, many men make these mistakes when trying to develop emotional dominance:

**Mistake 1: Confusing coldness with dominance**
Being cold and distant is not dominance, it's disconnection. Dominance implies being present but not reactive. You can be warm and dominant simultaneously.

**Mistake 2: Exaggerating at the beginning**
Some men, upon discovering these concepts, go to the extreme. They become emotionless robots or act artificially. Dominance should be natural, not acted.

**Mistake 3: Using dominance as punishment**
Emotionally withdrawing every time she does something you don't like is manipulation, not dominance. Dominance is a constant state, not a tool for retaliation.

**Mistake 4: Expecting immediate results**
Changing ingrained patterns takes time. If you've been emotionally reactive for years, don't expect to transform in a week. Patience is part of dominance.

**Mistake 5: Forgetting calibration**
Dominance without calibration becomes rigidity. You need to read situations and adjust your intensity. Sometimes, showing calculated vulnerability is the dominant move.

**Mistake 6: Applying only with her**
Dominance should be part of your identity, not a mask for relationships. If you're dominant with her but submissive at work or with friends, the incongruence will be noticed.

**Mistake 7: Neglecting self-care**
Emotional dominance requires energy. If you're exhausted, stressed, or neglecting your health, your ability to maintain composure will dramatically diminish.

Remember: **True dominance is invisible**. When you execute it perfectly, no one notices you're doing something different. They simply perceive you as someone secure and attractive.`
      }
    ]
  },
  {
    id: 2,
    title: "The 7 Advanced Triggers",
    subtitle: "Activate the psychological levers that generate irresistible desire",
    icon: "🎯",
    imagePlaceholder: "[IMAGE: Diagram of the 7 interconnected triggers forming an influence system]",
    downloadables: {
      pdf: "lesson-2-advanced-triggers.pdf",
      checklist: "checklist-triggers.pdf"
    },
    sections: [
      {
        title: "2.1 Introduction to Advanced Triggers",
        content: `In Module 1 you learned 3 basic triggers. Now we're going to dive deep into **7 advanced triggers** that, when combined correctly, create a practically irresistible influence system.

These triggers are based on decades of research in social psychology and human behavior. They're not cheap tricks, they're fundamental principles of how the human mind works.

**The difference between basic and advanced triggers:**

Basic triggers (scarcity, nostalgia, transformation) work on the emotional surface. Advanced triggers operate at deeper levels, activating almost automatic responses that the person cannot consciously resist.

**Important:** These triggers are powerful tools. With power comes responsibility. Use them to create genuine connections, not to manipulate or harm. The goal is to build a relationship where both win.`
      },
      {
        title: "2.2 Trigger 1: Advanced Scarcity",
        content: `You already know basic scarcity: not always being available. But advanced scarcity goes much further.

**Emotional Scarcity:**
You not only limit your physical time but your emotional investment. This means:
- Not sharing every thought you have
- Keeping information about your life to reveal gradually
- Not constantly seeking emotional validation
- Maintaining aspects of your life that are only yours

**Attention Scarcity:**
Your complete and undivided attention is a valuable resource. Giving it all the time devalues it.
- Practice "selective presence": when you're there, you're 100% there
- When you're not there, you're really not there (no constant messages)
- Make your moments of total attention memorable

**Commitment Scarcity:**
Don't commit easily. Every commitment should be earned.
- Don't promise things you can't deliver
- When you promise something, always keep it
- Make her value when you decide to commit

**Practical application:**
"I have plans Saturday, but I could free up if there's something special" is more powerful than "I'm free whenever you want."`
      },
      {
        title: "2.3 Trigger 2: Strategic Urgency",
        content: `Urgency creates immediate action. Without urgency, people postpone indefinitely.

**Types of Urgency:**

1. **Temporal urgency:** "I'll be in town this weekend"
2. **Opportunity urgency:** "I got a reservation at that place you mentioned"
3. **Competitive urgency:** (subtle) Mentioning you have options without being obvious
4. **Change urgency:** "I'm at a moment in my life where things are changing"

**How to create urgency without seeming desperate:**

❌ "I need to see you TODAY or I'm going to explode"
✅ "I have something to tell you, but it has to be in person. Are you free this week?"

❌ "Why aren't you responding? Are you with someone?"
✅ *Silence* (absence creates more urgency than pressure)

**The window of opportunity principle:**
Make every interaction seem like a window that can close. Not threateningly, but naturally. "I'm going to be very busy the next few weeks with the project" creates the feeling that now is the time to connect.

**Urgency vs. Pressure:**
Urgency is an invitation with a deadline. Pressure is a demand without respect for her autonomy. One attracts, the other repels.`
      },
      {
        title: "2.4 Trigger 3: Positional Authority",
        content: `Authority generates automatic trust. When you're perceived as an authority, your words carry more weight.

**How to build authority:**

1. **Demonstrated expertise:** Be good at something and show it without bragging
2. **Character consistency:** Say what you're going to do and do it
3. **Clear decisions:** Don't waver. Make decisions and stand by them
4. **Deep knowledge:** When you talk about something, show that you know
5. **Valuable social network:** Surround yourself with people who reinforce your value

**Authority in communication:**

- Speak with conviction, not with questioning
- "We'll see each other Friday" vs. "Would you like to meet Friday?"
- Reduce qualifiers: "I think", "maybe", "I don't know if"
- Use strategic pauses instead of filling silences

**Authority without arrogance:**

The line is fine but clear. Authority says: "I know what I'm doing." Arrogance says: "I'm better than you."

Practice "humble authority": expert but accessible, confident but not condescending.

**Social authority:**
When others treat you with respect and seek your opinion, she notices. Your perceived value automatically increases when third parties validate your authority.`
      },
      {
        title: "2.5 Trigger 4: Strategic Reciprocity",
        content: `Humans have a deep need to reciprocate when they receive something. This principle, extensively studied by Robert Cialdini, is one of the most powerful forces in relationships.

**Emotional Reciprocity:**
When you give first (without visible expectation), you create an unconscious emotional "debt."

**Ways to activate reciprocity:**

1. **Give value without asking for anything:**
   - Send useful information related to her interests
   - Connect her with people who can help her
   - Remember details and act on them

2. **Quality time investment:**
   - When you're together, be completely present
   - Listen actively (this is a gift in today's distracted world)

3. **Support in difficult times:**
   - Be available when it really matters
   - Not to earn points, but genuinely

**The reciprocity trap:**

❌ Giving expecting something specific in return
❌ Reminding her what you've given ("After everything I did...")
❌ Giving in excess (creates discomfort, not gratitude)

✅ Giving in a calibrated and genuine way
✅ Allowing reciprocity to flow naturally
✅ Not keeping score publicly

**The ideal ratio:**
Studies suggest that giving approximately 60% and receiving 40% creates the most sustainable dynamic. Giving too much positions you as "desperate." Giving too little positions you as "selfish."`
      },
      {
        title: "2.6 Trigger 5: Consistency and Identity",
        content: `People have a deep need to be consistent with their identity and previous commitments.

**The principle:**
Once someone takes a position or makes a commitment, they will actively seek to maintain that consistency.

**Application in reconquest:**

1. **Micro-commitments:**
   Get her to take small actions toward you:
   - Asking her for a small favor
   - Inviting her to give an opinion on something
   - Having her suggest the place to meet

   Each small action in your direction makes the next more likely.

2. **Activate her positive identity:**
   - "I always admired how adventurous you are" (she'll want to confirm that identity)
   - "You're one of the few people who really understands [topic]"
   - Refer to qualities she values in herself

3. **Remember past commitments:**
   - "I remember when you said you valued honesty..."
   - Not manipulatively, but as natural context

**The "foot in the door" technique:**
Start by asking for something small that's easy to accept. Once accepted, the chances of accepting something bigger increase significantly.

Example: "Can you recommend me a coffee shop in your area?" → (after the recommendation) → "Why don't you show it to me in person?"

**Important:** This works because it appeals to her desire to see herself as someone consistent and reliable, not because you're tricking her.`
      },
      {
        title: "2.7 Trigger 6: Strategic Social Proof",
        content: `We are social creatures. When we see others value something, we automatically perceive it as more valuable.

**Forms of social proof:**

1. **Direct social proof:**
   - Photos at social events (without overdoing it)
   - Casual mentions of activities with friends
   - Stories that include positive interactions with others

2. **Implicit social proof:**
   - Not always being available (implies you have a life)
   - Casually mentioning plans with other people
   - Having her see how others treat you

3. **Authority social proof:**
   - Professional recognition
   - Opinions from people she respects

**Female social proof:**
This is delicate but powerful territory. When other women show interest in you, your perceived value increases exponentially. DON'T fabricate it, DON'T be obvious, but don't hide it either.

- Casually mention a positive interaction with another woman
- Let her see (naturally) that other women find you interesting
- DON'T use this to create obvious jealousy

**Anti-social proof:**
Watch out for the opposite. If you convey that no one values you, you activate the reverse mechanism. Phrases like "Nobody understands me" or "I'm always alone" are destructive.

**Golden rule:** The most powerful social proof is what she discovers on her own, not what you present to her.`
      },
      {
        title: "2.8 Trigger 7: Affinity and Deep Connection",
        content: `Affinity is the emotional glue. Without it, all other triggers are empty.

**Components of affinity:**

1. **Perceived similarity:**
   - Shared values (most important)
   - Similar experiences
   - Compatible sense of humor
   - Aligned life vision

2. **Familiarity:**
   - Repeated exposure generates comfort
   - Shared rituals (places, activities, phrases)
   - Common history

3. **Physical attraction and chemistry:**
   - Synchronized body language
   - Appropriate sexual tension
   - Calibrated physical contact

**How to deepen affinity:**

- **Real active listening:** Not just waiting for your turn to speak
- **Strategic vulnerability:** Sharing something personal (calibrated)
- **Shared experiences:** Creating new memories together
- **Inside humor:** References only you two understand
- **Genuine support:** Being present in important moments

**Affinity as a multiplier:**
Without affinity, other triggers can feel manipulative. With affinity, everything else flows naturally.

Think of affinity as the "permission" to use other triggers. The stronger your genuine connection, the more effective all other principles will be.`
      },
      {
        title: "2.9 How to Combine the 7 Triggers",
        content: `Real power comes from **strategic combination**. Here's how to integrate the 7 triggers into a coherent strategy:

**Phase 1: Establish Base (Days 1-3)**
- **Affinity:** Reconnect emotionally without pressure
- **Authority:** Show you've grown and have direction
- **Social proof:** Let her see (naturally) that you have an active life

**Phase 2: Create Interest (Days 4-7)**
- **Scarcity:** Don't be available all the time
- **Reciprocity:** Give value without visible expectation
- **Consistency:** Get her to make small commitments

**Phase 3: Intensify (Days 8-14)**
- **Urgency:** Create windows of opportunity
- **All triggers:** Should already be operating simultaneously

**Integrated example:**

Message: "Hey, I just saw [something related to her interest] and thought of you. By the way, I have an event this Saturday, but I think I can sneak away for a bit before if you want to grab a coffee. What do you think?"

This message activates:
- Affinity (you thought of her)
- Reciprocity (you share valuable information)
- Social proof (you have an event)
- Scarcity (you only have a bit of time)
- Urgency (specific date)
- Consistency (she must accept or reject)

**The balance rule:**
Never activate more than 3-4 triggers in a single interaction. Too many feel manipulative. Distribute activation over time.`
      }
    ]
  },
  {
    id: 3,
    title: "Power Scripts",
    subtitle: "20 proven messages for every critical situation",
    icon: "📝",
    imagePlaceholder: "[IMAGE: Collection of message examples with effectiveness analysis]",
    downloadables: {
      pdf: "lesson-3-power-scripts.pdf",
      checklist: "checklist-scripts.pdf",
      scripts: "templates-complete-scripts.pdf"
    },
    sections: [
      {
        title: "3.1 What is a Power Script?",
        content: `A power script is a **strategically designed message or communication sequence** to produce a specific emotional response.

They're not templates to blindly copy and paste. They're proven structures that you must adapt to your situation, your personality, and your specific relationship.

**Characteristics of an effective script:**

1. **Has a clear objective:** Each script is designed to produce a specific result
2. **Activates emotions:** Appeals to the limbic system, not just the rational
3. **Is calibrated:** Appropriate for the stage of the relationship
4. **Seems natural:** Doesn't sound like a message copied from the internet
5. **Leaves room:** Invites a response without demanding it

**How to use these scripts:**

- Read each script and understand its structure
- Identify what situation you're facing
- Adapt the language to your personal style
- Test and adjust according to responses

**IMPORTANT:** These scripts are tools, not crutches. The goal is to internalize them until strategic communication becomes natural to you.`
      },
      {
        title: "3.2 First Contact Scripts",
        content: `**Script 1: The Positive Memory**
*Objective: Reopen communication in a non-threatening way*

"Just passed by [significant place] and remembered [specific positive moment]. Hope you're doing well."

*Why it works:* Activates nostalgia without pressure. Asks for nothing. Leaves the door open.

---

**Script 2: The Added Value**
*Objective: Position yourself as a source of value*

"Saw this and thought of you [link/photo/information relevant to her interests]. I know you love [topic]. Have a good day."

*Why it works:* You show you know her and give her something useful. Without visible expectation.

---

**Script 3: The Friendly Closure**
*Objective: Establish neutral communication post-breakup*

"Hey, I know things ended a certain way, but I wanted you to know I wish you the best. If you ever need anything, I'm here."

*Why it works:* Shows emotional maturity. Removes pressure. Establishes your elevated position.

---

**Script 4: The Genuine Consultation**
*Objective: Create legitimate reason to contact*

"Do you remember the name of that [restaurant/book/place] you told me about? I need it for [legitimate reason]. Thanks in advance."

*Why it works:* Concrete, non-emotional reason. Easy to respond to. Opens door to conversation.`
      },
      {
        title: "3.3 Scripts to Create Urgency",
        content: `**Script 5: The Window of Opportunity**
*Objective: Create sense of limited time*

"I'll be in [her zone/city] only this weekend. If you have a moment for a coffee, let me know. If not, no problem."

*Why it works:* Temporal urgency + no pressure. Shows you have a life.

---

**Script 6: The Imminent Change**
*Objective: Suggest things are going to change*

"I have some important news. It's not something to talk about by message, but I'd like to tell you. Do you have a moment this week?"

*Why it works:* Creates intense curiosity. Natural urgency. Requires in-person meeting.

---

**Script 7: The Unique Opportunity**
*Objective: Link the meeting to something special*

"I got [tickets/reservation/access] for [something she values]. It's on [date]. Would you like to come?"

*Why it works:* Concrete value + specific date + generosity.

---

**Script 8: The Limited Time**
*Objective: Establish that your availability is finite*

"The next few weeks I'm going to be very focused on [project/work/trip]. Before I disconnect, I wanted to know how you're doing."

*Why it works:* Subtly indicates future scarcity. Prioritizes current contact.`
      },
      {
        title: "3.4 Scripts to Intensify",
        content: `**Script 9: The Funny Memory**
*Objective: Evoke positive shared emotions*

"I just remembered when [specific funny moment]. I still laugh about that. Good times."

*Why it works:* Activates positive associations. Creates emotional connection.

---

**Script 10: The Subtle Challenge**
*Objective: Activate her competitiveness*

"I bet you still can't [something you used to do together/skill she had]. I've gotten pretty good."

*Why it works:* Friendly challenge. Invites her to prove something. Creates playful dynamic.

---

**Script 11: The Calculated Vulnerability**
*Objective: Create emotional intimacy*

"Lately I've been thinking a lot about [personal topic related to the relationship]. I think I understood some things I didn't see before."

*Why it works:* Shows growth. Invites deeper conversation. It's not an apology, it's evolution.

---

**Script 12: The Double Meaning**
*Objective: Introduce subtle sexual tension*

"I was thinking about that time at [place] when [moment with romantic/sexual charge]. Some memories aren't easily forgotten."

*Why it works:* Activates emotional and physical memory. Subtle but clear.`
      },
      {
        title: "3.5 Scripts to Create Admiration",
        content: `**Script 13: The Shared Achievement**
*Objective: Show your growth without bragging*

"Remember when we used to talk about [goal/dream]? I finally made it happen. Just wanted you to know because you always believed in it."

*Why it works:* Shows progress. Includes her in your success. Activates pride.

---

**Script 14: The Visible Transformation**
*Objective: Communicate positive change*

"I've been working on myself a lot lately. [Specific change: hobby, fitness, project]. I feel in a good place."

*Why it works:* Shows you're not stagnant. Attractive without being about her.

---

**Script 15: The Authentic Recognition**
*Objective: Make her feel seen and valued*

"I always admired how [specific quality of hers]. I don't know many people like that."

*Why it works:* Specific and genuine compliment. Differentiation. Validation.`
      },
      {
        title: "3.6 Scripts to Resolve Conflicts",
        content: `**Script 16: The Peace Bridge**
*Objective: De-escalate tension without yielding position*

"I know things got tense. I don't agree with everything, but I value what we had. Can we talk without fighting?"

*Why it works:* Shows maturity. Doesn't ask for empty apologies. Opens dialogue.

---

**Script 17: Partial Responsibility**
*Objective: Acknowledge mistakes without self-destroying*

"I've thought a lot and I recognize that [specific mistake of yours]. It wasn't fair. But I also think there were things on both sides that didn't work."

*Why it works:* Shows capacity for reflection. Doesn't make you the sole villain.

---

**Script 18: The New Beginning**
*Objective: Propose a reset without erasing the past*

"What if we started from scratch? Not as if nothing happened, but knowing what worked and what didn't. As different people."

*Why it works:* Concrete proposal. Acknowledges the past. Offers a different future.`
      },
      {
        title: "3.7 Closing and Consolidation Scripts",
        content: `**Script 19: The Meeting Proposal**
*Objective: Go from digital to in-person*

"There's something I want to tell you, but I'd rather do it in person. When do you have a moment this week?"

*Why it works:* Creates anticipation. Shows it's important. Requires action.

---

**Script 20: The Emotional Close**
*Objective: Consolidate the reconnection*

"I don't know exactly where this is going, but I like that we're talking again. I wanted you to know."

*Why it works:* Honest without being desperate. Shows appreciation. Doesn't pressure.

---

**FINAL NOTE on scripts:**

These 20 scripts cover the most common situations. But remember:

1. **Always adapt** the language to your style
2. **Never send** a script that doesn't sound like you
3. **Observe responses** and adjust your strategy
4. **Less is more**: Don't bombard with messages
5. **Timing matters**: The best script at the wrong time fails

Strategic communication is an art that improves with practice. Use these scripts as a starting point, not a final destination.`
      }
    ]
  },
  {
    id: 4,
    title: "Emotional Influence Techniques",
    subtitle: "7 advanced techniques to create deep connections",
    icon: "🎭",
    imagePlaceholder: "[IMAGE: Diagram of the 7 emotional influence techniques with visual examples]",
    downloadables: {
      pdf: "lesson-4-influence-techniques.pdf",
      checklist: "checklist-techniques.pdf"
    },
    sections: [
      {
        title: "4.1 Introduction to Ethical Emotional Influence",
        content: `Emotional influence is the ability to **positively affect another person's emotional state**. When used ethically, it creates deeper and more satisfying relationships for both parties.

**What makes influence ethical?**

1. **Positive intention:** Your goal is to create a genuine connection, not exploit
2. **Mutual benefit:** Both win in the interaction
3. **Underlying transparency:** You don't deceive about who you fundamentally are
4. **Respect for autonomy:** She always has the option to walk away
5. **No harm:** Your actions don't cause psychological or emotional damage

**The difference from manipulation:**

Manipulation seeks one-sided benefit at the other's expense. Ethical influence seeks to create value for both.

Think of a salesperson who helps you find exactly what you need vs. one who pressures you to buy something that doesn't serve you. Both "influence," but one does it ethically.

The techniques you'll learn here are tools. Like a knife, they can cut food or cause harm. The ethics is in how you use them.`
      },
      {
        title: "4.2 Technique 1: The Emotional Mirror",
        content: `The emotional mirror is the technique of **subtly reflecting the other person's emotions** to create rapport and connection.

**How it works:**

The human brain has "mirror neurons" that activate when we see emotions in others. When you reflect someone's emotions, their brain registers: "This person understands me."

**Practical application:**

1. **Observe her current emotional state**
   - Is she animated? Frustrated? Thoughtful? Excited?

2. **Match your energy (calibrated)**
   - If she's enthusiastic, don't respond with monotony
   - If she's melancholic, don't arrive hyperactive
   - Adjust your tone, speed, and energy

3. **Reflect verbally**
   - "It sounds like that has you excited"
   - "I can see that was difficult"

4. **Reflect physically** (if in person)
   - Similar posture (subtle, not obvious)
   - Similar gestures
   - Similar breathing rhythm

**Example:**

Her: "I'm so frustrated with my job, they don't value me"

❌ Response without mirror: "Well, maybe you should look for another job"

✅ Response with mirror: "That sounds really frustrating. Working so hard and not feeling recognized... [pause]... What specifically happened?"

The second response makes her feel understood before offering solutions.`
      },
      {
        title: "4.3 Technique 2: Selective Validation",
        content: `Selective validation consists of **specifically recognizing and reinforcing behaviors and qualities you want to see more of**.

**The principle:**

What you validate grows. What you ignore diminishes. This is based on basic operant conditioning, but applied to relationships.

**How to apply it:**

1. **Identify desirable behaviors:**
   - When she reaches out to you first
   - When she does something you like
   - When she shows qualities you value

2. **Validate immediately:**
   - "I really appreciate when you take the initiative like that"
   - "I like when you share things with me"
   - "That quality about you, the way you see [topic], is attractive"

3. **Be specific:**
   - Generic: "You're the best"
   - Specific: "The way you handled that situation was really smart"

**What NOT to validate:**

- Behaviors you don't want to encourage
- Moments of disrespect toward you
- Emotional games or tests

**The art of not reacting:**

Sometimes not validating is as powerful as validating. If she does something you don't like, simply don't give it attention. No drama, no reaction. Just continue with what you were doing.

This teaches that those behaviors don't produce results.`
      },
      {
        title: "4.4 Techniques 3 and 4: Attention Control and Perceived Competition",
        content: `**TECHNIQUE 3: STRATEGIC ATTENTION CONTROL**

Your attention is one of your most valuable resources. How you distribute it communicates your value.

**Implementation:**

1. **Complete attention when present:**
   No phone, no distractions. When you're with her, you're 100% there.

2. **Strategic absence:**
   You're not always available. You have a life, projects, friends.

3. **Attention as reward:**
   Give your best attention when she behaves the way you value.

4. **Attention as calibration:**
   If she disrespects or tests you, your attention decreases (without drama).

**The rule of investment:**
Don't invest more in the interaction than she does. If she sends 3 words, you send 3 words. If she extends the conversation, you can too.

---

**TECHNIQUE 4: PERCEIVED COMPETITION**

Perceived competition is the **subtle suggestion that you have other options** without ever being obvious or insulting about it.

**Why it works:**

Evolutionarily, a man with options is a valuable man. You don't need to have multiple women, but she shouldn't feel like she's your only option in the universe.

**How to generate perceived competition:**

1. **Have an active social life:**
   - Mention friends, activities, events
   - Don't always be available
   - Share (naturally) social photos

2. **Maintain your appearance:**
   - Dress well even when you're not seeing her
   - Take care of your physique
   - Project that you value yourself

3. **Don't dismiss female attention:**
   - If other women treat you well, don't hide it
   - Don't brag, but don't pretend it doesn't exist
   - Maintain genuine female friendships

4. **Never use it as a weapon:**
   - ❌ "Other women do appreciate what I do"
   - ❌ Mentioning exes or potentials to cause jealousy
   - ✅ Simply having a life that includes other people

**The balance:**

Obvious competition → You look insecure trying to compensate
No competition → You look without options or desperate
Subtle competition → You look naturally valuable

**Test:** If she asked you directly about other women, your response should be honest but unconcerned, not defensive.`
      },
      {
        title: "4.5 Techniques 5, 6 and 7: Strategic Vulnerability and Emotional Challenge",
        content: `**TECHNIQUE 5: STRATEGIC VULNERABILITY**

Strategic vulnerability is **sharing personal aspects in a calculated way** to create intimacy without seeming weak.

**The balance:**

- Too little vulnerability → You seem closed, inaccessible, cold
- Too much vulnerability → You seem needy, weak, uncontained
- Calibrated vulnerability → You seem human, deep, trustworthy

**What to share:**

✅ Fears you've overcome (past)
✅ Difficult moments that shaped you
✅ Dreams and aspirations (not desperation)
✅ Learnings from mistakes (showing growth)

❌ Current unresolved insecurities
❌ Urgent emotional needs
❌ Comparisons with other men
❌ Desperation about the relationship

**Timing:** Share vulnerability after demonstrating strength, not before.

---

**TECHNIQUE 6: THE EMOTIONAL CHALLENGE**

The emotional challenge is **not letting her get completely comfortable** by maintaining productive tension.

**Ways to challenge:**

1. **Your own opinions:** Not agreeing just to please
2. **Clear standards:** Knowing what you tolerate and what you don't
3. **Expectations:** Expecting something from her, not just giving
4. **Provocative humor:** Jokes that tease her (without insulting)

**Example:**

Her: "I think [opinion you disagree with]"

❌ "Yes, you're right" (to avoid conflict)
✅ "Interesting. I see it differently because..." (with a smile)

A well-executed challenge generates respect. She wants someone who makes her think, not someone who says yes to everything.`
      },
      {
        title: "4.6 Ethics and Limits",
        content: `Everything you've learned in this lesson are powerful tools. Like any powerful tool, it comes with responsibility.

**Clear ethical limits:**

1. **Never use these techniques to:**
   - Force someone to do something they don't want
   - Damage another person's self-esteem
   - Create unhealthy psychological dependencies
   - Isolate someone from their loved ones
   - Exploit emotionally or financially

2. **Signs you've crossed the line:**
   - She shows constant anxiety about you
   - She has abandoned important aspects of her life for you
   - She's afraid of your reaction
   - You've lied about who you fundamentally are
   - You feel like you "win" at her expense

3. **The mirror test:**
   Ask yourself: "Would I be proud of how I act if someone I respect saw it?"

**The real objective:**

These techniques are to **level the playing field** and create genuine connections, not to control or dominate. The ultimate goal is a relationship where:

- Both feel valued
- There's mutual respect
- Communication is honest
- Power is balanced
- Both grow as people

If you use these tools correctly, you won't need to use them indefinitely. Eventually, genuine connection replaces conscious strategy.`
      }
    ]
  },
  {
    id: 5,
    title: "Deep Psychology",
    subtitle: "Understand how her mind works at a deep level",
    icon: "🔬",
    imagePlaceholder: "[IMAGE: Diagram of the 3 brains and their functions in relationships]",
    downloadables: {
      pdf: "lesson-5-deep-psychology.pdf",
      checklist: "checklist-psychology.pdf"
    },
    sections: [
      {
        title: "5.1 How the Female Brain Works",
        content: `Understanding the female brain is not about stereotypes or simplistic generalizations. It's about comprehending the real neurobiological differences that influence how women process emotions, relationships, and connections.

**Key differences backed by neuroscience:**

1. **Greater connectivity between hemispheres:**
   The corpus callosum (which connects brain hemispheres) is typically thicker in women, allowing more fluid integration of emotional and rational information.

2. **Greater activity in emotional areas:**
   The limbic system (emotional center) tends to be more active, meaning emotions play a more prominent role in decision-making.

3. **Greater emotional memory:**
   Women tend to remember emotional events in more detail and for longer. This means emotional moments you create (positive or negative) stay longer.

4. **Greater social reading capacity:**
   The female brain is typically better at reading subtle social cues, facial expressions, and tone of voice.

**Practical implications:**

- Your words matter, but your tone and body language matter more
- Emotional moments you create are long-term investments
- She will probably detect inconsistencies you think are invisible
- The emotional context of a conversation may be more important than the content`
      },
      {
        title: "5.2 The 3 Brain Systems",
        content: `The triune brain model, developed by Paul MacLean, divides the brain into three systems that evolved at different times. Understanding each allows you to communicate more effectively.

**1. The Reptilian Brain (Survival)**
- Controls: Breathing, heart rate, basic instincts
- Responds to: Safety, threats, resources
- In relationships: Can this man protect me? Is he a threat or a resource?

**2. The Limbic Brain (Emotions)**
- Controls: Emotions, emotional memory, bonds
- Responds to: Connection, belonging, memories
- In relationships: How does he make me feel? Do I feel connected? Is there chemistry?

**3. The Neocortex (Rationality)**
- Controls: Logical thinking, planning, language
- Responds to: Arguments, pros/cons, future
- In relationships: Does this relationship make sense? Is it a good decision?

**Processing order:**

When you communicate, information passes through all three brains in order: Reptilian → Limbic → Neocortex.

This means that before she logically evaluates what you say, she has already processed:
1. Am I safe? (reptilian)
2. How do I feel? (limbic)

If you fail at the first two levels, logic doesn't matter.`
      },
      {
        title: "5.3 How to Activate Each System",
        content: `**Activating the Reptilian Brain (Safety):**

- **Posture and presence:** Take up space, move calmly
- **Deep and measured voice:** Transmits control
- **Firm eye contact:** Shows you're not a threat
- **Safe environment:** Public places initially, don't pressure
- **Consistency:** Be predictable in your fundamental character

**Activating the Limbic Brain (Emotions):**

- **Stories:** The emotional brain responds to narratives, not data
- **Shared experiences:** Create memorable moments
- **Emotional variety:** Take her through a range of emotions (laughter, intrigue, tenderness)
- **Physical sensations:** Environment, music, food, touch
- **Positive memories:** Activate memories of good times

**Activating the Neocortex (Logic):**

- **Future vision:** Show you have plans and direction
- **Practical compatibility:** Aligned values, goals, lifestyle
- **Demonstrated stability:** Evidence that you're a "good investment"
- **Clear communication:** Express what you want and why

**The ideal sequence:**

1. First, make her feel safe (reptilian)
2. Then, create emotional connection (limbic)
3. Finally, present the rational case (neocortex)

If you try to convince her rationally without having activated the other levels, it's like building a house without foundations.`
      },
      {
        title: "5.4 Key Neurotransmitters",
        content: `Neurotransmitters are the brain's chemical messengers. Understanding which ones control attraction and attachment allows you to design interactions that naturally activate them.

**1. Dopamine (The Desire Neurotransmitter)**

- **Function:** Creates the feeling of wanting, anticipation, motivation
- **Released with:** Novelty, unpredictable rewards, anticipation
- **In relationships:** It's what makes her "want more of you"

*How to activate it:*
- Be unpredictable (in a good way)
- Create anticipation before meetings
- Introduce novelty regularly
- Generate positive surprises

**2. Oxytocin (The Bonding Hormone)**

- **Function:** Creates feeling of trust, connection, attachment
- **Released with:** Physical touch, emotional intimacy, prolonged gazes
- **In relationships:** It's what makes her feel "connected" to you

*How to activate it:*
- Calibrated physical contact
- Deep conversations
- Sustained eye contact
- Being genuinely present

**3. Serotonin (The Well-being Neurotransmitter)**

- **Function:** Creates feeling of stable happiness, satisfaction
- **Released with:** Recognition, achievements, belonging
- **In relationships:** It's what makes the relationship "feel good"

*How to activate it:*
- Make her feel valued and recognized
- Create a sense of belonging
- Emotional stability in your presence`
      },
      {
        title: "5.5 The Attachment Cycle",
        content: `Emotional attachment follows a predictable cycle that, once understood, you can positively influence.

**Phase 1: Initial Attraction**
- Dominant: Dopamine, norepinephrine
- Characteristics: Excitement, anticipation, intrusive thoughts about you
- Duration: Weeks to a few months

**Phase 2: Bond Building**
- Dominant: Oxytocin, vasopressin
- Characteristics: Growing intimacy, trust, vulnerability
- Duration: Months

**Phase 3: Stable Attachment**
- Dominant: Serotonin, endorphins
- Characteristics: Comfort, security, satisfaction
- Duration: Long-term

**The problem:**
Many relationships fail in the transition from Phase 1 to Phase 2 because men don't know how to maintain dopamine while building oxytocin.

**The solution:**
Maintain elements of novelty and anticipation (dopamine) while building intimacy and trust (oxytocin). They're not mutually exclusive.

**In the reconquest context:**
When you win her back, you're essentially restarting the cycle. You have the advantage of shared history (residual oxytocin) but need to reactivate attraction (new dopamine).

This means: Don't try to go back to exactly how it was. Offer something new while honoring what worked.`
      },
      {
        title: "5.6 The Psychology of Desire",
        content: `Desire is different from love. You can love someone without desiring them, and you can desire someone without loving them. For a complete relationship, you need both.

**The 3 components of desire:**

1. **Physical attraction:**
   Although not the only thing, it's still important. Take care of your appearance.

2. **Sexual tension:**
   The difference between friends and lovers. Requires polarity, not total equality.

3. **Mystery:**
   The completely known doesn't generate desire. There must always be something to discover.

**Why desire diminishes:**

- **Too much familiarity:** Routine kills mystery
- **Loss of polarity:** When you become too "safe" and predictable
- **Lack of tension:** Without productive conflict or challenge
- **Excessive dependency:** When you need more than you give

**How to keep desire alive:**

- **Maintain your own life:** Independent interests, friends, goals
- **Create anticipation:** Don't always be available
- **Surprise:** Break routine regularly
- **Healthy tension:** Don't resolve all conflicts immediately
- **Work on yourself:** A man who keeps growing stays interesting

**The most common mistake:**
Believing that more love = more desire. Sometimes, giving too much kills desire because it eliminates necessary tension.`
      },
      {
        title: "5.7 How to Read Emotions",
        content: `The ability to read her emotions gives you crucial information to calibrate your actions.

**Signs of positive interest:**

- **Eyes:** Dilated pupils, prolonged eye contact, frequent glances
- **Body:** Oriented toward you, leaning in, casual touches
- **Voice:** Higher pitch, easy laughter, speaks faster
- **Behavior:** Seeks you out, responds quickly, asks questions

**Signs of discomfort/disinterest:**

- **Eyes:** Avoids eye contact, looks toward exits
- **Body:** Crossed arms, oriented outward, distance
- **Voice:** Monosyllabic, flat tone, short answers
- **Behavior:** Looks at phone, looks for excuses to leave

**Signs of internal conflict (good for you):**

When she shows interest but also resistance, it means she's processing. Examples:
- She tells you she shouldn't see you but keeps talking
- She says it's a bad idea but doesn't hang up
- She physically distances but keeps looking at you

**What to do with the information:**

- **Clear interest:** Advance with confidence
- **Clear disinterest:** Step back, recalibrate
- **Internal conflict:** Stay calm, don't pressure, let her process

**Practice:**
Start observing these signs in all interactions, not just with her. Developing this reading ability will serve you for life.`
      }
    ]
  },
  {
    id: 6,
    title: "Success Cases",
    subtitle: "5 real stories analyzed step by step",
    icon: "🏆",
    imagePlaceholder: "[IMAGE: Timeline of each success case with key points marked]",
    downloadables: {
      pdf: "lesson-6-success-cases.pdf",
      checklist: "checklist-application.pdf"
    },
    sections: [
      {
        title: "6.1 Case 1: Reconquest in 9 Days - Andrew",
        content: `**Context:**
Andrew (32) was left after 3 years of relationship. His ex, Marina, told him she "didn't feel the same anymore" and needed to "find herself."

**Initial situation:**
- Breakup: 2 weeks before starting the protocol
- Mistakes made: Begging, sending long explanatory messages, showing up at her house
- Emotional state: Desperate, not sleeping, lost 8 pounds

**Days 1-3: Reset Phase**
Andrew applied total silence. He blocked his own social media (not hers, to avoid spying). He focused on exercise and resumed an abandoned project.

**Day 4: First Contact**
Message sent: "Found your favorite book at the bookstore. I remembered when we used to read it together. Hope you're doing well."

Marina's response (6 hours later): "Thanks, glad you're doing well too."

**Days 5-6: Building**
Andrew didn't respond immediately. The next day he sent a photo of a sunset from a place she knew, without text. She responded: "Are you at [place]?" Brief conversation about the location.

**Day 7: Proposal**
"I'll be near your area Friday. Would you like to grab a quick coffee?"
She accepted.

**Day 9: Meeting**
The coffee lasted 3 hours. Andrew stayed calm, talked about his project, didn't mention the relationship. At the end, she said: "I miss you."

**Result:** They got back together a week later. They've been together for 8 months.

**What worked:**
- Initial silence to reset perception
- First contact nostalgic but not desperate
- Demonstration of change (project, attitude)
- No pressure at the meeting`
      },
      {
        title: "6.2 Case 2: From Friendship to Love - Carlos",
        content: `**Context:**
Carlos (28) was "friendzoned" after confessing his feelings. Laura told him she loved him "as a friend" and didn't want to lose the friendship.

**Initial situation:**
- It wasn't a traditional breakup, but a romantic rejection
- They had 2 years of close friendship
- He had been her "confidant" about other men

**Fundamental error identified:**
Carlos had positioned himself as the safe friend, without sexual tension or mystery. He was 100% predictable and available.

**Weeks 1-2: Repositioning**
Carlos drastically reduced his availability. He stopped being the one who always responded. He started going out with other friends (and female friends).

**Week 3: Visible Change**
He started exercising seriously. He improved his style. He started a project he was passionate about.

**Week 4: Strategic Distance**
He stopped initiating conversations. Laura started reaching out to him.

Laura: "Hey, we haven't talked in a while..."
Carlos: "Yeah, I've been pretty busy with [project]. What's up?"

**Week 5: Tension**
Laura started noticing the change. Carlos was no longer the same. She started competing for his attention.

**Week 6-7: Subtle Flirting**
Carlos began introducing subtle challenges and slight sexual tension.
"You know, you look different lately... in a good way."

**Week 8: The Shift**
Laura confessed that she was starting to see him "differently." Carlos didn't jump immediately. He maintained his value.

**Result:** They started dating. They've been a couple for 6 months.

**What worked:**
- Breaking the "friend" positioning
- Creating scarcity of attention
- Visible transformation
- Making her pursue him`
      },
      {
        title: "6.3 Case 3: Long Distance - Michael",
        content: `**Context:**
Michael (30) broke up because she (Jessica) moved to another city for work. The distance became unbearable and she decided to end it.

**Initial situation:**
- Relationship of 2 years before the distance
- 6 months of long distance before the breakup
- No other people involved, just "couldn't handle the distance"

**The unique challenge:**
Unlike other cases, there was no loss of attraction or major problems. Just the practical reality of distance.

**Week 1-2: Strategic Silence**
Michael didn't try to "solve the problem" immediately. He applied silence to let her feel the absence without pressure.

**Week 3: Non-demanding Reconnection**
"Hey, just saw [something related to an inside joke]. It made me smile."
No pressure about the relationship.

**Week 4-5: Rebuild Connection**
Light conversations, no talk of "the relationship." Rebuild emotional connection without the weight of "what do we do about the distance."

**Week 6: The Surprise**
Michael planned a surprise visit without telling her (risk calculated because he knew she'd receive it well). He showed up at an event he knew she'd be at.

**Week 7: The Honest Conversation**
After the emotional visit, they had a mature conversation about the future. Michael proposed concrete solutions:
- Visits every 3 weeks
- Specific plan to close the distance in 1 year
- Clear communication about needs

**Result:** They got back together with a clear plan. 8 months later, he moved to her city.

**What worked:**
- Space instead of pressure
- Rebuilding connection before solving the "problem"
- Concrete proposal, not just promises
- Demonstrated commitment with the visit`
      },
      {
        title: "6.4 Case 4: After a Serious Fight - David",
        content: `**Context:**
David (35) was left after a series of escalating fights. His ex, Valentina, told him she couldn't take "the constant tension" anymore.

**Initial situation:**
- Fights for jealousy and insecurity on his part
- She had asked him multiple times to "work on himself"
- Breakup was abrupt and apparently definitive

**Fundamental error identified:**
David's insecurity was destroying the relationship. His jealousy made her feel suffocated and not trusted.

**Weeks 1-4: Real Internal Work**
David started therapy. He confronted his insecurity issues genuinely. He didn't do it "for her" but for himself.

**Week 5: Apology message (only once)**
"Valentina, I've been in therapy working on my insecurity issues. I'm not writing to ask you to come back. Just wanted you to know that I took what you said seriously. Hope you're doing well."

He didn't ask for a response. He didn't receive one immediately.

**Week 7: Visible Change on Social Media**
David was sharing (genuinely) reflections on personal growth, books he was reading, new activities. Nothing directed at her, but she was watching.

**Week 9: Delayed Response**
Valentina: "I've seen your posts. I'm glad you're working on yourself."
David: "Thanks. It's been a difficult but necessary process."

**Weeks 10-12: Gradual Reconnection**
Occasional conversations, no romantic pressure. David consistently demonstrated his change.

**Week 14: Meeting**
They had coffee. David stayed calm when she mentioned dating someone. No visible jealousy. She noticed.

**Result:** They got back together 2 months later, with David genuinely changed.

**What worked:**
- Real change, not acted
- One apology only, no repetition
- Long-term demonstration
- Not trying to accelerate the process`
      },
      {
        title: "6.5 Case 5: Creating Obsession - Miguel",
        content: `**Context:**
Miguel (27) had a 6-month relationship that ended "due to lack of spark." His ex, Sophia, told him she loved him but wasn't "in love."

**Initial situation:**
- The relationship had been comfortable but boring
- There was no drama, it just fizzled out
- Sophia wasn't angry, just indifferent

**The unique challenge:**
He had to reignite passion where there had been excessive comfort.

**Phase 1: Total Disappearance (3 weeks)**
Miguel completely disappeared. Zero contact, zero visible social media for her. He created an information void.

**Phase 2: Aggressive Transformation (Weeks 4-6)**
- Completely new visual style
- Started training intensively
- Started a project he was passionate about
- Went out more with friends

**Phase 3: Strategic Appearance (Week 7)**
He attended an event where he knew she'd be. He didn't seek her out directly. He talked to everyone but her initially. She was watching.

When they finally talked, Miguel was friendly but not effusive. He briefly mentioned he was "in a really good place in his life."

**Phase 4: Extreme Scarcity (Weeks 8-10)**
Sophia started seeking him out. He responded, but was always "busy." He didn't reject, he postponed.

**Phase 5: Calibrated Reward (Week 11)**
He finally agreed to see her. The meeting was different: sexual tension, mystery, deep conversation but not everything revealed.

**Result:** Sophia admitted being "obsessed" with the "new Miguel." They got back together, but with a completely different dynamic.

**What worked:**
- Creating information void (curiosity)
- Real and visible transformation
- Strategic scarcity after reappearance
- Variable reward (not always available)
- Tension that didn't exist before`
      },
      {
        title: "6.6 Cross-Analysis: Success Patterns",
        content: `Analyzing the 5 cases, consistent patterns emerge that you can apply to your situation:

**Pattern 1: The Silence Period**
In all cases, there was a period of zero contact. Minimum 2 weeks, maximum 6 weeks. This period allows:
- Resetting her perception of you
- Creating space for her to miss you
- Giving you time for real internal work

**Pattern 2: Demonstrated, Not Declared Change**
None said "I've changed." All showed it through visible actions. The most believable change is the one she discovers, not the one you announce.

**Pattern 3: Scarcity After Contact**
Once contact was reestablished, none was immediately available. All maintained an active life that competed for their time.

**Pattern 4: First Meeting Without Pressure**
In all cases, the first in-person meeting was presented as casual or without romantic expectations. This lowers defenses.

**Pattern 5: She Made the Final Move**
In all cases, the final decision to get back together was hers, not his. They created the conditions, but let her decide.

**What DIDN'T work (previous mistakes):**
- Long explanatory messages
- Desperate declarations of love
- Showing up unannounced
- Pressuring to talk about the relationship
- Promises of change without evidence

**The general formula:**
Silence → Transformation → Light Contact → Scarcity → Neutral Meeting → She Decides`
      }
    ]
  },
  {
    id: 7,
    title: "Step-by-Step Implementation",
    subtitle: "Your complete action plan for the next 9 days",
    icon: "🗓️",
    imagePlaceholder: "[IMAGE: 9-day visual calendar with specific actions for each day]",
    downloadables: {
      pdf: "lesson-7-implementation.pdf",
      checklist: "checklist-9-days.pdf"
    },
    sections: [
      {
        title: "7.1 Introduction to the Implementation Plan",
        content: `You've absorbed a lot of information in this module. Now it's time to convert knowledge into action.

This 9-day plan is designed to give you a clear structure without being rigid. Every situation is different, so use this as a guide, not as an immutable recipe.

**Before starting, you need to:**

1. **Evaluate your current situation:**
   - How much time has passed since the breakup?
   - What was the last contact?
   - How did it end (drama, neutral, friendly)?
   - Are there third parties involved?

2. **Establish your goals:**
   - What does "success" mean to you?
   - Is it getting back together, or closing the chapter in peace?
   - Are you willing to accept any outcome?

3. **Prepare your mindset:**
   - This may not work, and that's okay
   - The goal is to become your best version, she's a bonus
   - Desperation is the enemy

**The time frame:**
- Days 1-3: Preparation and first contact
- Days 4-6: Intensification
- Days 7-9: Closure and consolidation

Each phase has specific objectives. Don't skip stages.`
      },
      {
        title: "7.2 Days 1-3: Preparation and First Contact",
        content: `**DAY 1: Internal Preparation**

*Morning:*
- Physical exercise (minimum 30 min)
- Review this module: what techniques will you use?
- Write: "What version of myself do I want her to see?"

*Afternoon:*
- Organize your appearance (clothes, haircut if needed)
- Plan 1 social activity for this week
- Contact a friend for accountability

*Evening:*
- Meditate or reflect for 10 min
- Prepare your first contact message (DON'T send it)
- Go to bed early

---

**DAY 2: Adjustment and Waiting**

*All day:*
- Continue with your IMPROVED normal life
- Review and adjust your first contact message
- Make sure it doesn't sound desperate or cold
- Prepare responses for possible scenarios
- DON'T contact yet (anticipation is part of the process)

*Activities:*
- Do something you're passionate about
- Document (for yourself) how you feel
- Practice emotional dominance exercises

---

**DAY 3: First Contact**

*Ideal timing:* Mid-morning or early afternoon (10am-3pm)

*Send your message:* The one you prepared and adjusted

*After sending:*
- Put phone on silent
- Occupy yourself with something that requires your attention
- DON'T obsessively check if she read/responded

*Possible scenarios:*
- She responds quickly: Good, but don't respond immediately yourself
- She responds late: Normal, doesn't mean anything negative
- She doesn't respond (24h): Don't send another message. Wait.

*Rule: Maximum 1 message per day, and only if she responded*`
      },
      {
        title: "7.3 Days 4-6: Intensification",
        content: `**DAY 4: Reading and Adjustment**

*Evaluate day 3's response:*
- Was it positive, neutral, or negative?
- Did she show curiosity? Did she ask questions?
- Was the tone cold, warm, or distant?

*If it was positive/neutral:*
- Continue the conversation with added value
- Use the 70/30 rule: She should invest the 30%
- Introduce an element of mystery

*If it was negative or there was no response:*
- Don't send more messages today
- Review if your initial message was appropriate
- Consider waiting 3-5 more days before another attempt

*Day 4 message (if applicable):*
Something that generates curiosity or evokes good memories. No direct questions about her/the relationship.

---

**DAY 5: Deepening**

*Objective:* Create more emotional connection

*If conversation flows:*
- Share something personal (calibrated vulnerability)
- Make reference to shared memories
- Introduce inside humor if there is any

*If it doesn't flow:*
- A value message without expecting a response
- Keep your life active and visible
- Don't pressure

*Start planting seeds:*
- Casually mention interesting plans
- "This weekend I'm going to [something interesting]"

---

**DAY 6: The Proposal**

*Objective:* Move conversation from digital to in-person

*The key message:*
Propose a casual meeting, no pressure, with a specific date.

Example: "Hey, I'll be around [zone] on [specific day]. Would you like to grab a quick coffee? No pressure, just to catch up."

*Important elements:*
- Specific date (not "someday")
- Short activity (coffee, not dinner)
- Explicit no pressure
- In her zone or neutral

*If she accepts:* Perfect. Confirm and don't send more messages until the meeting.
*If she can't that day:* "I understand. When would work for you?" (only once)
*If she rejects:* "No problem. Take care." And step back.`
      },
      {
        title: "7.4 Days 7-9: Closure and Consolidation",
        content: `**DAY 7: Pre-Meeting (if applicable)**

*If there's a scheduled meeting:*
- Prepare your best version (appearance, energy)
- Plan 2-3 interesting conversation topics
- Mentally define: You will NOT talk about the relationship first
- Physical exercise to release tension

*If there's no meeting:*
- Evaluate progress from previous days
- Consider if you need more silence time
- Continue with your improved life

*The right mindset:*
This meeting is NOT to "close the deal." It's to plant more seeds. Pressure ruins everything.

---

**DAY 8: The Meeting**

*Before:*
- Arrive on time (not before, not after)
- Open, confident body language
- Smile genuinely when you see her

*During:*
- Listen more than you talk (60/40)
- Share your growth without bragging
- Use calibrated eye contact
- Humor when natural
- DON'T mention the relationship/negative past

*If she brings up the relationship topic:*
- Listen first
- Don't over-justify yourself
- "Yes, I think we both learned things" (neutral but mature)

*At the end:*
- Don't artificially extend
- "It was good to see you" (genuine)
- Don't ask to see each other again immediately
- Let her process

---

**DAY 9: Post-Meeting**

*The day after:*
- A simple message: "It was good to see you yesterday. Have a good week."
- NO more than that

*Evaluate:*
- How was the meeting's energy?
- Were there signs of interest?
- Did she leave wanting more?

*Next steps depend on her response:*
- Warm response + she proposes something = Excellent, follow her lead
- Warm response without proposal = Wait 2-3 days, you propose something
- Cold response/no response = Step back, give her space

*Golden rule:*
Never seem more invested than her at this point.`
      },
      {
        title: "7.5 Action Checklist",
        content: `Use this checklist for each day. Only mark what you actually did.

**PREPARATION (Before Day 1)**
□ I've gone at least 2 weeks without contact
□ I've worked on my physical appearance
□ I have my own activities that I'm passionate about
□ I've emotionally processed the breakup (not in crisis)
□ I understand this may not work and I'm at peace with that
□ I have a friend/support system to keep me accountable

**DAY BY DAY**
□ Day 1: Exercise done, message prepared (not sent)
□ Day 2: Message reviewed, social activity planned
□ Day 3: Message sent, phone on silent after
□ Day 4: Response evaluation, next message if appropriate
□ Day 5: Conversation deepening or strategic silence
□ Day 6: Meeting proposal sent
□ Day 7: Preparation for meeting or reevaluation
□ Day 8: Meeting executed or plan B
□ Day 9: Post-meeting message, final evaluation

**SIGNS IT'S WORKING**
□ She responds faster over time
□ She asks questions about you
□ She initiates contact without you doing it
□ The tone of her messages is warmer
□ She mentions positive memories
□ She shows curiosity about your current life
□ She accepts meeting in person

**WARNING SIGNS (Need to recalibrate)**
□ Responses increasingly shorter/colder
□ She never initiates
□ Repeated rejections to meet
□ She mentions another person romantically
□ She explicitly asks for space`
      },
      {
        title: "7.6 What to Do If It Doesn't Work",
        content: `Sometimes, despite doing everything right, it doesn't work. This DOESN'T mean you failed. It means some things simply aren't meant to be.

**Signs you should stop:**

1. **She explicitly asked you not to contact her**
   Respect this absolutely. Continuing is harassment.

2. **3+ attempts have passed without reciprocity**
   If after 3 contact cycles she shows no interest, it's time to let go.

3. **She's in a serious relationship**
   If it's not a passing fling but something established, withdraw with dignity.

4. **You're suffering too much**
   If the process is emotionally destroying you, prioritize your well-being.

**How to close with dignity:**

If you decide to stop, send one last message (optional):

"[Name], I want you to know I genuinely wish you the best. I'm going to respect your space and move on. If you ever change your mind, you know where to find me. Take care."

After this: ZERO contact. No matter what. If she comes back, it should be 100% her initiative.

**The necessary reframe:**

This process, whether it works or not, made you a better version of yourself. That's not lost. The habits, the mindset, the personal growth... all of that serves you for your next relationship.

Sometimes the best reconquest is the one you don't make, because it frees you to find something better.`
      },
      {
        title: "7.7 Next Steps: Module 3",
        content: `If you've made it this far and had success (or are on the way), congratulations. You've achieved something most men can't.

**But there's a problem...**

The reconquest is only half the battle. The statistics are clear:

- **43%** of couples who get back together after a breakup, end again in the first 30 days
- **67%** don't make it past the first year
- Only **28%** maintain the relationship long-term

Why?

Because getting back together doesn't change the patterns that caused the breakup. Without conscious work, those patterns return.

**Module 3: Emotional Shielding** is specifically designed for:

1. **The first critical 30 days:**
   A day-by-day protocol to consolidate the reconquest and avoid relapses.

2. **Threat prevention:**
   How to shield the relationship against third parties, routine, and the mistakes that caused the first breakup.

3. **Desire maintenance:**
   Techniques to keep the spark alive long-term, not just in the honeymoon phase.

4. **Support community:**
   Access to an exclusive group of men who have been through the same process.

**The uncomfortable truth:**

You can choose not to continue. But if you do, you're betting you'll be part of the 28% who make it without guidance. Are you willing to risk everything you've gained?

Module 3 is the difference between a temporary reconquest and a relationship transformed forever.

*Your next step is clear. The question is: will you take it?*`
      }
    ]
  }
];

export const getModule2LessonById = (id: number): Module2Lesson | undefined => {
  return module2Lessons.find(lesson => lesson.id === id);
};

export const getNextModule2LessonId = (currentId: number): number | null => {
  const currentIndex = module2Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === module2Lessons.length - 1) return null;
  return module2Lessons[currentIndex + 1].id;
};

export const getPreviousModule2LessonId = (currentId: number): number | null => {
  const currentIndex = module2Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex <= 0) return null;
  return module2Lessons[currentIndex - 1].id;
};

export const module2Badges = [
  'Emotional Scientist',
  'Trigger Master',
  'Script Expert',
  'Ethical Influencer',
  'Deep Psychologist',
  'Success Analyst',
  'Elite Implementer'
];
