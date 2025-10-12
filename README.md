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
In modern Java applications, managing dependencies is a critical but often overlooked task.

I noticed that manual upgrades not only delayed releases but also increased the risk of missing security patches — particularly for Prisma and Veracode vulnerabilities.

To solve this, I took the initiative to design and implement an Application Evergreening Engine — a component that automates dependency upgrades with minimal manual effort.

This engine has already been adopted across multiple SETS projects, especially in SDS APIs like ATM, where it runs quarterly and ensures we're always on top of vulnerability fixes.

Right now, the system is fully integrated into dev and pre-prod environments, and strictly follows BAU governance to ensure that all changes are reviewed and approved before moving to production.

The result? A repeatable, scalable, and secure way to keep dependencies fresh, without slowing teams down.


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
