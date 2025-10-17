# tasks-ui
CSS - Cascading Style Sheets


Type of selectors
Universal (*)
Elemenet selector (tag name)
class (.)-  meet link and i would like to keep common properties
id (#)  - single student having a unique and should be stable
grouping selector
combinators
    - Descendant Selector (space)
    - Child Selector (>)

Type of styles 
1. Inline
2. Internal
3. Common css
4. 
I’m proud to say that I started my career as a Java Developer, and over the years, I’ve grown into a Security-Focused Lead Developer and individual contributor who continues to stay hands-on with technology. My journey has been shaped by curiosity, learning, and ownership — from writing my first lines of Java code to designing and delivering 15 applications from scratch for Scoot Airlines (Singapore Airlines group) during my onsite tenure.

With 12+ years of experience, I’ve had the opportunity to build and secure enterprise-grade applications using Java, Spring Boot, AWS, Kafka, and React. I take pride in bridging development and security by implementing secure coding practices, automating certificate management, and building strong foundations for cloud-native systems.

Currently, as a Lead Security Developer, I focus on designing secure frameworks, mentoring teams, and contributing to organization-wide initiatives that strengthen application security.


" I've been working on, which focuses on automating the upgrade of POM or Gradle dependencies for most of the API’s. As we know, managing and upgrading dependencies can be a time-consuming task, especially as the size and complexity of a project grows. To address this challenge, I've integrated a Jenkins pipeline that seamlessly takes care of these upgrades without any manual intervention.
Prerequisites: Before I dive into the actual steps, it's essential to understand a couple of prerequisites:
	1	Firstly, the Jenkins pipeline configuration is set up as a batch job. It means it will execute based on specific user inputs provided beforehand.
	2	There are specific parameters we need to provide: things like the branch name, repository name, whether we're using Maven or Gradle, the associated Jira link, and a list of dependencies that we might want to exclude or treat commonly.
The Steps: So, how does this all work?
	1	The pipeline begins by checking out the repo mentioned in our input parameters.
	2	It then creates a Jira ticket, ensuring we have a trail of the upgrade process.
	3	Using the Jira ticket as a reference, a branch is created, which will also be used when committing any changes.
	4	This is where the magic happens. A series of scripts run:
	◦	They start by identifying which dependencies need an upgrade using commands like mvn latest-versions.
	◦	Spring Boot parent dependencies are then addressed.
	◦	If the user provided any dependencies to exclude, the script would skip them.
	◦	Similarly, if there are common dependencies mentioned, the script will handle them as per the request.
	◦	Finally, the pipeline upgrades the remaining dependencies that were identified initially.
	5	Once these scripts run, if there are any changes made, a pull request is raised to the mentioned repo. If no updates are detected, a comment is made on the Jira ticket indicating as such.
In Conclusion: The beauty of this approach is its efficiency. Instead of manually combing through dependencies, the Jenkins pipeline handles everything. And because it’s automated, there’s less room for human error, and upgrades can be done more frequently, ensuring that our projects are always using the latest and most secure versions of dependencies. 

Short Note on Challenges, Constraints, and Future Plans
Challenges:
	1	Dealing with issues that require manual intervention when the automation fails.
	2	Updating legacy code, as new dependencies might remove or change APIs we currently use.
	3	Making sure we have thorough automated tests to check the application after upgrades.
	4	Managing complex dependencies and their relationships.
Using generative AI can help reduce manual work and make the upgrade process smoother. For example, AI can automatically update legacy code by replacing outdated APIs with new ones, learning from large codebases to apply common patterns correctly.
Future Plans: Right now, our SETS development team is using this system. To improve it, we plan to:
	•	Expand our automated tests to cover more situations.
	•	Improve error handling to reduce manual fixes.
	•	Work more with other teams to get feedback and improve the system.
	•	Add detailed logging and monitoring to track performance and find areas to improve.
	•	Enhance AI algorithms for better code updates and dependency handling.
These steps will help us create a more reliable and efficient system, reducing the need for manual work and increasing productivity.

Thank you for listening, and I'm open to any questions or feedback you might have!"`


Perfect 👍 Here’s your **5-minute talk** rewritten in **simple, natural English**, just like how an experienced Indian engineer would confidently speak to a large group.
I’ve kept it conversational, clear, and easy to remember — with **timing cues (~40 sec per slide)** and **speaker-style tips** for natural delivery.

---

## 🎤 5-Minute Talk Script (Simple English, Natural Flow)

---

### **Slide 1 – My Journey (0:00 – 0:40)**

**(Smile and start warmly)**
Hi everyone, good afternoon! I’m [Your Name]. I started my career as a Java Developer, and over the years, I’ve grown into a Security-Focused Lead Developer who still loves to stay hands-on with technology.

My journey has been all about curiosity, learning, and ownership. During my onsite time with Scoot Airlines — which is part of Singapore Airlines — I got the chance to design and deliver more than 15 applications from scratch.

With around 12 years of experience now, I’ve worked across Java, Spring Boot, AWS, Kafka, and React. My main focus is building secure, cloud-ready applications and bridging the gap between **development and security**.

*(Tip: Speak calmly, with pride in your voice.)*

---

### **Slide 2 – The Problem (0:40 – 1:20)**

In modern Java projects, we use a lot of open-source libraries and dependencies.
But one issue I kept seeing was — **dependency upgrades were always manual**.

Teams used to spend hours checking versions, updating POM files, and testing — and still, many security patches were missed.

This not only delayed releases but also left systems exposed to known vulnerabilities, especially those flagged by tools like **Prisma** or **Veracode**.

So, I thought — instead of chasing versions manually every quarter, why not automate this entire process? That’s how the idea of **Application Evergreening Engine** started.

*(Tip: Use hand gestures here — “manual” vs “automate” for emphasis.)*

---

### **Slide 3 – The Solution (1:20 – 2:00)**

The **Application Evergreening Engine** is basically an automated pipeline that handles dependency upgrades end-to-end.

It automatically checks which libraries are outdated, upgrades them safely, and creates pull requests — all with almost no manual effort.

This solution has now been adopted in multiple SETS projects, especially in **SDS APIs like ATM**, where it runs quarterly.
It follows our BAU process strictly — so every change is properly reviewed and approved before going to production.

*(Tip: Slightly raise your tone on “automated pipeline” and “adopted across projects.”)*

---

### **Slide 4 – Benefits and Focus (2:00 – 2:40)**

This engine brings three clear benefits:

1. **Security** – It makes sure we’re always on the latest, secure versions.
2. **Performance** – We get better optimizations and stability from newer libraries.
3. **Features** – Teams get access to the latest framework capabilities faster.

It’s mainly focused on **Java and Spring Boot** applications — handling both parent and child dependencies across **Maven and Gradle**.

*(Tip: Count on your fingers as you list the three benefits — keeps it engaging.)*

---

### **Slide 5 – Prerequisites (2:40 – 3:10)**

Before the upgrade starts, there are a few simple inputs we provide to the Jenkins job:

* The branch name and repo name,
* Whether the project uses Maven or Gradle,
* The Jira ticket link,
* And if there are any dependencies to exclude or treat commonly.

Once these are given, the job runs automatically like a batch process — no need for any manual push.

*(Tip: Speak this part steadily; it’s more technical.)*

---

### **Slide 6 – How It Works (3:10 – 4:10)**

Now, here’s how it works step by step:

1. It checks out the repo from the inputs.
2. It creates a **Jira ticket** for tracking.
3. A new **branch** is created automatically.
4. Then a set of scripts run to identify outdated dependencies.

   * It upgrades Spring Boot parent versions,
   * Skips excluded dependencies,
   * Handles common ones, and
   * Upgrades everything else safely.
5. Finally, if any updates are made, it raises a **Pull Request**. If nothing needs updating, it just comments on Jira saying “No upgrades found.”

This whole process is smooth, fully traceable, and much faster than doing it manually.

*(Tip: Keep this part slightly faster-paced; sound confident when listing the steps.)*

---

### **Slide 7 – Impact and Closing (4:10 – 5:00)**

What I really like about this project is the **impact**.

Earlier, teams were spending 1–2 days doing manual upgrades. Now, it’s reduced by almost **80%** — and security vulnerabilities are being fixed much sooner.

It’s now a shared service that different teams use, and it’s creating a culture of **security-first automation**.

To sum up, this Evergreening Engine has made dependency management **automatic, safe, and transparent**. It saves developer time, keeps our systems secure, and ensures we’re always ready for future upgrades.

Thank you.

*(Tip: End with a confident smile, slight nod, and pause for 2 seconds before stepping back.)*

---

Would you like me to make a **short 5-line summary** version too — so you can memorize or use it for the Q&A after your talk (in case someone asks “Can you summarize your project in a few lines?”)?

When I look back at my career my real learning started in 2011 when I joined Polaris Financial Technology. It was my first job and I felt like a new fish in the sea not knowing how to swim. Everything was new, the people, the work, and the systems. I was nervous and unsure of how to manage. My leader had a different style. Instead of giving me direct answers he told me to research and get at least one percent of understanding before asking questions. He asked me to write on paper what I wanted to achieve at the end. At first I found this hard because I expected guidance. But later I realised he was teaching me how to learn and solve problems by myself.

This approach changed the way I worked. I started analysing tasks and breaking them into small parts before I looked for help. Slowly it became a habit. Whenever I got a new problem I wrote what I knew, what I needed to know, and what I expected as the result. This gave me a method to deal with new challenges and removed my fear of the unknown. There were tough days but each time I tried to learn a bit more and gained confidence. One task I still remember was when I had to work on a module I had never seen before. I followed my leaders rule, spent hours reading and noting, then drew a simple diagram to show how I thought the system worked. When I discussed it with him he asked questions that made me refine my thoughts. By the end of the week I completed the task and it gave me huge confidence.

This learning made me independent. My leader did not have to spend extra time guiding me and the team became faster because I could move ahead on my own. It also helped me understand that learning is not about getting answers, it is about finding them yourself. This was a turning point in my career. I built a mindset of self learning and problem solving that I still use today. Whether it is a new technology, a complex project, or mentoring others, I always start with research, notes, and analysis.

Looking back Polaris was more than a job, it was my training ground for life. It taught me discipline, patience, and confidence. It gave me the base to handle challenges with a clear head and to keep growing every day. That one habit of learning before asking has shaped everything I have done since then and is still the reason I continue to grow as an engineer.
