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
In 2025, I led several high-impact initiatives across the ATM platform, delivering key enhancements such as vulnerability fixes, mTLS-enabled Cert-Renewal APIs, and dynamic secrets rotation. I successfully managed ELK migration, Windows Server upgrades, and implemented one-click production deployments with zero disruption. I consistently stayed ahead of delivery plans and ensured all components met resilience and compliance standards.

I continued championing the Application Evergreen component across in-house projects, enabling secure, automated patching with no issues reported. As part of the Cloud-WAF onboarding automation, I led solution design, wireframes, and Spring Batch implementation, while actively coordinating with cross-functional teams and stakeholders to ensure complete requirement coverage.

I delivered CSM UI enhancements (IRIS and Fierce) on time and defect-free, and remediated all vulnerabilities within SLA for ATM and CSM estates. I ensured strong documentation, risk management, and stakeholder communication, with a focus on secure and automated delivery.

I improved CI/CD processes using GitLab pipelines and supported others in adopting automation. I also enrolled in the 2025 Staff Engineer Excellence Programme to further enhance my technical leadership.

Through innovation, ownership, and collaboration, I’ve delivered high-quality results while promoting best practices, technical growth, and world-class service across all projects.


Got it 👍
Here are **all 12 questions rewritten in very simple English**, with **short, clear, natural answers** (4–5 lines each).
No complex words. No corporate language. Just clean, human English you can speak in an interview.

---

# ✅ **Simple English Q&A (Expert Engineer Prep)**

---

### **1. What do the next 2 years look like for you?**

In the next two years, I want to grow stronger in automation, cloud, and AI.
I want to build tools that help many teams, not just my own.
My focus is to solve bigger problems and become someone other teams can rely on.
I want to improve my technical depth and also learn how to guide others better.

---

### **2. What do you want to achieve if you are successful in the Expert Engineer programme?**

I want to learn from senior engineers and improve how I design systems.
I want to use the programme to grow my skills and make a wider impact.
I hope to build better tools, improve engineering standards, and help teams work smarter.
This programme will help me move from team-level impact to organisation-level impact.

---

### **3. If you could change something in your Evergreening project, what would it be?**

I would build it in a way that supports many languages, not just Java.
A plugin-style design would make it easy to add Python, Docker, Node, or Terraform in the future.
I would also add better logging and more automated tests.
This would make the system easier to extend and safer to run.

---

### **4. How do you control deployment, and who approves it?**

The automation only creates a pull request with the upgrades.
The owning squad reviews it, and the product owner or release manager approves it.
Only after approval does it move through the normal CI/CD steps.
This keeps the process safe and follows all governance rules.

---

### **5. Do you want to make it zero-touch in the future?**

Yes, for simple and low-risk updates.
But high-risk updates should still be checked by a human.
A mix of automation plus review is safer.
I want speed, but I also want safety.

---

### **6. How would your engine work in GitLab, Travis CI, or other CI/CD tools?**

The main engine does not depend on Jenkins.
If we put the logic into a container or CLI tool, it can run on any CI/CD system.
Only the wrapper needs to change for GitLab or GitHub Actions.
I also want to extend it beyond Java to support other languages.

---

### **7. What do you know about the Expert Engineer programme so far?**

It is for engineers who solve big problems and help others grow.
It focuses on deep technical skills, mentoring, and strong delivery.
It also expects engineers to think long-term and improve engineering culture.
I see it as a great chance for me to grow and make a bigger impact.

---

### **8. How does your work reduce organisational risk?**

Automatic upgrades keep libraries up to date and more secure.
It reduces the chance of running old, vulnerable versions.
Jira tracking gives full visibility and audit history.
This helps the organisation stay safe and compliant.

---

### **9. How do you mentor or support others?**

I explain things in simple language with diagrams or examples.
I run small sessions to help people learn automation.
I encourage teammates to try things and ask questions.
My aim is to help the whole team grow, not just finish tasks.

---

### **10. What is one area you want to improve personally?**

I want to get better at delegating early.
Sometimes I try to do too much myself because I enjoy problem-solving.
I am learning to involve others sooner so we share knowledge.
This helps build stronger teamwork.

---

### **11. How do you handle disagreement on technical decisions?**

I listen first and try to understand the other person’s view.
Then I test ideas with small proof-of-concepts.
Facts and data usually clear the confusion.
We choose the option that works best for the long run.

---

### **12. How do you choose what to automate?**

I look for tasks that are repeated again and again.
If many people spend time on the same manual work, it is a good automation candidate.
I check if the task has clear rules and low risk.
The goal is to save time, reduce errors, and make work easier.
Sure! Here's a slightly longer version of the email in **simple and clear English**, also covering the point about **dummy data for Akamai dev**:

---

**Subject:** Deletion Handling in Batch App + Dev Data for Akamai

Hi [Boss's Name],

I wanted to update you on two things related to the batch application and Akamai setup:

### 1. **Deletion Handling in Batch Process**

We’ve added logic to manage record deletions safely:

* **Warning Threshold**: If more than 20% of the table records are marked for deletion in a batch run, a warning will be logged. This helps us catch any unusual or risky deletion patterns.
* **Soft Delete with Retention**: Instead of hard deleting records immediately, we mark them as deleted and keep them for 7 days. After that, a scheduled job will permanently remove them.

On the **frontend**, we will only show active (non-deleted) records to users. For admin views, we can optionally display soft-deleted entries with a note like “Pending Deletion — X days left” if needed.

### 2. **Dummy Data for Akamai Development**

Since Akamai doesn’t offer a full sandbox, I’m exploring two approaches:

* Use the **Akamai staging environment** to test safe dummy properties without affecting live traffic.
* Alternatively, we can mock API responses locally to simulate Akamai behavior in dev/test environments.

Let me know if you’d like to review or change any part of this approach.

Best regards,
[Your Name]

---

Let me know if you’d like this personalized with specific table names, environments, or if you want a shorter summary version.


| Task                                                      | Subtasks                                                                                                                                                                                                                            |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Design GitLab pipeline architecture**                   | 1. Define reusable stage templates and naming conventions. 2. Establish CI folder structure for common, maven, gradle components. 3. Document how accounts (system, bot) interact with each stage.                                  |
| **Convert Jenkins logic to GitLab YAML for Maven**        | 1. Translate existing Jenkins stages/steps into GitLab `.gitlab-ci.yml`. 2. Integrate Maven dependency scan and upgrade jobs with proper caching/artifacts. 3. Wire jobs to use Jira key, branch names, and MR info from variables. |
| **Convert Jenkins logic to GitLab YAML for Gradle**       | 1. Mirror Maven pipeline stages using Gradle commands and plugins. 2. Configure Gradle dependency update tool and reporting. 3. Validate full Gradle pipeline on a sample project and refine rules.                                 |
| **Integrate Python scripts for Jira and PR in GitLab CI** | 1. Connect `create_jira_ticket.py` to GitLab CI variables and secrets. 2. Integrate PR creation script with GitLab API and branch naming strategy. 3. Add logging, error handling, and clear exit codes for pipeline visibility.    |
| **Setup secure GitLab CI/CD variables**                   | 1. Create Jira, Git, and system tokens in GitLab as masked, protected variables. 2. Validate token scopes for Jira issue create/update and Git MR create. 3. Document variable usage and rotation process for security reviews.     |
| **Build `run_upgrade.sh` with version fallback**          | 1. Implement logic to iterate from latest to lower versions on test failure. 2. Add support for exclude/common dependency lists from pipeline inputs. 3. Parse test results and set pipeline status / messages accordingly.         |
| **Test E2E pipeline flow in demo repo**                   | 1. Run full pipeline on a controlled Maven project with fake upgrades. 2. Verify Jira ticket creation, branch creation, and MR generation. 3. Capture defects, edge cases, and refine scripts based on test runs.                   |
| **Document user onboarding steps for SETS teams**         | 1. Create a “How to include evergreen pipeline” guide with examples. 2. Describe required variables, permissions, and expected outputs. 3. Add troubleshooting section for common failures (auth, tests, MR).                       |
| **Create Visio diagrams and HLD documentation**           | 1. Build GitLab + Evergreen swimlane and flow diagrams in Visio. 2. Align diagrams with final pipeline stages and scripts. 3. Export and maintain HLD pack (Visio, PDF, links) for wider sharing.                                   |

Migrate existing project from Stash to GitLab	- Create new GitLab project under FUSION- Migrate full repository & history- Validate build after migration
Raise GitLab maintainer/developer access requests	- Submit access request for required users- Map groups and permissions- Validate access in project settings
Create Evergreen project's own CI pipeline (versioning, scanning, release)	- Define version tagging logic- Integrate Sonar & Veracode pipeline stages- Publish artifacts to Nexus registry
Define testing strategy and methods	- Establish unit, integration, regression approach- Define quality gates & thresholds- Document required test data and environments
Production planning & first pilot validation	- Identify pilot SETS API for rollout- Conduct controlled validation cycle- Plan production release window & rollback steps



