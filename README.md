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

7. Mentoring a Team Member for Career Growth

In one of our recent projects, I was leading a team that included new members unfamiliar with our client’s expectations and working standards. Two of them were apprentices, just starting out in their careers. While they were technically sound, they lacked exposure to real-world development cycles, coding practices, and client interactions.

I took a mentorship-based approach to help them grow. I started by giving them small but meaningful tasks and paired with them using pair programming sessions. This helped me understand their strengths and learning styles. One apprentice was good at logic but struggled with frontend work, while the other was comfortable with UI but unsure about backend flows. I gave each one tailored assignments to help them build confidence in their weaker areas.

I also encouraged them to participate in client meetings, helping them prepare beforehand and gradually take the lead in presenting their work. When they made mistakes, I treated them as learning moments instead of criticisms. We regularly reviewed code together, and I showed them how to write cleaner, more maintainable code.

Within a few months, both apprentices were confidently contributing to the project. They even took ownership of small modules on their own. Their growth didn’t go unnoticed — they received appreciation from both the client and our internal management.

Impact: This mentorship improved project delivery quality, increased team bandwidth, and helped two early-career developers find their confidence and footing in the industry.

1. Coordinating with Multiple Stakeholders to Meet a Tight Deadline

A while back, I was assigned to lead a crucial module in a new project for a well-known client. Although I had previously worked with this client, the rest of my team hadn’t. This gave me a unique advantage — I understood the client’s expectations, communication style, and standards. But since my team members were new to both the client and the project scope, I had to play a key role in bridging that gap.

The timeline was tight, and the expectations were very clear. We couldn’t afford any confusion or delays. So I took the initiative to explain the client’s business and technical requirements in simple terms to the team. I also created a safe space for open discussions. Some team members were hesitant to speak in large meetings, so I made sure to have one-on-one conversations where they could ask questions freely and share any concerns. That helped build trust and gave everyone more confidence.

One of the biggest challenges was to make sure our team discussions were focused and productive. I noticed some meetings would go off-track or become too detailed. So I introduced a new format for team syncs — we used checklists, clear agendas, and time-boxed discussions. We focused on decisions, blockers, and updates. This brought more clarity and reduced confusion.

Another important step I took was preparing the team before client meetings. I guided them on how to ask the right questions and present updates in a way that aligned with the client’s expectations. This helped build our credibility. The client saw us as a team that not only understood their business but also delivered solutions that fit their needs.

Despite the tight schedule, we delivered the module on time. The client appreciated our professionalism, and my teammates felt more confident about working in similar high-pressure environments. This experience showed me that strong communication and clear direction are just as important as technical skill when it comes to delivering results as a team.

Impact: This approach led to on-time delivery, strengthened the client relationship, and improved my team’s confidence and capability for future projects.

2. Solving a Technical Problem with High Project Impact

In one of our projects, we had a consistent problem where developers were spending too much time manually upgrading dependencies in Java APIs to fix vulnerabilities flagged by tools like Veracode and Prisma. These issues popped up frequently, and fixing them manually across multiple services was taking a toll on developer time and slowing down release cycles. It was repetitive, time-consuming, and error-prone — especially as the number of APIs and microservices in our environment increased.

I decided to tackle this by building something more sustainable. I designed and implemented an “evergreen” automation component that could automatically upgrade project dependencies in POM and Gradle files as per the latest security standards. The idea was to take the manual effort out of the equation and reduce the chances of human error.

I built this as part of a Jenkins pipeline, which could be triggered regularly or manually based on team preferences. The pipeline scanned the current dependencies, checked for newer versions with security patches, and then applied those updates in a structured way. It even handled version compatibility issues by running validations post-upgrade. I tested this thoroughly and rolled it out in phases, starting with smaller projects.

Eventually, this component was adopted by many development teams across the organization, especially in the MKD and SEtS teams. It became a core utility in our CI/CD process, saving countless hours of manual effort and ensuring we stayed compliant with security standards.

Impact: This automation led to faster patching of vulnerabilities, improved overall code quality, and saved dozens of developer hours every sprint — making the delivery cycle more secure and efficient across multiple teams.
