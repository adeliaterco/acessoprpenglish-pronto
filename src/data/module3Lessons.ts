export interface LessonSection {
  title: string;
  content: string;
}

export interface Module3Lesson {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  sections: LessonSection[];
  imagePlaceholder: string;
  downloadables?: {
    pdf: string;
    checklist: string;
    protocol?: string;
  };
}

export const module3Lessons: Module3Lesson[] = [
  {
    id: 1,
    title: "Emotional Maintenance - The Science",
    subtitle: "Why maintaining is more important than reconquering",
    icon: "🔬",
    imagePlaceholder: "[IMAGE: Diagram of the 3 pillars of emotional maintenance]",
    downloadables: {
      pdf: "lesson-1-emotional-maintenance.pdf",
      checklist: "checklist-maintenance.pdf"
    },
    sections: [
      {
        title: "1.1 What is Emotional Maintenance?",
        content: `Emotional maintenance is the **art of sustaining and deepening the connection** you've created. It's the difference between a temporary reconquest and a lasting relationship.

Think of emotional maintenance like caring for a garden. You can plant the seeds (reconquest), but if you don't water, fertilize, and protect from pests, everything dies. 43% of couples who get back together after a breakup end up separating again within the first 30 days. Why? Because they ignore maintenance.

**Emotional maintenance includes:**

1. **Consistency in your actions:** Not returning to the patterns that caused the breakup
2. **Constant evolution:** Continuing to be the improved version of yourself
3. **Calibrated investment:** Giving enough, but not too much
4. **Active protection:** Shielding the relationship against internal and external threats
5. **Gradual deepening:** Creating increasingly deeper levels of connection

The most common mistake is thinking you've "already won" and can relax. The reality is that reconquest is just the beginning. The real work starts now.`
      },
      {
        title: "1.2 How It Works in the Brain",
        content: `The human brain is designed for **habituation**. This means what's exciting at first becomes normal over time and eventually boring.

**The habituation cycle:**

1. **Novelty:** Massive dopamine release (the "honeymoon")
2. **Familiarity:** Dopamine decreases, oxytocin increases
3. **Routine:** Both neurotransmitters stabilize
4. **Boredom:** Without new stimuli, everything decreases

Your goal is to **break this cycle** strategically. You can't maintain honeymoon intensity forever, but you can create periodic "micro-honeymoons" that reactivate the reward system.

**Neurochemistry of maintenance:**

- **Dopamine:** Needs novelty and anticipation. Inject surprises and unexpected events.
- **Oxytocin:** Needs intimacy and contact. Maintain moments of deep connection.
- **Serotonin:** Needs stability and recognition. Make her feel secure and valued.

The perfect balance is creating a base of security (serotonin + oxytocin) with regular peaks of excitement (dopamine). Too much security = boredom. Too much excitement = anxiety.`
      },
      {
        title: "1.3 Why It's More Important Than Reconquest",
        content: `I'll be direct: **reconquest without maintenance is a waste of time**.

The statistics are clear:
- 43% of couples who get back together end again in 30 days
- 67% end before the first year
- Only 28% maintain the relationship long-term

What differentiates the 28% who succeed? Active and conscious maintenance.

**Why maintenance is harder:**

1. **The thrill of the chase disappears:** There's no longer a "game" to win
2. **Old patterns return:** It's easy to go back to habits that caused the breakup
3. **Attention disperses:** Other aspects of life start competing
4. **Complacency sets in:** "I've got her, I can relax"

**Why maintenance is more important:**

1. **Defines quality of life:** You'll spend years with this person
2. **Affects your identity:** A healthy relationship makes you a better person
3. **Prevents destructive cycles:** You don't want to go through another breakup
4. **Creates legacy:** The foundation for family, shared projects, life together

Reconquest is a sprint. Maintenance is a marathon. And in life, marathoners win.`
      },
      {
        title: "1.4 The 3 Pillars of Maintenance",
        content: `All effective emotional maintenance is based on **three fundamental pillars**:

**PILLAR 1: EVOLUTIONARY CONSISTENCY**

It doesn't mean doing the same thing every day. It means maintaining your essence while evolving.

- Be the same person she decided to come back to, but better
- Maintain the positive changes you made
- Evolve in the direction you established
- Don't regress to old patterns

*Example:* If during reconquest you started exercising and she noticed your change, don't stop. But don't stagnate: now run a race, now try a new sport.

**PILLAR 2: CALIBRATED TENSION**

Maintain a healthy level of tension that avoids boredom without creating anxiety.

- Don't be 100% predictable
- Maintain aspects of mystery
- Create small challenges
- Don't take everything for granted

*Example:* Don't always be available. Sometimes have plans that don't include her. Not to play games, but because you genuinely have your own life.

**PILLAR 3: RECIPROCAL INVESTMENT**

Ensure both are investing in the relationship in a balanced way.

- Observe her investment level
- Adjust yours accordingly
- Never invest dramatically more than her
- Create opportunities for her to invest`
      },
      {
        title: "1.5 How to Know If It's Working",
        content: `Effective maintenance has **clear signs** you can monitor:

**Positive signs (maintenance working):**

✅ She reaches out spontaneously, not just when you do
✅ She shares aspects of her life without you asking
✅ She includes you in future plans
✅ She shows healthy jealousy occasionally
✅ She talks about you positively with others
✅ She invests time and effort in the relationship
✅ She initiates physical and affectionate contact
✅ She makes effort to look good for you
✅ She prioritizes you over other activities
✅ She expresses gratitude for having you

**Quantifiable metrics:**

- **Initiative ratio:** She should initiate contact at least 40% of the time
- **Response time:** Should respond in reasonable times (not hours without reason)
- **Conversation depth:** Talks should have substance, not just logistics
- **Plan frequency:** Should propose meeting, not just accept your invitations

If these indicators are present, your maintenance is working. If not, you need to adjust your strategy.`
      },
      {
        title: "1.6 Warning Signs",
        content: `As important as knowing it works is **detecting when it doesn't work**. These warning signs require immediate action:

**Level 1 warning signs (caution):**

⚠️ Shorter and less elaborate responses
⚠️ Takes longer to respond without apparent reason
⚠️ Less initiative to meet
⚠️ Mentions being "busy" frequently
⚠️ Less physical contact initiated by her

**Level 2 warning signs (intervention needed):**

🚨 Cancels plans more than usual
🚨 Avoids deep conversations
🚨 Casually mentions other people (men)
🚨 Unfavorable comparisons with you
🚨 Frequent criticism about your actions

**Level 3 warning signs (emergency):**

🔴 Asks for "space" or "time"
🔴 Avoids physical intimacy
🔴 Secretive about her schedule
🔴 Drastic changes in routine without explanation
🔴 Excludes you from plans that used to include you

The key is to **act at level 1**, before it escalates. Waiting until level 3 is exponentially harder to reverse.`
      },
      {
        title: "1.7 Practical Exercises",
        content: `These exercises will help you implement emotional maintenance systematically:

**Exercise 1: The Weekly Check-in (10 minutes/week)**

Every Sunday, answer these questions:
1. How many times did she initiate contact this week?
2. How was the quality of our interactions?
3. Did I notice any warning signs?
4. What did I do to maintain novelty?
5. What can I improve next week?

**Exercise 2: The Planned Surprise (1x per week)**

Plan ONE weekly surprise. It doesn't have to be big:
- An unexpected but meaningful message
- A detail that shows you thought of her
- A spontaneous plan
- A reference to something she mentioned before

**Exercise 3: Strategic Space (2x per week)**

At least twice a week:
- Have plans that don't include her
- Take a bit longer to respond (no games)
- Mention interesting activities you do
- Show that you have your own life

**Exercise 4: Deep Connection (1x per week)**

Once a week, create a moment of deep connection:
- Conversation without phones
- Meaningful question about her inner life
- Share something personal of yours
- Genuine and prolonged physical contact

**Progress tracking:**

Keep a simple record:
| Week | Her initiative | Surprises given | Alerts detected | Deep connection |
|------|---------------|-----------------|-----------------|-----------------|
| 1    | 3/7           | 1               | 0               | ✓               |

This record will give you objective data to adjust your strategy.`
      }
    ]
  },
  {
    id: 2,
    title: "The 5 Maintenance Triggers",
    subtitle: "The levers that keep attraction alive long-term",
    icon: "🎯",
    imagePlaceholder: "[IMAGE: Diagram of the 5 triggers forming a maintenance cycle]",
    downloadables: {
      pdf: "lesson-2-maintenance-triggers.pdf",
      checklist: "checklist-maintenance-triggers.pdf"
    },
    sections: [
      {
        title: "2.1 Introduction to Maintenance Triggers",
        content: `Reconquest triggers and maintenance triggers are **different**. Reconquest ones activate attraction. Maintenance ones sustain and deepen it.

Think of the difference as lighting a fire vs. keeping it burning. You need different techniques for each phase.

**The 5 maintenance triggers:**

1. **Emotional Consistency:** The foundation of trust
2. **Novelty and Surprise:** The fuel of desire
3. **Constant Validation:** The food for healthy ego
4. **Sustained Mystery:** The air that fans the flame
5. **Interdependence:** The logs that maintain the fire

Each trigger has a specific purpose and application method. Ignoring any of them creates an imbalance that eventually destroys the relationship.

Mastery is in **activating all 5 simultaneously** in a natural, not mechanical way. When you achieve this, the relationship flows effortlessly.`
      },
      {
        title: "2.2 Trigger 1: Emotional Consistency",
        content: `Emotional consistency is your **ability to maintain a stable emotional state** regardless of external circumstances.

**Why it's fundamental:**

She needs to know what to expect from you. Not in terms of being predictable, but being reliable. If one day you're affectionate and the next cold for no reason, you create anxiety. If your reactions are proportional and predictable, you create security.

**How to cultivate emotional consistency:**

1. **Manage your stress outside the relationship**
   Don't use the relationship as an escape valve for work, family, or personal problems. Have other channels.

2. **Communicate your emotional states**
   "Today was a tough day at work, I might be quieter than normal" is much better than just acting weird without explanation.

3. **React proportionally**
   Small problems = small reactions. Save big reactions for big problems.

4. **Maintain your self-care rituals**
   Exercise, sleep, nutrition, time alone. These habits sustain your emotional stability.

**Signs of successful consistency:**

- She relaxes in your presence
- She doesn't "walk on eggshells" around you
- She shares difficult things because she knows you won't explode
- She sees you as a refuge, not a source of stress`
      },
      {
        title: "2.3 Trigger 2: Novelty and Surprise",
        content: `The human brain is designed to pay attention to what's new. **Novelty activates dopamine**, the neurotransmitter of desire and motivation.

**The problem of routine:**

After reconquest, it's easy to fall into patterns:
- Same restaurant
- Same conversations
- Same activities
- Same schedules

This kills the spark faster than anything else.

**How to inject novelty:**

1. **Place novelty:**
   - Explore new neighborhoods together
   - Travel to places neither of you knows
   - Change the routine of usual places

2. **Activity novelty:**
   - Try new hobbies together
   - Take an unexpected class
   - Do something neither has done before

3. **Experience novelty:**
   - Surprises planned but unexpected for her
   - Special events for no special occasion
   - Break the pattern occasionally

4. **Conversation novelty:**
   - Ask things you've never asked
   - Share thoughts you've never shared
   - Explore deep topics you avoided

**The 80/20 rule:**

80% comfortable routine + 20% stimulating novelty = optimal balance.

Too much novelty exhausts. Too little bores. Balance is key.`
      },
      {
        title: "2.4 Trigger 3: Constant Validation",
        content: `We all need to feel **seen, valued, and appreciated**. Constant (not excessive) validation satisfies this fundamental need.

**Types of validation:**

1. **Identity validation:**
   "I admire how you handle [situation]. That's very you."
   You recognize who she is, not just what she does.

2. **Effort validation:**
   "I saw how hard you worked on [project]. Your dedication is impressive."
   You recognize her work, not just the results.

3. **Feelings validation:**
   "It makes sense that you feel that way. I would too."
   You recognize her emotions without judging them.

4. **Presence validation:**
   "My day improves when you're around."
   You recognize her positive impact on your life.

**The difference between healthy validation and flattery:**

❌ Flattery: "You're perfect at everything you do"
✅ Validation: "The way you handled that situation was really smart"

Flattery is generic and sounds fake. Validation is specific and genuine.

**Recommended frequency:**

- Identity validation: 1-2 times per week
- Effort validation: When genuinely deserved
- Feelings validation: Every time she shares something emotional
- Presence validation: 2-3 times per week

More than this can sound excessive. Less can feel like neglect.`
      },
      {
        title: "2.5 Trigger 4: Sustained Mystery",
        content: `The mystery that worked in reconquest must **be maintained, not disappear**. Many men make the mistake of "completely opening up" once they're back together.

**Why mystery is still important:**

- The completely known doesn't generate curiosity
- Curiosity is fuel for interest
- Interest keeps attraction active

**How to maintain mystery without being distant:**

1. **Don't share everything immediately:**
   You have thoughts, plans, reflections. She doesn't need to know all of them instantly.

2. **Maintain your own activities:**
   Hobbies, friends, projects that are only yours.

3. **Reveal gradually:**
   When you share something, let it be a special "delivery," not a constant flow.

4. **Cultivate your inner world:**
   Read, think, develop opinions. This makes you interesting.

**The mystery-intimacy balance:**

- Intimacy without mystery = Boredom (she knows everything, nothing to discover)
- Mystery without intimacy = Distance (she doesn't feel connected)
- Mystery + Intimacy = Fascination (deep connection with always more to discover)

**Practical exercise:**

This week, when she asks "What did you do today?":
- ❌ Don't say: "Nothing special, the usual"
- ❌ Don't say: "I worked, had lunch, watched videos, thought about you, talked to Juan about..."
- ✅ Do say: "Had an interesting day. Discovered something about [topic]. I'll tell you when we meet" (smile)`
      },
      {
        title: "2.6 Trigger 5: Interdependence",
        content: `Interdependence is the highest level of connection: **two complete people who choose to be together** because they're better together than apart.

**Key differences:**

| Dependence | Interdependence |
|------------|-----------------|
| "I can't live without you" | "I choose to live with you" |
| Based on need | Based on choice |
| Generates anxiety | Generates security |
| Power imbalance | Power balance |
| Suffocating | Liberating |

**How to create interdependence:**

1. **Shared projects:**
   - Joint goals (trip, project, hobby)
   - Mutual responsibilities
   - Successes to celebrate together

2. **Calibrated integration:**
   - Know her important people
   - Integrate her (gradually) into your circle
   - Create "our people," not just "my people" and "your people"

3. **Positive routines:**
   - Rituals you enjoy together
   - Couple-specific traditions
   - Spaces/times that are "yours"

4. **Mutual support:**
   - Be present in difficult times
   - Genuinely celebrate each other's successes
   - Be a team, not competition

**The paradox of interdependence:**

To create healthy interdependence, you first need **solid independence**. If you can't be okay alone, you can't be okay accompanied. Your work in previous modules prepared you for this.`
      },
      {
        title: "2.7 Common Mistakes and Real Examples",
        content: `**Common mistakes by trigger:**

**Consistency mistake:**
"I'm super affectionate when everything's good, but I shut down when there are problems"
→ Solution: Communicate that you're processing, but don't completely disconnect.

**Novelty mistake:**
"After getting back together, I stopped trying to surprise her"
→ Solution: Schedule one surprise per week, even if small.

**Validation mistake:**
"I think she realizes I value her, I don't need to say it"
→ Solution: Verbalize. What's not said isn't known.

**Mystery mistake:**
"I tell her absolutely everything I think and do"
→ Solution: Keep some things to reveal gradually.

**Interdependence mistake:**
"I do everything for her, she doesn't have to do anything"
→ Solution: Create opportunities for her to invest too.

**Real success example:**

Marcos (34) applied the 5 triggers after winning back Laura:

- **Consistency:** Established self-care routines that keep him stable
- **Novelty:** Every week they do something new, even if small
- **Validation:** Learned to verbalize specific appreciation
- **Mystery:** Maintains hobbies and alone time he doesn't fully share
- **Interdependence:** They started an investment project together

Result: 14 months later, still together and stronger than before the breakup.`
      }
    ]
  },
  {
    id: 3,
    title: "Anti-Distancing",
    subtitle: "How to detect and prevent her from pulling away again",
    icon: "🛡️",
    imagePlaceholder: "[IMAGE: Early warning system with 5 distancing levels]",
    downloadables: {
      pdf: "lesson-3-anti-distancing.pdf",
      checklist: "checklist-warning-signs.pdf"
    },
    sections: [
      {
        title: "3.1 The 5 Reasons She Pulls Away",
        content: `If she starts pulling away after reconquest, it's usually for one of these **5 fundamental reasons**:

**Reason 1: Return of Old Patterns**
She sees you're going back to being the same as before. The changes you made during reconquest start fading.

*Signs:*
- "I feel like we're going back to the same thing"
- "I thought you had changed"
- Frustration over specific behaviors that were already a problem

**Reason 2: Loss of Attraction**
The novelty disappeared. You're no longer the "new" man who won her back.

*Signs:*
- Less sexual interest
- Less curiosity about your life
- Treats you as "given" not "chosen"

**Reason 3: Lack of Investment**
She feels she's giving more than receiving (or vice versa, you give too much).

*Signs:*
- "I'm always the one who..."
- Accumulated resentment
- Competition over who does more

**Reason 4: External Threats**
Another person or circumstance is competing for her attention.

*Signs:*
- Frequently mentions someone new
- Unexplained changes in routine
- Secretive about certain activities

**Reason 5: Divergent Growth**
You're going in different directions in life.

*Signs:*
- Incompatible goals
- Values that no longer align
- Different visions of the future`
      },
      {
        title: "3.2 How to Recognize Warning Signs",
        content: `Early detection is **crucial**. The sooner you detect distancing, the easier it is to correct.

**3-level alert system:**

**GREEN LEVEL (Normal Fluctuation):**
We all have bad days. These indicators are normal occasionally:
- One day of shorter responses
- Canceling a plan for a legitimate reason
- Being less talkative due to temporary stress

*Action:* Observe, but don't overreact.

**YELLOW LEVEL (Caution):**
If these indicators persist for more than 3-5 days:
- Consistently shorter responses
- Less initiative to contact
- Less physical affection
- Mentions being "busy" frequently
- Subtle changes in tone

*Action:* Apply soft reactivation techniques.

**RED LEVEL (Urgent Intervention):**
Requires immediate action:
- Asks for "space" or "time"
- Actively avoids seeing you
- Drastic behavior changes
- Notable secretiveness
- Evident coldness

*Action:* Emergency protocol (section 3.6).

**The most common mistake:**
Ignoring yellow signs hoping they'll "fix themselves." They rarely do. Act before they escalate to red.`
      },
      {
        title: "3.3 Technique 1: Emotional Reactivation",
        content: `Emotional reactivation consists of **reminding her why she chose you** in the first place.

**When to use:** Yellow level signs, especially when you suspect loss of attraction.

**Implementation steps:**

1. **Evoke a powerful memory:**
   Not just any memory, but one emotionally charged where she was very happy with you.
   
   "I was thinking about [specific moment]. I remember how you laughed that day."

2. **Activate your best version:**
   Temporarily, return to being 100% the man who won her back.
   - Take extra care of your appearance
   - Show your best energy
   - Be as interesting as possible

3. **Create a contrast:**
   If you've been too available, reduce slightly.
   If you've been distant, approach with intensity.
   Contrast reactivates attention.

4. **Generate a peak experience:**
   Plan something memorable, different, emotionally intense.
   It doesn't have to be expensive, it has to be meaningful.

**Application example:**

Andrew noticed Maria was more distant (yellow level). Instead of asking "What's wrong?", he applied reactivation:

1. Sent a message evoking their first trip together
2. Put on his best outfit to see her
3. Planned a surprise dinner at a place with a view
4. During dinner, he was the Andrew from the first months: attentive, fun, mysterious

Result: The dynamic reversed in 48 hours.`
      },
      {
        title: "3.4 Techniques 2 and 3: Strategic Surprise and Intensified Validation",
        content: `**TECHNIQUE 2: STRATEGIC SURPRISE**

When to use: Yellow level signs, especially when routine has set in.

Strategic surprise is different from regular maintenance surprise. It's more intense and seeks to **break a negative pattern**.

**Elements of an effective strategic surprise:**

1. **Unexpected timing:** Not on obvious dates
2. **Extreme personalization:** Something that shows you really know her
3. **Experience over object:** Experiences create more impact than things
4. **Element of mystery:** Don't reveal everything at once

**Example:**
"I have something planned for you Friday. I just need you to be ready at 7pm. Don't ask more." (And take her to something she mentioned wanting to do months ago)

---

**TECHNIQUE 3: INTENSIFIED VALIDATION**

When to use: When you suspect she feels undervalued or invisible.

It's not normal validation, it's **specific, deep, and frequent** validation for a short period.

**Implementation:**

For 5-7 days:
- Validate something specific each day
- Recognize efforts you would normally overlook
- Verbalize appreciation you would normally assume
- Show that you NOTICE the details

**Example:**
"I love how [specific detail she did today]. That's so you and I appreciate it."

**IMPORTANT:** This is temporary intervention. If you do it permanently at this level, it loses effect and seems desperate. 5-7 intense days, then return to normal maintenance level.`
      },
      {
        title: "3.5 Techniques 4 and 5: Urgency and Connection",
        content: `**TECHNIQUE 4: URGENCY CREATION**

When to use: When she's taking the relationship for granted, assuming you'll always be there.

Urgency reminds her that you also have value and options. It's NOT manipulation or threats, it's reality.

**Ethical ways to create urgency:**

1. **Temporary less availability:**
   "This week I have several commitments, but I want to see you. Thursday or Friday?"

2. **Mentioning opportunities:**
   "I was offered [interesting opportunity elsewhere/absorbing project]. I'm evaluating it."

3. **Showing you have a life:**
   Share (genuinely) interesting activities without her.

4. **Subtle time limit:**
   "I wanted to do [plan] with you, but if you can't this week, I'll go with friends."

**Don't confuse with:**
- Threats of leaving
- Mentioning other women
- Emotional blackmail

---

**TECHNIQUE 5: CONNECTION INTENSIFICATION**

When to use: When you feel you're disconnecting emotionally even though you're physically present.

**Steps:**

1. **Create distraction-free space:**
   No phones, no TV, no interruptions.

2. **Ask deep questions:**
   "What worries you most lately?"
   "Is there something you haven't told me?"
   "How do you really feel about us?"

3. **Listen actively:**
   Not to respond, but to understand.

4. **Share vulnerability:**
   After she shares, share something of yours.

5. **Close with affirmation:**
   "Thanks for sharing that. It means a lot that you trust me."

This technique requires **courage**. It may reveal problems you'd prefer not to know. But hidden problems are more dangerous than known problems.`
      },
      {
        title: "3.6 Emergency Protocol",
        content: `The emergency protocol is activated when you detect **red level signs**. This is crisis intervention.

**STEP 1: DON'T PANIC**

Your emotional reaction can make things worse. Before any action:
- Take a deep breath
- Wait at least 2 hours before acting
- Don't send long explanatory messages
- Don't confront her aggressively

**STEP 2: EVALUATE THE SITUATION**

Key questions:
- When did the signs start?
- What changed before they started?
- Is it about you or something external (work, family)?
- Is there evidence of a third person?

**STEP 3: STRATEGICALLY STEP BACK**

Counter-intuitive but crucial: **give space without disappearing**.

"I notice you need space. I'm going to give you that space. You know where to find me when you're ready to talk."

Don't:
- Ask for explanations insistently
- Threaten to leave
- Get dramatic
- Harass her with messages

**STEP 4: WORK ON YOURSELF**

During the space:
- Exercise intensely
- Connect with friends
- Work on your projects
- Keep your life running

This keeps you sane AND shows her you have your own life.

**STEP 5: CALIBRATED RECONTACT**

After 3-7 days of space:
- A brief and non-demanding message
- "Hope you're okay. When you want to talk, I'm here."
- DON'T ask "Have you thought about it?"

**STEP 6: CLARIFICATION CONVERSATION**

If she responds positively:
- Listen first, talk later
- Don't defend yourself, seek to understand
- Ask what she needs
- Propose concrete solutions

If she doesn't respond or responds negatively after 7-10 days, you probably need to reevaluate if it's worth continuing.`
      },
      {
        title: "3.7 Recovery After Distancing",
        content: `If you managed to reverse distancing, the work doesn't end there. You need to **consolidate the recovery** to prevent it from happening again.

**The first 7 days post-recovery:**

**Days 1-2: Stabilization**
- Don't act like nothing happened
- Don't bring up the topic constantly
- Maintain calm and normalcy
- Be affectionate but not excessive

**Days 3-4: Gradual Reconnection**
- Resume normal activities
- One conversation about what was learned (no blame)
- Agreements on what to change

**Days 5-7: New Normal**
- Implement agreed changes
- Return to maintenance routines
- Maintain close monitoring of signs

**Questions for closing conversation:**

1. "What can I do differently so this doesn't happen again?"
2. "Is there something you haven't told me that I need to know?"
3. "How can we handle this better if it happens again?"

**Post-recovery commitments:**

Both must commit to:
- Communicating before it escalates
- Not accumulating resentments
- Bringing up problems early, not late
- Prioritizing the relationship over being right

**Red flags of failed recovery:**

- She says the words but her energy doesn't change
- She distances again in less than 2 weeks
- She can't/won't explain what happened
- She blames you exclusively

If you see these signs, the recovery was superficial and you need deeper conversation or serious evaluation of the relationship.`
      }
    ]
  },
  {
    id: 4,
    title: "Shielding Against Third Parties",
    subtitle: "Protect your relationship from external threats",
    icon: "🔐",
    imagePlaceholder: "[IMAGE: Protection shield with the 5 identified threat types]",
    downloadables: {
      pdf: "lesson-4-shielding-third-parties.pdf",
      checklist: "checklist-shielding.pdf"
    },
    sections: [
      {
        title: "4.1 How to Identify External Threats",
        content: `External threats to your relationship can come from **many directions**. Identifying them early is crucial to neutralizing them.

**Types of threats:**

1. **Direct threats:** People actively pursuing your partner
2. **Indirect threats:** Circumstances creating opportunity for others
3. **Passive threats:** People not actively pursuing but "available"
4. **Social threats:** Pressure from friends/family who don't approve
5. **Lifestyle threats:** Work, travel, environments that distance her

**Signs of active threat:**

- She mentions someone new repeatedly
- Changes in routine not involving anyone known
- More careful with appearance for certain events
- Secretive with phone
- Defensive when you ask about certain people

**Signs of vulnerability:**

- She's going through a difficult time with you
- Feels something's missing in the relationship
- Is exposed to environment with many options
- Your relationship is in a rough patch

**The golden rule:**

External threats only work if there's **internal vulnerability**. A solid relationship is naturally resistant. Your best defense is strengthening the relationship, not obsessing over threats.`
      },
      {
        title: "4.2 The 5 Types of Competition",
        content: `Not all "competitors" are the same. Understanding the type of threat helps you respond appropriately.

**Type 1: The Opportunist**
Person who notices an opportunity and takes advantage. Doesn't know your partner well but sees an opening.

*Characteristics:*
- Appears when there are problems in your relationship
- Offers attention/validation you're not giving
- Is superficial, has no history with her

*Threat level:* Low if your relationship is solid. High if there are problems.

**Type 2: The Close Friend**
Someone who has always been there, who "understands her," who's "waiting for his moment."

*Characteristics:*
- Long history with her
- Frequent access
- Knows her vulnerabilities
- May seem "harmless"

*Threat level:* Medium to high. Frequent access is dangerous.

**Type 3: The Ex**
Her ex-partner trying to come back or stay present.

*Characteristics:*
- Prior romantic history
- Knows her intimate patterns
- Can activate nostalgia

*Threat level:* Variable. High if she didn't properly close that chapter.

**Type 4: The Colleague/Companion**
Person from work, gym, or regular activity who spends a lot of time with her.

*Characteristics:*
- Forced proximity
- Shared interests
- Time together without you

*Threat level:* Medium. Prolonged exposure creates familiarity.

**Type 5: The Attractive Stranger**
Someone new, exciting, mysterious who appears.

*Characteristics:*
- Novelty (dopamine)
- No baggage or negative history
- Represents the "different"

*Threat level:* Low individually, high if she's looking for "escape."`
      },
      {
        title: "4.3 Shielding Techniques",
        content: `**TECHNIQUE 1: EXCLUSIVITY REINFORCEMENT**

Objective: Make her feel what you have is unique and irreplaceable.

**Implementation:**

1. **Create exclusive experiences:**
   Things only you two share, do, or understand.
   - "Your" places
   - Inside humor
   - Your own rituals
   - Couple traditions

2. **Verbalize exclusivity:**
   "No one makes me feel like you do"
   "What we have is different from anything I've had"
   (Only if genuine)

3. **Show unique investment:**
   Do things for her you wouldn't do for anyone else.
   Share things with her you wouldn't share with anyone else.

---

**TECHNIQUE 2: VALUE DEMONSTRATION**

Objective: Constantly remind her why you're the best option.

**Areas to demonstrate value:**

1. **Emotional value:**
   You understand her, support her, validate her.

2. **Social value:**
   You have an interesting life, friends, status.

3. **Provision value:**
   You have direction, ambition, resources.

4. **Physical value:**
   You take care of yourself, are attractive, have energy.

5. **Sexual value:**
   The physical connection is satisfying.

**Implementation:**
Don't say it, show it. Actions speak. When she compares (consciously or not), you should come out winning.`
      },
      {
        title: "4.4 How to Handle Active Competition",
        content: `When you identify someone actively pursuing your partner, your response should be **strategic, not reactive**.

**What you should NOT do:**

❌ Directly confront the third party
❌ Forbid her from seeing him
❌ Make jealous scenes
❌ Demand she choose
❌ Check her phone
❌ Constantly interrogate her

**What you SHOULD do:**

✅ **Stay calm:**
Uncontrolled jealousy makes you look insecure. Breathe.

✅ **Intensify your game:**
Apply shielding techniques more frequently and intensely.

✅ **Observe without obsessing:**
Notice patterns but don't become a detective.

✅ **Communicate without accusing:**
"I've noticed [observation]. Is there something I should know?"

✅ **Trust your value:**
If you're really the best option, that will become clear.

**Specific scenario: She admits attraction to another**

This is a delicate situation. Your response:

1. Don't explode (even if you want to)
2. Listen completely
3. Ask: "What does this mean for us?"
4. Decide based on her response and actions, not just words

If she's honest and actively chooses to stay with you, it can strengthen the relationship. If she minimizes or isn't willing to distance from the third party, you have important information.`
      },
      {
        title: "4.5 Fatal Errors to Avoid",
        content: `These mistakes destroy relationships and should be avoided at all costs:

**Error 1: The Paranoid Jealous**
Seeing threats where there aren't any. Questioning every interaction with other men. This destroys trust and pushes her outward.

**Error 2: The Controller**
Trying to limit her freedom, her friendships, her time. This generates resentment and rebellion.

**Error 3: The Comparer**
Speaking badly of other men to make yourself look better. This is pathetic and transparent.

**Error 4: The Verbal Insecure**
Constantly asking if she loves you, if she's interested in others, if she's going to leave you. This is suffocating.

**Error 5: The Dramatic**
Creating scenes every time you detect something. This exhausts and makes the relationship feel heavy.

**Error 6: The Vengeful**
Trying to create jealousy in response. This escalates in a destructive spiral.

**Error 7: The Denier**
Ignoring evident signs for fear of facing them. This allows small problems to become crises.

**The correct mindset:**

"I'm the best option available for her. If she decides to look elsewhere, it's her loss. But I'm going to give her every reason to stay."

This quiet confidence is your best shield. Secure men don't need to control because they know their value.`
      }
    ]
  },
  {
    id: 5,
    title: "Relationship Consolidation",
    subtitle: "How to make permanent what you've gained",
    icon: "💎",
    imagePlaceholder: "[IMAGE: Pyramid of the 3 consolidation levels]",
    downloadables: {
      pdf: "lesson-5-consolidation.pdf",
      checklist: "checklist-consolidation.pdf"
    },
    sections: [
      {
        title: "5.1 How to Make Permanent What You've Gained",
        content: `Reconquest gave you back the opportunity. Maintenance has sustained it. Now it's time to **consolidate** so the relationship becomes something permanent and resistant.

Consolidation is the process of **transforming a recovered relationship into a new and better one**. It's not about going back to what it was, but building something superior.

**Why consolidation is necessary:**

1. **Without consolidation, the relationship is in provisional state**
   Both may feel that "this can still fail."

2. **Consolidation creates mutual investment**
   The more invested each is, the costlier it is to leave.

3. **Consolidation generates couple identity**
   You go from being "two people together" to "a couple."

4. **Consolidation naturally shields**
   A consolidated relationship is inherently resistant.

**The difference between reconquest, maintenance, and consolidation:**

| Phase | Objective | State |
|-------|-----------|-------|
| Reconquest | Recover | She came back |
| Maintenance | Sustain | She stays |
| Consolidation | Root | She can't imagine leaving |

Your final goal is the third state: where the relationship is so deeply integrated into both lives that separating would be an enormous cost for both.`
      },
      {
        title: "5.2 Level 1: Emotional Consolidation",
        content: `Emotional consolidation is the first and most important level. Without it, other levels are superficial.

**Objective:** Become her **primary emotional anchor**.

**What being an emotional anchor means:**

- You're the first person she seeks in difficult moments
- Your approval matters more than others'
- Your emotional state directly affects hers
- She can't imagine going through important events without you

**How to achieve it:**

1. **Constant presence in critical moments:**
   - Celebrations: Be the first to congratulate
   - Crises: Be the first to show up
   - Transitions: Be her main support

2. **Creating healthy emotional dependence:**
   - Active listening no one else gives her
   - Valuable perspectives on her life
   - Validation she seeks from you first

3. **Connection rituals:**
   - Regular deep conversations
   - Consistent intimacy moments
   - Couple-specific traditions

4. **Significant shared history:**
   - Overcome challenges together
   - Create powerful memories
   - Build an "us" narrative

**Signs of successful emotional consolidation:**

✅ "You're the first person I think of when..."
✅ She seeks your opinion before decisions
✅ Your absence visibly affects her
✅ She includes you in her inner world`
      },
      {
        title: "5.3 Levels 2 and 3: Social and Practical Consolidation",
        content: `**LEVEL 2: SOCIAL CONSOLIDATION**

Social consolidation integrates the relationship into both your ecosystems.

**Objective:** Have the relationship be **recognized and valued** by important people in your lives.

**Components:**

1. **Integration into her circle:**
   - Know her close friends
   - Have good relationship with her family
   - Participate in her social events
   - Be part of her world, not a visitor

2. **Her integration into your circle:**
   - Introduce her to your important people
   - Have your friends appreciate her
   - Have your family accept her
   - Make her feel welcome

3. **Creating shared circle:**
   - Couple friends
   - Friendly couples
   - Social activities together
   - Shared community

---

**LEVEL 3: PRACTICAL CONSOLIDATION**

Practical consolidation creates **tangible interdependencies** that make separation logistically costly.

**Components:**

1. **Integrated routines:**
   - Regular activities together
   - Shared responsibilities
   - Times that are "couple time"
   - Daily/weekly rituals

2. **Shared projects:**
   - Goals you pursue together
   - Mutual time/energy investments
   - Results that depend on both

3. **Integrated resources:**
   - Not necessarily shared finances
   - Coordinated time
   - Shared spaces
   - Possessions you use together

4. **Future commitments:**
   - Medium/long-term plans
   - Reserved events
   - Decisions that assume continuity

**Important caution:**

Practical consolidation without emotional consolidation is a trap. Don't use "things" to retain her. Use "things" to express and reinforce a genuine connection.`
      },
      {
        title: "5.4 Signs of Successful Consolidation",
        content: `How to know if consolidation is working? Look for these signs:

**Emotional signs:**

✅ She talks about you as a permanent part of her life
✅ Your opinions influence her important decisions
✅ Her well-being is tied to yours and vice versa
✅ She can't imagine important moments without you
✅ She introduces you as something more than "my boyfriend" (my partner, my life companion)

**Social signs:**

✅ Her friends and family ask about you
✅ You're invited as a couple, not as individuals
✅ You have shared friends
✅ Her circle would assume breaking up is unthinkable

**Practical signs:**

✅ You coordinate calendars naturally
✅ You have active projects together
✅ You plan long-term without hesitation
✅ Individual decisions consider the other

**Language signs:**

✅ "We" is more common than "I" and "you"
✅ She talks about the future in plural
✅ She casually makes references to future commitments

**The definitive test:**

If someone asked her: "What would happen if you broke up?", her genuine answer would be that she can't imagine it, not that it would be difficult.

When separation becomes **unthinkable** (not just difficult), you've achieved complete consolidation.`
      }
    ]
  },
  {
    id: 6,
    title: "30-Day Protocol",
    subtitle: "Your daily action plan for the first 30 days",
    icon: "📅",
    imagePlaceholder: "[IMAGE: 30-day calendar with phases and objectives marked]",
    downloadables: {
      pdf: "lesson-6-30-day-protocol.pdf",
      protocol: "complete-30-day-protocol.pdf",
      checklist: "daily-checklist.pdf"
    },
    sections: [
      {
        title: "6.1 Protocol Overview",
        content: `This 30-day protocol is your **daily guide** to consolidating the reconquest and establishing the foundations for a lasting relationship.

**Protocol structure:**

| Phase | Days | Objective |
|-------|------|-----------|
| Phase 1 | 1-5 | Initial consolidation |
| Phase 2 | 6-10 | Emotional deepening |
| Phase 3 | 11-15 | Social integration |
| Phase 4 | 16-20 | Future creation |
| Phase 5 | 21-25 | Final shielding |
| Phase 6 | 26-30 | Permanent maintenance |

**General rules:**

1. **Consistency over intensity:** Better to do a little each day than a lot one day and nothing the others.

2. **Flexibility within structure:** Adapt actions to your specific situation.

3. **Documentation:** Keep a simple record of what you do and results.

4. **Don't skip phases:** Each phase prepares the next.

5. **Recovery after failures:** If a day fails, don't abandon. Resume the next day.`
      },
      {
        title: "6.2 Phase 1: Initial Consolidation (Days 1-5)",
        content: `**Phase objective:** Establish the "new normal" post-reconquest.

**DAY 1:**
- [ ] Establish/confirm a communication routine
- [ ] Have a conversation about expectations (no pressure)
- [ ] Plan at least one meeting this week
- [ ] Start progress tracking

**DAY 2:**
- [ ] Added value message (something useful/interesting for her)
- [ ] Maintain conversation but don't monopolize
- [ ] If small conflict arises, handle calmly
- [ ] Observe and record her initiative level

**DAY 3:**
- [ ] Small surprise (can be just a meaningful message)
- [ ] Ask about something in her life you haven't asked
- [ ] Share something from your day that's interesting
- [ ] Validate something specific she does/says

**DAY 4:**
- [ ] Have quality time together (virtual or in-person)
- [ ] Deepen conversation beyond the superficial
- [ ] Significant physical contact if in person
- [ ] Create a small memorable moment

**DAY 5:**
- [ ] Evaluate the first 4 days
- [ ] Identify what's working
- [ ] Adjust what's not working
- [ ] Plan next week together

**Phase 1 success signs:**
✅ Communication flows naturally
✅ She initiates contact at least 1-2 times
✅ No residual tension from the breakup
✅ Both seem comfortable`
      },
      {
        title: "6.3 Phases 2-4 Summary",
        content: `**PHASE 2: EMOTIONAL DEEPENING (Days 6-10)**

Objective: Create deeper emotional connection.

Key activities:
- Vulnerable conversations (share something personal)
- Special plans together
- Deep questions about her inner life
- More significant surprises
- Quality time without distractions

Success signs:
✅ She shares things she didn't share before
✅ She seeks you for emotional support
✅ Moments of deep connection
✅ Greater physical/emotional intimacy

---

**PHASE 3: SOCIAL INTEGRATION (Days 11-15)**

Objective: Integrate relationship into social context.

Key activities:
- Plan meeting with her friends/family
- Plan meeting with your friends/family
- Plan with friends of both (or new couple friends)
- Feedback conversation about social meetings
- Plan next social events

Success signs:
✅ Her friends/family receive you well
✅ She feels comfortable with your people
✅ Starting to have "couple-friends"
✅ You're seen as a unit

---

**PHASE 4: FUTURE CREATION (Days 16-20)**

Objective: Establish shared vision of the future.

Key activities:
- Conversation about short-term goals (3 months)
- Conversation about medium-term (6-12 months)
- Conversation about long-term (1-5 years)
- Concrete action toward a shared goal
- Celebrate this step together

Success signs:
✅ You talk about the future naturally
✅ You have concrete plans together
✅ Compatible visions
✅ Both invest in shared future`
      },
      {
        title: "6.4 Phases 5-6: Final Shielding and Permanent Maintenance",
        content: `**PHASE 5: FINAL SHIELDING (Days 21-25)**

Objective: Establish protections against threats.

**DAY 21:**
- [ ] Evaluate relationship vulnerabilities
- [ ] What could threaten what you've built?
- [ ] Are there dangerous patterns resurfacing?
- [ ] Are there third parties causing concern?

**DAY 22:**
- [ ] Conversation about crisis communication
- [ ] How will you handle conflicts?
- [ ] What are the relationship agreements?
- [ ] Establish "rules of engagement"

**DAY 23:**
- [ ] Reinforce exclusivity
- [ ] Special activity that's "only ours"
- [ ] Verbalize the unique value of the relationship
- [ ] Create experience that consolidates bond

**DAY 24-25:**
- [ ] Conversation about boundaries with others
- [ ] Clear and mutual agreements
- [ ] Evaluate phase 5

---

**PHASE 6: PERMANENT MAINTENANCE (Days 26-30)**

Objective: Transition to sustainable maintenance mode.

**DAY 26-27:**
- [ ] Establish weekly maintenance routines
- [ ] What are the relationship "non-negotiables"?
- [ ] Establish monthly surprise system
- [ ] Plan how to maintain novelty

**DAY 28-29:**
- [ ] Deep review of the 30 days
- [ ] What worked best?
- [ ] What needs more work?
- [ ] Closing conversation of the protocol

**DAY 30:**
- [ ] Official celebration
- [ ] Significant activity to mark the milestone
- [ ] Individual and shared reflection
- [ ] Start of the next chapter

**After day 30:**
Continue with established maintenance routines. Review monthly. Adjust as needed. Never take anything for granted.`
      }
    ]
  },
  {
    id: 7,
    title: "Exclusive Resources",
    subtitle: "Your access to exclusive support and elite community",
    icon: "🏅",
    imagePlaceholder: "[IMAGE: Completion certificate and exclusive access]",
    downloadables: {
      pdf: "lesson-7-exclusive-resources.pdf",
      checklist: "checklist-exclusive-resources.pdf"
    },
    sections: [
      {
        title: "7.1 Your Premium Access",
        content: `Your investment includes a **complete support system** designed to ensure your long-term success.

**The 5 Pillars of Your Access:**

1. **Community Access**
   Lifetime membership in our exclusive community of men who have completed all 3 modules.

2. **Priority Support**
   Direct email support access with response in less than 24 hours.

3. **Permanent Updates**
   Any new content, technique, or module we add, you receive at no additional cost.

4. **Premium Resources**
   Access to monthly webinars, exclusive materials, and additional tools.

5. **Group Mentoring**
   Periodic Q&A sessions with experts.

**Why we offer all this:**

We believe in the program. Results speak for themselves. Our success rate is 98% among users who complete all 3 modules and apply the protocol.`
      },
      {
        title: "7.2 How to Maximize Your Investment",
        content: `To get maximum value from your premium access, follow these recommendations.

**Optimal use of resources:**

1. **Participate actively in the community**
   - Present your case
   - Help others (this reinforces your learning)
   - Celebrate your victories

2. **Attend the webinars**
   - Mark the date in your calendar
   - Prepare questions in advance
   - Take notes during the session

3. **Download all materials**
   - PDFs from each lesson
   - Checklists and templates
   - Special guides

4. **Use support strategically**
   - Don't wait until you're in crisis
   - Ask when you have doubts
   - Be specific in your questions

**Recommended frequency:**

- Community: Daily review (5-10 minutes)
- Webinars: Monthly attendance
- Materials: Weekly review of relevant resources
- Support: When you need it

**Mistakes to avoid:**

❌ Not participating in the community
❌ Missing the webinars
❌ Not applying what you learned
❌ Expecting results without effort
❌ Not asking for help when you need it`
      },
      {
        title: "7.3 Final Message: Your Certificate of Success",
        content: `If you've made it here and completed all 3 modules, **congratulations**.

You've demonstrated something most men don't have: **the determination to learn, change, and improve**.

**What you've achieved:**

✅ Understood the deep reasons behind the breakup
✅ Applied proven reconquest techniques
✅ Developed emotional dominance
✅ Learned the psychological triggers of desire
✅ Established a maintenance system
✅ Shielded the relationship against threats
✅ Consolidated a relationship stronger than the original

**What this means:**

You didn't just recover a relationship. You became a man who understands relationships at a level most never reach. This knowledge will serve you forever, in this relationship and in any aspect of your life.

**Your certificate:**

By marking this lesson as complete, you'll unlock your Completion Certificate. This certificate represents:
- Completing all 3 modules (21 lessons)
- Investing in your personal development
- Committing to relational excellence

**Keep it. Deserve it. Remember what it meant to get here.**

---

**From the program team:**

Thank you for trusting us. Your success is our greatest satisfaction.

Now go live the relationship you built. You deserve it.

🏆 *Welcome to the elite.*`
      }
    ]
  }
];

export const getModule3LessonById = (id: number): Module3Lesson | undefined => {
  return module3Lessons.find(lesson => lesson.id === id);
};

export const getNextModule3LessonId = (currentId: number): number | null => {
  const currentIndex = module3Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === module3Lessons.length - 1) return null;
  return module3Lessons[currentIndex + 1].id;
};

export const getPreviousModule3LessonId = (currentId: number): number | null => {
  const currentIndex = module3Lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex <= 0) return null;
  return module3Lessons[currentIndex - 1].id;
};

export const module3Badges = [
  'Maintenance Scientist',
  'Permanent Trigger Master',
  'Anti-Distancing Shield',
  'Shielded Guardian',
  'Expert Consolidator',
  '30-Day Strategist',
  'Certified Elite'
];
