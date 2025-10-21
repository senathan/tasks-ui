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
Excellent thinking 👏 — yes, moving that section under **“Business Problems Solved and Strategic Impact”** actually strengthens the flow.

Here’s why it works better:

* The **Overview** can stay focused on your *role, experience, and scope*.
* The **Business Problems** section can then clearly show *how you applied that technical leadership* to deliver outcomes and value.
* It reads more naturally and shows that your leadership has *visible impact*, not just responsibilities.

Below is your **simplified and revised email** (clean, natural tone, easy to read, and ready to send).

---

**Subject:** Request for Sponsorship – Expert Engineer Programme Application

Dear [Director’s Name],

I hope you are doing well. I work as a Lead Security Developer under Andrew and Conell, and I would like to apply for the Expert Engineer Programme in this year’s cohort. As part of the application process, I need MS sponsorship and endorsement, and I am writing to request your support.

I have shared below a short overview of my work, the business problems I have solved, and how this programme aligns with my career goals.

---

### **1. Overview of My Experience**

I joined the bank on 22 August 2022 as a Lead Security Developer. Since then, I have led multiple key projects that have improved security, automation, and delivery efficiency across our systems. I take full ownership of delivery from design to implementation, ensuring quality and governance. I also focus on collaboration with cross-functional teams to make sure our work meets both technical and business goals.

---

### **2. Business Problems Solved and Strategic Impact**

I provide technical leadership through design guidance, mentorship, and promoting secure coding practices across teams. My focus is on building reusable frameworks, performing vulnerability checks, and embedding security into our processes by design.

Some of the major projects I have led or contributed to include:

* **ATM Certificate Management Portfolio:** I led the automation and migration of the ATM estate renewal process, including multiple dependent libraries. This ensured a smooth transition to the new renewal component with improved operational stability and compliance.
* **CSM UI Development:** I delivered key enhancements that improved both the user experience and team efficiency for our internal systems.
* **Application Evergreening Component:** I designed and implemented the automation solution that manages dependency upgrades across SETS in-house projects. This reduced manual upgrade work by around **80%**, saving **15–20 developer hours every month** and ensuring quicker rollout of critical security fixes.
* **Akamai Cloud WAF Automation:** I am leading the design and delivery of this automation project to simplify onboarding of hosts and properties into Akamai. The solution greatly reduces manual work and enhances security consistency across environments.

These projects solved key business problems by reducing operational risks, saving time, and improving overall system resilience. They also reflect how I have used technical leadership to influence security and engineering practices at scale.

---

### **3. Career Goal**

I have always enjoyed being an individual contributor because it allows me to focus on technical depth and create real value. I take pride in mentoring others, solving complex challenges, and driving long-term improvements that benefit multiple teams.

The **Expert Engineer Programme** is the right next step in my journey. It supports engineers who want to grow into strong technical leaders, with influence that extends across teams and systems. I believe this programme will help me deepen my impact by strengthening my technical leadership skills and expanding the value I bring to the organization.

I would be grateful for your sponsorship and endorsement for this application. Please let me know if you would like me to share any more details or supporting information.

Thank you for your time and consideration.

Warm regards,
**[Your Full Name]**
Lead Security Developer
[Your Department / Team Name]
[Your Email Signature, if applicable]

---

✅ **This version:**

* Uses **simple, clear English** (no corporate buzzwords).
* Keeps the tone professional but human.
* Moves the **technical leadership** part under *Business Problems Solved*, linking leadership → results.
* Reads naturally for a director (short enough to scan, detailed enough to endorse).

Would you like me to make it **slightly shorter** (for a quick-read internal email version, under 250 words), or do you want this one as your **final ready-to-send** version?


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
4. Cross-Functional Collaboration

I believe strong collaboration is key to technical success. During the aPaaS v3 to v4 migration project, I had to coordinate with several teams — including the Network team, ATM Stack team, and ATM Test team — to ensure a smooth transition.

One major challenge was that the client applications were tightly bound to a fixed certificate provisioning URL, and changing it required significant rebuild effort. Working with the network team, I helped design a load-balancing solution using virtual IPs, which allowed traffic redirection to v4 while keeping the existing client URL intact.

To make this work, I facilitated joint sessions between the development, testing, and infrastructure teams to align on implementation steps, testing strategy, and fallback plans. I documented every change, reviewed configuration scripts with the network team, and ensured all validation was completed before deployment.

This cross-team collaboration helped us deliver the migration on schedule without service disruption. It also improved inter-team understanding of the certificate management flow, leading to better communication and efficiency in later releases.

Impact: The project strengthened collaboration across technology and operations teams, built shared ownership, and ensured the business achieved its migration goals with minimal downtime.

He has been an approachable and reliable go-to person for any RTN-related queries or concerns. As my mentor for the EE programme, his regular sessions and constructive feedback helped me broaden my perspective and enhance my individual contributions effectively.

He has been an exceptional leader, always providing strong support during critical RTM issues or major incidents. His unique decision-making approach and calm handling of challenging situations truly inspire me. I deeply admire his leadership skills and strategic perspective.
